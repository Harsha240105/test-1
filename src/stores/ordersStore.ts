import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface OrderItem {
  id: string; // variant id
  title: string;
  price: number;
  quantity: number;
  discount?: number;
}

export interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  createdAt: string;
  status: 'Processing' | 'Shipped' | 'Out for Delivery' | 'Delivered';
}

interface OrdersStore {
  orders: Order[];
  createOrder: (items: OrderItem[], total: number) => Order;
  getOrder: (id: string) => Order | undefined;
  updateStatus: (id: string, status: Order['status']) => void;
}

export const useOrdersStore = create<OrdersStore>()(
  persist(
    (set, get) => ({
      orders: [],

      createOrder: (items, total) => {
        const id = `ORD-${Math.random().toString(36).slice(2, 9).toUpperCase()}`;
        const order: Order = {
          id,
          items,
          total,
          createdAt: new Date().toISOString(),
          status: 'Processing',
        };
        set({ orders: [order, ...get().orders] });
        return order;
      },

      getOrder: (id) => get().orders.find(o => o.id === id),

      updateStatus: (id, status) => {
        set({ orders: get().orders.map(o => o.id === id ? { ...o, status } : o) });
      }
    }),
    {
      name: 'orders-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
