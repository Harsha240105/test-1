import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface WishlistItem {
  id: string;
  title: string;
  price: string;
  image: string;
  handle: string;
}

interface WishlistStore {
  items: WishlistItem[];
  addItem: (item: WishlistItem) => void;
  removeItem: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  toggleItem: (item: WishlistItem) => void;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) => {
        const { items } = get();
        if (!items.find(i => i.id === item.id)) {
          set({ items: [...items, item] });
        }
      },
      
      removeItem: (id) => {
        set({ items: get().items.filter(item => item.id !== id) });
      },
      
      isInWishlist: (id) => {
        return get().items.some(item => item.id === id);
      },
      
      toggleItem: (item) => {
        const { isInWishlist, addItem, removeItem } = get();
        if (isInWishlist(item.id)) {
          removeItem(item.id);
        } else {
          addItem(item);
        }
      }
    }),
    {
      name: 'wishlist-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
