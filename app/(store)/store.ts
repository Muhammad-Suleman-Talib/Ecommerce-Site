import { ProductType } from "@/sanity.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BasketItem {
  product: ProductType;
  quantity: number;
}

interface BasketState {
  basket: BasketItem[];
  addItem: (product: ProductType, quantity: number) => void;
  removeItem: (product: ProductType, quantity: number) => void;
  clearBasket: () => void;
  getTotalPrice: () => number;
  getItemCount: (product: ProductType) => number;
  getGroupedItems: () => BasketItem[];
}

const useBasketStore = create<BasketState>()(
  persist(
    (set, get) => ({
      basket: [],

      addItem: (product, quantity) => {
        if (quantity <= 0) return;
        set((state) => {
          const existingItemIndex = state.basket.findIndex(
            (item) => item.product._id === product._id
          );
          if (existingItemIndex !== -1) {
            const updatedBasket = [...state.basket];
            updatedBasket[existingItemIndex].quantity += quantity;
            return { basket: updatedBasket };
          }
          return { basket: [...state.basket, { product, quantity }] };
        });
      },

      removeItem: (product, quantity) => {
        if (quantity <= 0) return;
        set((state) => {
          const existingItemIndex = state.basket.findIndex(
            (item) => item.product._id === product._id
          );
          if (existingItemIndex !== -1) {
            const updatedBasket = [...state.basket];
            const newQuantity = updatedBasket[existingItemIndex].quantity - quantity;
            if (newQuantity <= 0) {
              updatedBasket.splice(existingItemIndex, 1);
            } else {
              updatedBasket[existingItemIndex].quantity = newQuantity;
            }
            return { basket: updatedBasket };
          }
          return state;
        });
      },

      clearBasket: () => set({ basket: [] }),

      getTotalPrice: () =>
        get().basket.reduce((total, item) => {
          if (item.product && item.product.price) {
            return total + item.product.price * item.quantity;
          }
          return total;
        }, 0),
      getItemCount: (product) =>
        get().basket.find((item) => item.product._id === product._id)?.quantity || 0,

      getGroupedItems: () => [...get().basket],
    }),
    {
      name: "basket-store",
    }
  )
);

export default useBasketStore;
