"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

export type CartProduct = {
  id: string | number;
  title: string;
  slug: string;
  image: string;
  price: number;
};

export type CartItem = {
  product: CartProduct;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  addToCart: (product: CartProduct) => void;
  removeFromCart: (productId: CartProduct["id"]) => void;
  setQuantity: (productId: CartProduct["id"], quantity: number) => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      addToCart: (product) => {
        setItems((currentItems) => {
          const existingItem = currentItems.find(
            (item) => item.product.id === product.id,
          );

          if (existingItem) {
            return currentItems.map((item) =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            );
          }

          return [...currentItems, { product, quantity: 1 }];
        });
      },
      removeFromCart: (productId) => {
        setItems((currentItems) =>
          currentItems.filter((item) => item.product.id !== productId),
        );
      },
      setQuantity: (productId, quantity) => {
        if (quantity < 1) {
          setItems((currentItems) =>
            currentItems.filter((item) => item.product.id !== productId),
          );
          return;
        }

        setItems((currentItems) =>
          currentItems.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item,
          ),
        );
      },
    }),
    [items],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
