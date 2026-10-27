import Image from "next/image";
import Link from "next/link";
import FotoSombrero from "./FotoSombrero";
import Precio from "./Precio";
import { RUTAS } from "@/config/sitio";
import { getNivelVueltas, porcentajeDescuento } from "@/lib/productos";
import type { Producto } from "@/types/producto";

export default function ProductCard({ producto }: { producto: Producto }) {
  const descuento = porcentajeDescuento(producto);
  const nivel = getNivelVueltas(producto.vueltas);
  const segunda = producto.imagen && producto.galeria?.[0];

  return (
    <Link href={RUTAS.producto(producto.slug)} className="aparecer group block">
      <div className="relative overflow-hidden rounded-2xl ring-1 ring-negro/5 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-negro/10">
        <FotoSombrero producto={producto} className="transition-transform duration-500 group-hover:scale-[1.04]" />
        {/* Con segunda foto, al pasar el mouse se cambia por ella */}
        {segunda && (
          <Image
            src={segunda}
            alt=""
            fill
            sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
            className="bg-white object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}
        <div className="absolute left-2.5 top-2.5 flex flex-col items-start gap-1">
          {producto.nuevo && (
            <span className="rounded-full bg-white/80 text-negro ring-1 ring-negro/5 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-medium">Nuevo</span>
          )}
          {descuento > 0 && (
            <span className="rounded-full bg-oferta px-2.5 py-0.5 text-[11px] font-bold text-white">-{descuento}%</span>
          )}
        </div>
      </div>
      <div className="mt-3 px-0.5">
        <p className="text-xs text-negro/60">
          {producto.vueltas} vueltas{nivel && ` · ${nivel.nombre}`}
        </p>
        <h3 className="mt-0.5 font-medium leading-snug group-hover:text-oro">{producto.nombre}</h3>
        <Precio precio={producto.precio} precioAnterior={producto.precioAnterior} className="mt-1 text-[15px]" />
      </div>
    </Link>
  );
}
