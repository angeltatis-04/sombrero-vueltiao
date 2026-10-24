import type { Metadata } from "next";
import Carrito from "@/components/carrito/Carrito";

export const metadata: Metadata = { title: "Carrito" };

export default function CarritoPage() {
  return <Carrito />;
}
