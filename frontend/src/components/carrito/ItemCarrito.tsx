import Link from "next/link";
import FotoSombrero from "@/components/producto/FotoSombrero";
import SelectorCantidad from "@/components/ui/SelectorCantidad";
import { RUTAS } from "@/config/sitio";
import { formatoCOP } from "@/lib/format";
import { getNivelVueltas } from "@/lib/productos";
import type { LineaCarrito } from "@/types/carrito";

type Props = {
  linea: LineaCarrito;
  onCambiarCantidad: (cantidad: number) => void;
  onQuitar: () => void;
};

export default function ItemCarrito({ linea, onCambiarCantidad, onQuitar }: Props) {
  const { producto, talla, cantidad, personalizacion } = linea;
  const href = RUTAS.producto(producto.slug);
  const nivel = getNivelVueltas(producto.vueltas);

  const detallesPersonalizacion = [
    personalizacion?.nombre && ["Nombre", personalizacion.nombre],
    personalizacion?.ala && ["Ala", personalizacion.ala],
    personalizacion?.indicaciones && ["Indicaciones", personalizacion.indicaciones],
  ].filter(Boolean) as [string, string][];

  return (
    <li className="grid grid-cols-[6.5rem_1fr] gap-4 py-6 sm:grid-cols-[8rem_1fr] sm:gap-6">
      <Link href={href} className="block self-start overflow-hidden bg-white">
        <FotoSombrero producto={producto} sizes="8rem" />
      </Link>

      <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:justify-between">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-oro">
            {producto.vueltas} vueltas{nivel && ` · ${nivel.nombre}`}
          </p>
          <Link href={href} className="mt-1 block font-display text-2xl uppercase leading-tight hover:text-oro">
            {producto.nombre}
          </Link>
          <dl className="mt-2 space-y-0.5 text-sm text-negro/65">
            <div className="flex gap-1.5">
              <dt>Talla:</dt>
              <dd className="font-medium text-negro">{talla}</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Precio:</dt>
              <dd>{formatoCOP(producto.precio)}</dd>
            </div>
          </dl>
          {detallesPersonalizacion.length > 0 && (
            <div className="mt-3 border-l-2 border-arena pl-3 text-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-negro/50">Personalización</p>
              <dl>
                {detallesPersonalizacion.map(([k, v]) => (
                  <div key={k} className="mt-1 flex gap-1.5">
                    <dt className="shrink-0 text-negro/60">{k}:</dt>
                    <dd className="break-words">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 sm:flex-col sm:flex-nowrap sm:items-end sm:justify-start">
          <p className="font-semibold tabular-nums">{formatoCOP(producto.precio * cantidad)}</p>
          <SelectorCantidad valor={cantidad} onCambiar={onCambiarCantidad} tamano="sm" />
          <button
            onClick={onQuitar}
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-negro/55 underline-offset-4 hover:text-rojo hover:underline"
          >
            Eliminar
          </button>
        </div>
      </div>
    </li>
  );
}
