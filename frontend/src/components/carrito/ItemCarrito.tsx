import Link from "next/link";
import FotoSombrero from "@/components/producto/FotoSombrero";
import SelectorCantidad from "@/components/ui/SelectorCantidad";
import { RUTAS } from "@/config/sitio";
import { TALLAS } from "@/data/catalogo";
import { formatoCOP } from "@/lib/format";
import { getNivelVueltas } from "@/lib/productos";
import type { LineaCarrito } from "@/types/carrito";

type Props = {
  linea: LineaCarrito;
  onCambiarCantidad: (cantidad: number) => void;
  onCambiarTalla: (talla: string) => void;
  onQuitar: () => void;
};

export default function ItemCarrito({ linea, onCambiarCantidad, onCambiarTalla, onQuitar }: Props) {
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
      <Link href={href} className="block self-start overflow-hidden rounded-xl ring-1 ring-negro/5">
        <FotoSombrero producto={producto} sizes="8rem" />
      </Link>

      <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs text-negro/60">
            {producto.vueltas} vueltas{nivel && ` · ${nivel.nombre}`}
          </p>
          <Link href={href} className="mt-0.5 block text-lg font-semibold leading-tight hover:text-oro">
            {producto.nombre}
          </Link>
          <dl className="mt-2 space-y-0.5 text-sm text-negro/75">
            <div className="flex items-center gap-1.5">
              <dt>
                <label htmlFor={`talla-${linea.clave}`}>Talla:</label>
              </dt>
              <dd>
                <select
                  id={`talla-${linea.clave}`}
                  value={talla}
                  onChange={(e) => onCambiarTalla(e.target.value)}
                  className="rounded-lg border border-negro/15 bg-white px-2 py-1 font-medium text-negro outline-none focus:border-negro"
                >
                  {TALLAS.map((t) => (
                    <option key={t.talla} value={t.talla}>
                      {t.talla} ({t.centimetros})
                    </option>
                  ))}
                </select>
              </dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Precio:</dt>
              <dd>{formatoCOP(producto.precio)}</dd>
            </div>
          </dl>
          {detallesPersonalizacion.length > 0 && (
            <div className="mt-3 rounded-xl bg-hueso px-3 py-2 text-sm">
              <p className="text-xs font-medium text-negro/60">Personalización</p>
              <dl>
                {detallesPersonalizacion.map(([k, v]) => (
                  <div key={k} className="mt-1 flex gap-1.5">
                    <dt className="shrink-0 text-negro/70">{k}:</dt>
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
            className="text-sm text-negro/60 underline-offset-4 hover:text-rojo hover:underline"
          >
            Eliminar
          </button>
        </div>
      </div>
    </li>
  );
}
