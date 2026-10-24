"use client";

import Link from "next/link";
import CarritoVacio from "./CarritoVacio";
import ItemCarrito from "./ItemCarrito";
import ResumenPedido from "./ResumenPedido";
import { RUTAS } from "@/config/sitio";
import { useCart } from "@/context/CartContext";
import { calcularResumen, resolverLineas } from "@/lib/carrito";

function CargandoCarrito() {
  return (
    <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]" aria-busy="true" aria-label="Cargando carrito">
      <div className="space-y-4">
        {[0, 1].map((i) => (
          <div key={i} className="flex animate-pulse gap-5 border-b border-negro/10 py-6">
            <div className="h-32 w-28 bg-negro/5" />
            <div className="flex-1 space-y-3 pt-2">
              <div className="h-5 w-1/2 bg-negro/5" />
              <div className="h-4 w-1/3 bg-negro/5" />
            </div>
          </div>
        ))}
      </div>
      <div className="h-72 animate-pulse bg-negro/5" />
    </div>
  );
}

export default function Carrito() {
  const { items, cargado, totalItems, actualizarCantidad, quitar } = useCart();
  const lineas = resolverLineas(items);

  if (cargado && lineas.length === 0) return <CarritoVacio />;

  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-10 md:pt-14">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-negro/10 pb-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-oro">Tu compra</p>
          <h1 className="mt-2 font-display text-6xl uppercase">Carrito</h1>
        </div>
        {cargado && (
          <p className="text-sm text-negro/60">
            {totalItems} {totalItems === 1 ? "sombrero" : "sombreros"} ·{" "}
            <Link href={RUTAS.catalogo} className="underline underline-offset-4 hover:text-negro">
              Seguir comprando
            </Link>
          </p>
        )}
      </div>

      {!cargado ? (
        <CargandoCarrito />
      ) : (
        <div className="mt-4 grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-14">
          <ul className="divide-y divide-negro/10">
            {lineas.map((linea) => (
              <ItemCarrito
                key={linea.clave}
                linea={linea}
                onCambiarCantidad={(cantidad) => actualizarCantidad(linea.clave, cantidad)}
                onQuitar={() => quitar(linea.clave)}
              />
            ))}
          </ul>

          <ResumenPedido resumen={calcularResumen(lineas)} />
        </div>
      )}
    </div>
  );
}
