"use client";

import { useMemo, useState } from "react";
import FotoSombrero from "./FotoSombrero";
import GrillaProductos from "./GrillaProductos";
import { IconoBuscar } from "@/components/ui/Iconos";
import { CATEGORIAS } from "@/data/catalogo";
import { formatoCOP } from "@/lib/format";
import { coincideBusqueda, getCategoria, precioDesde, textoVueltas } from "@/lib/productos";
import type { Categoria, Producto } from "@/types/producto";

type Orden = "relevancia" | "precio-asc" | "precio-desc";

type Props = {
  productos: Producto[];
  vueltasInicial?: number;
  categoriaInicial?: string;
  busquedaInicial?: string;
};

const enCategoria = (c: Categoria) => (p: Producto) => c.vueltas.includes(p.vueltas);

export default function Catalogo({ productos, vueltasInicial, categoriaInicial, busquedaInicial = "" }: Props) {
  const [categoria, setCategoria] = useState<string | null>(
    categoriaInicial ?? (vueltasInicial ? getCategoria(vueltasInicial)?.id : undefined) ?? null,
  );
  const [vueltas, setVueltas] = useState<number | null>(vueltasInicial ?? null);
  const [orden, setOrden] = useState<Orden>("relevancia");
  const [busqueda, setBusqueda] = useState(busquedaInicial);

  const activa = CATEGORIAS.find((c) => c.id === categoria);

  // Foto de muestra de cada categoría: el primer sombrero con foto (o el primero, con ilustración)
  const muestras = useMemo(
    () =>
      Object.fromEntries(
        CATEGORIAS.map((c) => {
          const lista = productos.filter(enCategoria(c));
          return [c.id, lista.find((p) => p.imagen) ?? lista[0]];
        }),
      ),
    [productos],
  );

  const visibles = useMemo(() => {
    const filtrados = productos.filter(
      (p) =>
        (activa ? enCategoria(activa)(p) : true) &&
        (vueltas ? p.vueltas === vueltas : true) &&
        coincideBusqueda(p, busqueda),
    );
    if (orden === "precio-asc") return [...filtrados].sort((a, b) => a.precio - b.precio);
    if (orden === "precio-desc") return [...filtrados].sort((a, b) => b.precio - a.precio);
    return [...filtrados].sort((a, b) => a.vueltas - b.vueltas);
  }, [productos, activa, vueltas, orden, busqueda]);

  // Sin filtros, la colección se muestra ordenada por categoría
  const agrupar = !activa && !busqueda.trim() && orden === "relevancia";

  const elegirCategoria = (id: string | null) => {
    setCategoria(id);
    setVueltas(null);
  };

  const limpiar = () => {
    elegirCategoria(null);
    setBusqueda("");
  };

  const tarjeta = (activo: boolean) =>
    `flex min-w-44 shrink-0 items-center gap-3 rounded-2xl border p-2.5 pr-4 text-left transition md:min-w-0 ${
      activo ? "border-oro bg-oro/5 ring-1 ring-oro" : "border-negro/10 bg-white/70 backdrop-blur hover:-translate-y-0.5 hover:border-negro/25 hover:shadow-md"
    }`;

  const pastilla = (activo: boolean) =>
    `shrink-0 rounded-full px-4 py-1.5 text-sm transition-colors ${
      activo ? "bg-oro text-white" : "bg-negro/5 text-negro/70 hover:bg-negro/10"
    }`;

  return (
    <>
      {/* Categorías: en celular se desplazan horizontalmente */}
      <div
        className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-5 md:px-0"
        role="group"
        aria-label="Categorías"
      >
        <button className={tarjeta(!activa)} onClick={() => elegirCategoria(null)} aria-pressed={!activa}>
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-oro/10 font-display text-xl text-oro">
            {productos.length}
          </span>
          <span>
            <span className="block font-semibold">Todos</span>
            <span className="text-xs text-negro/65">Toda la colección</span>
          </span>
        </button>
        {CATEGORIAS.map((c) => (
          <button key={c.id} className={tarjeta(activa?.id === c.id)} onClick={() => elegirCategoria(c.id)} aria-pressed={activa?.id === c.id}>
            {muestras[c.id] && (
              <FotoSombrero producto={muestras[c.id]} sizes="56px" className="h-14 w-14 shrink-0 rounded-xl" />
            )}
            <span>
              <span className="block font-semibold">{c.nombre}</span>
              <span className="text-xs text-negro/65">Desde {formatoCOP(precioDesde(c))}</span>
            </span>
          </button>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {/* Dentro de una categoría se puede afinar por vueltas */}
        {activa ? (
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 md:mx-0 md:px-0" role="group" aria-label="Filtrar por vueltas">
            <button className={pastilla(vueltas === null)} onClick={() => setVueltas(null)} aria-pressed={vueltas === null}>
              Todas
            </button>
            {activa.vueltas.map((v) => (
              <button key={v} className={pastilla(vueltas === v)} onClick={() => setVueltas(v)} aria-pressed={vueltas === v}>
                {v} vueltas
              </button>
            ))}
          </div>
        ) : (
          <span />
        )}

        <div className="flex gap-2">
          <label className="flex h-11 min-w-0 flex-1 items-center gap-2 rounded-full border border-negro/15 bg-white px-4 focus-within:border-negro md:w-64 md:flex-none">
            <IconoBuscar />
            <span className="sr-only">Buscar en la colección</span>
            <input
              type="search"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar…"
              className="h-full min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-negro/40"
            />
          </label>
          <label>
            <span className="sr-only">Ordenar por</span>
            <select
              value={orden}
              onChange={(e) => setOrden(e.target.value as Orden)}
              className="h-11 rounded-full border border-negro/15 bg-white px-4 text-sm outline-none focus:border-negro"
            >
              <option value="relevancia">Ordenar</option>
              <option value="precio-asc">Menor precio</option>
              <option value="precio-desc">Mayor precio</option>
            </select>
          </label>
        </div>
      </div>

      {agrupar ? (
        <div className="mt-10 space-y-14">
          {CATEGORIAS.map((c) => {
            const lista = visibles.filter(enCategoria(c));
            if (lista.length === 0) return null;
            return (
              <section key={c.id} aria-labelledby={`categoria-${c.id}`}>
                <div className="aparecer flex items-end justify-between gap-4 border-b border-negro/10 pb-3">
                  <div>
                    <h3 id={`categoria-${c.id}`} className="text-xl font-semibold">
                      {c.nombre}
                    </h3>
                    <p className="text-sm text-negro/65">
                      {textoVueltas(c)} · {c.descripcion}
                    </p>
                  </div>
                  <button onClick={() => elegirCategoria(c.id)} className="shrink-0 text-sm text-negro/70 hover:text-negro">
                    Ver {lista.length} →
                  </button>
                </div>
                <GrillaProductos productos={lista} className="mt-6" />
              </section>
            );
          })}
        </div>
      ) : (
        <>
          <p className="mt-8 text-sm text-negro/65" aria-live="polite">
            {activa && <>{activa.nombre} · </>}
            {visibles.length} {visibles.length === 1 ? "sombrero" : "sombreros"}
            {busqueda.trim() && <> para «{busqueda.trim()}»</>}
          </p>

          {visibles.length > 0 ? (
            <GrillaProductos productos={visibles} className="mt-5" />
          ) : (
            <div className="mt-6 rounded-2xl bg-hueso px-6 py-16 text-center">
              <p className="text-xl font-semibold">No encontramos sombreros con esos filtros</p>
              <p className="mt-2 text-negro/70">Prueba con otra búsqueda o revisa toda la colección.</p>
              <button onClick={limpiar} className="mt-6 rounded-full bg-negro px-5 py-2.5 text-sm font-medium text-white hover:bg-grafito">
                Ver toda la colección
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
}
