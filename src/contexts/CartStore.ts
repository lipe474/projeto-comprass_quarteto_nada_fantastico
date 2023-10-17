import { create } from "zustand";
import { ProductDTO } from "@dtos/ProductDTO";

type CartStore = {
  cart: ProductDTO[];
  addToCart: (product: ProductDTO) => void;
  removeFromCartOnHomeScreen: (id: number) => void;
  removeFromCart: (id: number) => void;
  deleteFromCart: (id: number) => void;
};

export const useCartStore = create<CartStore>((set) => {
  return {
    cart: [],
    addToCart: (product) =>
      set((state) => {

        const updatedCart = state.cart.map((p) => {
          if (p.id === product.id) {
            return { ...p, count: p.count + 1 };
          }
          return p;
        });
    
        if (!updatedCart.some((p) => p.id === product.id)) {
          updatedCart.push({ ...product, count: 1 });
        }
    
        return { cart: updatedCart };
      }),
    removeFromCartOnHomeScreen: (id) =>
      set((state) => {
        const updatedCart = state.cart.map((p) => {
          if (p.id === id) {
            p.count = Math.max(1, p.count - 1);
          }
          return p;
        });
    
        const filteredCart = updatedCart.filter((p) => p.count > 0);
    
        return { cart: filteredCart };
      }),
    removeFromCart: (id) =>
      set((state) => {
        const updatedCart = state.cart.map((p) => {
          if (p.id === id) {
            p.count = Math.max(0, p.count - 1);
          }
          return p;
        });
    
        return { cart: updatedCart };
      }),
    deleteFromCart: (id) =>
      set((state) => {
        const updatedCart = state.cart.filter((p) => p.id !== id);
        return { cart: updatedCart };
      })
  };
});
