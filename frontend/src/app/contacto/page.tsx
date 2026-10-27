import type { Metadata } from "next";
import Contacto from "@/components/inicio/Contacto";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Cómo comprar tu sombrero vueltiao y datos de contacto de la tienda.",
};

export default function ContactoPage() {
  return <Contacto />;
}
