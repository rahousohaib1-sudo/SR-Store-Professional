"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type CartItem = {
  productId: string;
  variantId: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  cartCount: number;
  subtotal: number;
  addToCart: (productId: string, variantId: string, quantity?: number) => void;
  updateQuantity: (productId: string, variantId: string, quantity: number) => void;
  removeFromCart: (productId: string, variantId: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = "sr-store-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as CartItem[];
        if (Array.isArray(parsed)) setItems(parsed);
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const products = useMemo(() => {
    return items.map((item) => ({
      ...item,
      price: 0,
    }));
  }, [items]);

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = items.reduce((sum, item) => {
    const product = require("@/lib/products").products.find((p: { id: string }) => p.id === item.productId);
    const unitPrice = product?.price ?? 0;
    return sum + unitPrice * item.quantity;
  }, 0);

  const addToCart = (productId: string, variantId: string, quantity = 1) => {
    setItems((current) => {
      const found = current.find((item) => item.productId === productId && item.variantId === variantId);
      if (found) {
        return current.map((item) =>
          item.productId === productId && item.variantId === variantId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...current, { productId, variantId, quantity }];
    });
  };

  const updateQuantity = (productId: string, variantId: string, quantity: number) => {
    setItems((current) =>
      current
        .map((item) =>
          item.productId === productId && item.variantId === variantId
            ? { ...item, quantity: Math.max(0, quantity) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (productId: string, variantId: string) => {
    setItems((current) => current.filter((item) => !(item.productId === productId && item.variantId === variantId)));
  };

  const clearCart = () => setItems([]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      cartCount,
      subtotal,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
    }),
    [items, cartCount, subtotal],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
