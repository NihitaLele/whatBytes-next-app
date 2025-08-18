"use client";
import { createContext, useContext, useMemo } from "react";
import useLocalStorage from "@/lib/useLocalStorage";

const CartCtx = createContext();
export const useCart = () => useContext(CartCtx);

export function CartProvider({ children }) {
  const [items, setItems] = useLocalStorage("cart", []);

  const add = (product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + qty } : p));
      }
      return [...prev, { ...product, qty }];
    });
  };

  const remove = (id) => setItems((prev) => prev.filter((p) => p.id !== id));
  const setQty = (id, qty) => setItems((prev) => prev.map((p) => (p.id === id ? { ...p, qty } : p)));
  const clear = () => setItems([]);

  const summary = useMemo(() => {
    const count = items.reduce((a, p) => a + p.qty, 0);
    const subtotal = items.reduce((a, p) => a + p.qty * p.price, 0);
    return { count, subtotal };
  }, [items]);

  return (
    <CartCtx.Provider value={{ items, add, remove, setQty, clear, summary }}>
      {children}
    </CartCtx.Provider>
  );
}