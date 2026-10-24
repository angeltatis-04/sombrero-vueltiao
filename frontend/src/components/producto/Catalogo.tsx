"use client";

import { useMemo, useState } from "react";
import GrillaProductos from "./GrillaProductos";
import { IconoBuscar } from "@/components/ui/Iconos";
import { NIVELES_VUELTAS } from "@/data/catalogo";
import { coincideBusqueda } from "@/lib/productos";
import type { Producto } from "@/types/producto";

type Orden = "relevancia" | "precio-asc" | "precio-desc";

type Props = {
  productos: Producto[];
  vueltasInicial?: number;
  busquedaInicial?: string;
};

export default function Catalogo({ productos, vueltasInicial, busquedaInicial = "" }: Props) {
  const [vueltas, setVueltas] = useState<number | null>(vueltasInicial ?? null);
  const [orden, setOrden] = useState<Orden>("relevancia");
  const [busqueda, setBusqueda] = useState(busquedaInicial);

  const visibles = useMemo(() => {
    const filtrados = productos.filter(
      (p) => (vueltas ? p.vueltas === vueltas : true) && coincideBusqueda(p, busqueda),
    );
    if (orden === "precio-asc") return [...filtrados].sort((a, b) => a.precio - b.precio);
    if (orden === "precio-desc") return [...filtrados].sort((a, b) => b.precio - a.precio);
    return filtrados;
  }, [productos, vueltas, orden, busqueda]);

  const limpiar = () => {
    setVueltas(null);
    setBusqueda("");
  };

  const chip = (activo: boolean) =>
    `shrink-0 border px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
      activo ? "border-negro bg-negro text-hueso" : "border-negro/20 hover:border-negro"
    }`;

  return (
    <>
      <div className="space-y-5 border-b border-negro/10 pb-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <label className="flex h-12 items-center gap-3 border border-negro/20 px-4 focus-within:border-negro md:w-80">
            <IconoBuscar />
            <span className="sr-only">Buscar en la colección</span>
            <input
              type="search"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar sombrero…"
              className="h-full flex-1 bg-transparent text-[15px] outline-none placeholder:text-negro/40"
            />
          </label>
          <label className="flex items-center gap-3 text-sm">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-negro/60">Ordenar por</span>
            <select
              value={orden}
              onChange={(e) => setOrden(e.target.value as Orden)}
              className="h-12 flex-1 border border-negro/20 bg-transparent px-3 outline-none focus:border-negro md:flex-none"
            >
              <option value="relevancia">Relevancia</option>
              <option value="precio-asc">Precio: menor a mayor</option>
              <option value="precio-desc">Precio: mayor a menor</option>
            </select>
          </label>
        </div>

        {/* En celular los filtros se desplazan horizontalmente */}
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:flex-wrap md:px-0" role="group" aria-label="Filtrar por línea">
          <button className={chip(vueltas === null)} onClick={() => setVueltas(null)} aria-pressed={vueltas === null}>
            Todas las líneas
          </button>
          {NIVELES_VUELTAS.map((n) => (
            <button
              key={n.vueltas}
              className={chip(vueltas === n.vueltas)}
              onClick={() => setVueltas(n.vueltas)}
              aria-pressed={vueltas === n.vueltas}
            >
              {n.vueltas} · {n.nombre}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-negro/60" aria-live="polite">
        {visibles.length} {visibles.length === 1 ? "sombrero" : "sombreros"}
        {busqueda.trim() && <> para «{busqueda.trim()}»</>}
      </p>

      {visibles.length > 0 ? (
        <GrillaProductos productos={visibles} className="mt-8" />
      ) : (
        <div className="mt-8 border border-dashed border-negro/20 px-6 py-16 text-center">
          <p className="font-display text-3xl uppercase">No encontramos sombreros con esos filtros</p>
          <p className="mt-2 text-negro/60">Prueba con otra búsqueda o revisa todas las líneas.</p>
          <button
            onClick={limpiar}
            className="mt-6 border-b border-negro pb-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] hover:text-oro"
          >
            Ver toda la colección
          </button>
        </div>
      )}
    </>
  );
}
