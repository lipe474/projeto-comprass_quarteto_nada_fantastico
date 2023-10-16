import { create } from "zustand";
import { ProductDTO } from "@dtos/ProductDTO";

type CartStore = {
  cart: ProductDTO[];
  addToCart: (product: ProductDTO) => void;
  removeFromCart: (id: number) => void;
};

export const useCartStore = create<CartStore>((set) => {
  return {
    cart: [],
    addToCart: (product) =>
      set((state) => {
        const updatedCart = [...state.cart];
        const existingProduct = updatedCart.find((p) => p.id === product.id);

        if (existingProduct) {
          existingProduct.count += 1;
        } else {
          updatedCart.push({ ...product, count: 1 });
        }

        return { cart: updatedCart };
      }),
    removeFromCart: (id) =>
      set((state) => {
        const updatedCart = [...state.cart];
        const existingProductIndex = updatedCart.findIndex((p) => p.id === id);

        if (existingProductIndex !== -1) {
          const existingProduct = updatedCart[existingProductIndex];
          if (existingProduct.count > 1) {
            existingProduct.count -= 1;
          } else {
            updatedCart.splice(existingProductIndex, 1);
          }
        }

        return { cart: updatedCart };
      }),
    };
  });