const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const pino = require('pino');
const { initPool } = require('./db');

const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, '..', 'data', 'products.json');
const ORDERS_FILE = path.join(__dirname, '..', 'data', 'orders.json');

let pool;
(async () => {
  if (process.env.DB_HOST && process.env.DB_NAME) {
    try {
      pool = await initPool(process.env);
      logger.info('Initialized DB pool');
    } catch (err) {
      logger.error({ err }, 'DB init failed, falling back to JSON');
    }
  }
})();

function readProductsFromJson() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    logger.error({ err }, 'Failed reading products.json');
    return [];
  }
}

function readOrdersJson() {
  try {
    const raw = fs.readFileSync(ORDERS_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    return [];
  }
}

function writeOrdersJson(orders) {
  fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2));
}

// GET /api/products?search=&category=&brand=&sale=true
app.get('/api/products', async (req, res) => {
  const { search, category, brand, sale } = req.query;

  // If DB is configured, query DB
  if (pool) {
    try {
      let sql = 'SELECT * FROM products WHERE 1=1';
      const params = [];
      if (category) { sql += ' AND category = ?'; params.push(category); }
      if (brand) { sql += ' AND brand = ?'; params.push(brand); }
      if (sale === 'true') { sql += ' AND discount > 0'; }
      if (search) { sql += ' AND (name LIKE ? OR brand LIKE ? OR description LIKE ?)'; params.push(`%${search}%`, `%${search}%`, `%${search}%`); }
      const [rows] = await pool.query(sql, params);
      return res.json({ data: rows });
    } catch (err) {
      logger.error({ err }, 'DB query failed');
      // fall through to JSON
    }
  }

  // Fallback: read from JSON file
  let products = readProductsFromJson();
  products = products.filter(p => {
    const node = p.node || p;
    if (category && node.category !== category) return false;
    if (brand && (node.brand || '').toLowerCase() !== (brand || '').toLowerCase()) return false;
    if (sale === 'true' && !(node.discountPercent > 0)) return false;
    if (search) {
      const q = search.toLowerCase();
      if (!((node.title || '').toLowerCase().includes(q) || (node.description || '').toLowerCase().includes(q) || (node.brand || '').toLowerCase().includes(q))) return false;
    }
    return true;
  });

  res.json({ data: products.map(p => p.node || p) });
});

// GET /api/product/:handle
app.get('/api/product/:handle', async (req, res) => {
  const { handle } = req.params;
  if (pool) {
    try {
      const [rows] = await pool.query('SELECT * FROM products WHERE handle = ? LIMIT 1', [handle]);
      if (rows.length) return res.json({ data: rows[0] });
    } catch (err) {
      logger.error({ err }, 'DB query failed for product');
    }
  }

  const products = readProductsFromJson();
  const found = products.find(p => (p.node && p.node.handle === handle) || p.handle === handle);
  if (!found) return res.status(404).json({ error: 'Not found' });
  res.json({ data: found.node || found });
});

// POST /api/orders  { userId, productId, size }
app.post('/api/orders', async (req, res) => {
  const { userId, productId, size } = req.body;
  const createdAt = new Date();
  const receiptId = `R-${Math.random().toString(36).slice(2,9).toUpperCase()}`;

  // If DB configured, try to insert
  if (pool) {
    try {
      const [result] = await pool.query('INSERT INTO orders (user_id, product_id, size, order_date, status, receipt_id) VALUES (?, ?, ?, ?, ?, ?)', [userId || null, productId, size || null, createdAt, 'Processing', receiptId]);
      const insertedId = result.insertId;
      return res.json({ data: { id: insertedId, receiptId } });
    } catch (err) {
      logger.error({ err }, 'DB insert failed');
    }
  }

  // Fallback: write to local orders.json
  const orders = readOrdersJson();
  const newOrder = {
    id: orders.length ? (orders[orders.length-1].id + 1) : 1,
    user_id: userId || null,
    product_id: productId,
    size: size || null,
    order_date: createdAt.toISOString(),
    status: 'Processing',
    receipt_id: receiptId
  };
  orders.push(newOrder);
  writeOrdersJson(orders);
  res.json({ data: newOrder });
});

// GET /api/orders/:id
app.get('/api/orders/:id', async (req, res) => {
  const id = req.params.id;
  if (pool) {
    try {
      const [rows] = await pool.query('SELECT * FROM orders WHERE id = ? LIMIT 1', [id]);
      if (rows.length) return res.json({ data: rows[0] });
    } catch (err) {
      logger.error({ err }, 'DB query failed');
    }
  }

  const orders = readOrdersJson();
  const found = orders.find(o => String(o.id) === String(id) || o.receipt_id === id);
  if (!found) return res.status(404).json({ error: 'Not found' });
  res.json({ data: found });
});

app.listen(PORT, () => logger.info(`API server listening on ${PORT}`));
