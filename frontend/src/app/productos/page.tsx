import { redirect } from "next/navigation";
import { RUTAS } from "@/config/sitio";

// El catálogo vive en la página única; esta ruta se mantiene para enlaces antiguos.
export default async function ProductosPage({ searchParams }: { searchParams: Promise<{ vueltas?: string }> }) {
  const { vueltas } = await searchParams;
  redirect(vueltas ? RUTAS.catalogoPorVueltas(Number(vueltas)) : RUTAS.catalogo);
}
