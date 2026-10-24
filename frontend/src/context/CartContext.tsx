"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { CARRITO_STORAGE_KEY as STORAGE_KEY } from "@/config/sitio";
import { claveItem } from "@/lib/carrito";
import type { CartItem } from "@/types/carrito";

type CartContextValue = {
  items: CartItem[];
  totalItems: number;
  // false mientras se lee el carrito guardado en el navegador
  cargado: boolean;
  agregar: (item: CartItem) => void;
  // `clave` identifica la línea (ver claveItem): sombrero + talla + personalización
  actualizarCantidad: (clave: string, cantidad: number) => void;
  quitar: (clave: string) => void;
  vaciar: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [cargado, setCargado] = useState(false);

  useEffect(() => {
    try {
      const guardado = localStorage.getItem(STORAGE_KEY);
      if (guardado) setItems(JSON.parse(guardado));
    } catch {}
    setCargado(true);
  }, []);

  useEffect(() => {
    if (!cargado) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items, cargado]);

  const agregar = (nuevo: CartItem) =>
    setItems((prev) => {
      const clave = claveItem(nuevo);
      return prev.some((i) => claveItem(i) === clave)
        ? prev.map((i) => (claveItem(i) === clave ? { ...i, cantidad: i.cantidad + nuevo.cantidad } : i))
        : [...prev, nuevo];
    });

  const actualizarCantidad = (clave: string, cantidad: number) =>
    setItems((prev) => prev.map((i) => (claveItem(i) === clave ? { ...i, cantidad: Math.max(1, cantidad) } : i)));

  const quitar = (clave: string) => setItems((prev) => prev.filter((i) => claveItem(i) !== clave));

  const vaciar = () => setItems([]);

  const totalItems = items.reduce((suma, i) => suma + i.cantidad, 0);

  return (
    <CartContext.Provider value={{ items, totalItems, cargado, agregar, actualizarCantidad, quitar, vaciar }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de CartProvider");
  return ctx;
}
