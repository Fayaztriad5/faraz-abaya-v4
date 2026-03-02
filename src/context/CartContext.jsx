import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CART_STORAGE_KEY = "fa_cart_v1";

const CartContext = createContext(null);

const readStoredCart = () => {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setItems(readStoredCart());
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (product, size = "", imgUrl = "") => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1, size: size || item.size, imgUrl: imgUrl || item.imgUrl }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          imgUrl: imgUrl || product.imgs[0],
          qty: 1,
          size,
        },
      ];
    });
  };

  const updateQty = (id, qty) => {
    if (qty <= 0) return removeItem(id);
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, qty } : item)));
  };

  const setItemSize = (id, size) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, size } : item)));
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setItems([]);

  const openCart = () => setOpen(true);
  const closeCart = () => setOpen(false);
  const toggleCart = () => setOpen((v) => !v);

  const totalQty = items.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  const value = useMemo(
    () => ({
      items,
      open,
      addItem,
      updateQty,
      setItemSize,
      removeItem,
      clearCart,
      openCart,
      closeCart,
      toggleCart,
      totalQty,
      subtotal,
    }),
    [items, open, totalQty, subtotal]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
