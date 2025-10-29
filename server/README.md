# ShoeCart Backend (Express + MySQL)

This small backend provides API endpoints used by the frontend. It supports two modes:

- MySQL mode: if you provide DB connection via environment variables, the server will use MySQL for products and orders.
- Fallback mode: if no DB is configured, the server reads/writes local JSON files under `server/data/`.

Quick setup

1. Install dependencies:

```powershell
cd server
npm install
```

2. (Optional) Configure MySQL environment variables (recommended for persistence):

Create a `.env` file in `server/` with:

```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=shoe_cart
PORT=3000
```

3. Create the database and tables using the provided SQL schema:

```powershell
# using mysql CLI
mysql -u root -p
CREATE DATABASE shoe_cart;
USE shoe_cart;
SOURCE sql/schema.sql;
```

4. Start the server (dev):

```powershell
npm run dev
```

API endpoints

- GET /api/products?search=&category=&brand=&sale=true
- GET /api/product/:handle
- POST /api/orders  { userId, productId, size }
- GET /api/orders/:id

Notes

- The server will return  JSON from `server/data/products.json` if MySQL is not configured. You can export or copy `src/data/mockProducts.ts` into that JSON file for a richer dataset.
- After you run the backend, the frontend (Vite) is already configured to proxy `/api` to `http://localhost:3000` in `vite.config.ts` for development.
