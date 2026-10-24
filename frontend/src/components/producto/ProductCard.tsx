import Link from "next/link";
import FotoSombrero from "./FotoSombrero";
import Precio from "./Precio";
import { RUTAS } from "@/config/sitio";
import { getNivelVueltas, porcentajeDescuento } from "@/lib/productos";
import type { Producto } from "@/types/producto";

export default function ProductCard({ producto }: { producto: Producto }) {
  const descuento = porcentajeDescuento(producto);
  const nivel = getNivelVueltas(producto.vueltas);

  return (
    <Link href={RUTAS.producto(producto.slug)} className="group block">
      <div className="relative overflow-hidden">
        <FotoSombrero producto={producto} className="transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute left-0 top-3 flex flex-col items-start gap-1">
          {producto.nuevo && (
            <span className="bg-negro px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-hueso">Nuevo</span>
          )}
          {descuento > 0 && (
            <span className="bg-rojo px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
              -{descuento}%
            </span>
          )}
        </div>
        <span className="absolute inset-x-0 bottom-0 translate-y-full bg-negro py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-hueso transition-transform duration-300 group-hover:translate-y-0">
          Ver sombrero →
        </span>
      </div>
      {/* En celular el precio va debajo del nombre; desde sm, a la derecha */}
      <div className="mt-4 flex flex-col gap-1 border-t border-negro/15 pt-3 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
        <div className="min-w-0">
          <h3 className="font-display text-xl uppercase leading-tight group-hover:text-oro">{producto.nombre}</h3>
          <p className="mt-0.5 text-xs uppercase tracking-[0.15em] text-negro/55">
            {producto.vueltas} vueltas{nivel && ` · ${nivel.nombre}`}
          </p>
        </div>
        <Precio precio={producto.precio} precioAnterior={producto.precioAnterior} tamano="apilado" />
      </div>
    </Link>
  );
}
