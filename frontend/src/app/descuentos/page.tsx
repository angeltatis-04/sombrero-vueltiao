import type { Metadata } from "next";
import Link from "next/link";
import GrillaProductos from "@/components/producto/GrillaProductos";
import TituloSeccion from "@/components/ui/TituloSeccion";
import { RUTAS } from "@/config/sitio";
import { getEnDescuento } from "@/lib/productos";

export const metadata: Metadata = {
  title: "Descuentos",
  description: "Sombreros vueltiaos originales con precio especial por tiempo limitado.",
};

// Página aparte (no va en el inicio): se llega desde el menú. Los descuentos se editan en data/tienda.ts.
export default function DescuentosPage() {
  const productos = getEnDescuento();

  return (
    // Fondo blanco, igual al de las fotos de los sombreros
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 md:pt-14">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <TituloSeccion antetitulo="Descuentos" as="h1">
            Precios <span className="brillo-oferta">especiales</span>
          </TituloSeccion>
          <p className="max-w-sm text-negro/70">
            Los mismos sombreros originales, tejidos a mano, con garantía y personalización gratis. Por tiempo limitado.
          </p>
        </div>

        {productos.length > 0 ? (
          <GrillaProductos productos={productos} className="mt-10" />
        ) : (
          <div className="mt-10 rounded-2xl bg-hueso px-6 py-16 text-center">
            <p className="text-xl font-semibold">Por ahora no hay descuentos activos</p>
            <Link
              href={RUTAS.catalogo}
              className="mt-6 inline-block rounded-full bg-negro px-5 py-2.5 text-sm font-medium text-white hover:bg-grafito"
            >
              Ver toda la colección
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
