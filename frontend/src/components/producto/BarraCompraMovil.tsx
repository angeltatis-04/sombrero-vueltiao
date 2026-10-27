"use client";

import { useEffect, useState } from "react";
import Precio from "./Precio";
import type { Producto } from "@/types/producto";

// En celular el formulario de compra queda debajo de la foto. Esta barra fija lleva directo a él
// y se esconde mientras el formulario está en pantalla.
export default function BarraCompraMovil({ producto, destino }: { producto: Producto; destino: string }) {
  const [formularioVisible, setFormularioVisible] = useState(false);

  useEffect(() => {
    const formulario = document.getElementById(destino);
    if (!formulario) return;
    const observador = new IntersectionObserver(([e]) => setFormularioVisible(e.isIntersecting), { threshold: 0.15 });
    observador.observe(formulario);
    return () => observador.disconnect();
  }, [destino]);

  return (
    <>
      {/* Espacio para que la barra no tape el final de la página */}
      <div className="h-20 lg:hidden" />
      <div
        className={`fixed inset-x-0 bottom-0 z-30 border-t border-negro/5 bg-white/85 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl transition-transform duration-300 lg:hidden ${
          formularioVisible ? "translate-y-full" : "translate-y-0"
        }`}
        aria-hidden={formularioVisible}
      >
        <div className="flex items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">{producto.nombre}</p>
            <Precio precio={producto.precio} precioAnterior={producto.precioAnterior} className="text-sm" />
          </div>
          <a
            href={`#${destino}`}
            tabIndex={formularioVisible ? -1 : 0}
            className="flex h-12 shrink-0 items-center rounded-full bg-oro px-7 text-sm font-bold text-white shadow-lg shadow-oro/25 transition active:scale-95"
          >
            Comprar
          </a>
        </div>
      </div>
    </>
  );
}
