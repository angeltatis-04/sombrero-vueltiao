import type { Metadata } from "next";
import GuiaVueltas from "@/components/inicio/GuiaVueltas";

export const metadata: Metadata = {
  title: "Guía de vueltas",
  description: "Qué significan las vueltas de un sombrero vueltiao y cuánto cuesta cada línea.",
};

export default function VueltasPage() {
  return <GuiaVueltas />;
}
