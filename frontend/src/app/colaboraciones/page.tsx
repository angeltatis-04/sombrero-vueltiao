import type { Metadata } from "next";
import Artistas from "@/components/inicio/Artistas";

export const metadata: Metadata = {
  title: "Colaboraciones",
  description: "Artistas que han lucido un sombrero vueltiao original en tarima, giras y eventos.",
};

export default function ColaboracionesPage() {
  return <Artistas />;
}
