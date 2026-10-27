import type { Metadata } from "next";
import Diferencias from "@/components/inicio/Diferencias";
import Nosotros from "@/components/inicio/Nosotros";
import Proceso from "@/components/inicio/Proceso";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Quiénes somos y cómo se teje a mano un sombrero vueltiao en Tuchín, Córdoba.",
};

export default function NosotrosPage() {
  return (
    <>
      <Nosotros />
      <Diferencias />
      <Proceso />
    </>
  );
}
