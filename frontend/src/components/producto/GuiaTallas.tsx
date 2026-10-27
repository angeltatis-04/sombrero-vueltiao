"use client";

import { useEffect, useState } from "react";
import { IconoRegla } from "@/components/ui/Iconos";
import { TALLAS } from "@/data/catalogo";

// Botón que abre una ventana con la guía para medir la talla.
export default function GuiaTallas() {
  const [abierta, setAbierta] = useState(false);

  useEffect(() => {
    if (!abierta) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAbierta(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [abierta]);

  return (
    <>
      <button
        type="button"
        onClick={() => setAbierta(true)}
        className="flex items-center gap-1.5 text-xs text-negro/70 underline-offset-4 hover:text-negro hover:underline"
      >
        <IconoRegla />
        Guía de tallas
      </button>

      {abierta && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-negro/50 sm:items-center sm:p-4"
          onClick={() => setAbierta(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-guia-tallas"
            className="animate-aparecer max-h-[90dvh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white p-6 sm:rounded-3xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h2 id="titulo-guia-tallas" className="text-2xl font-semibold">
                Guía de tallas
              </h2>
              <button onClick={() => setAbierta(false)} className="-mr-2 -mt-1 p-2 text-2xl leading-none" aria-label="Cerrar">
                ×
              </button>
            </div>
            <ol className="mt-5 space-y-3 text-[15px] leading-relaxed text-grafito">
              <li>
                <span className="font-semibold text-negro">1.</span> Rodea tu cabeza con una cinta métrica, pasando por
                la frente y un dedo por encima de las orejas.
              </li>
              <li>
                <span className="font-semibold text-negro">2.</span> Anota la medida y búscala en la tabla.
              </li>
              <li>
                <span className="font-semibold text-negro">3.</span> Si quedas entre dos tallas, elige la mayor.
              </li>
            </ol>
            <table className="mt-6 w-full border-collapse overflow-hidden rounded-2xl bg-hueso/60 text-sm">
              <thead>
                <tr className="border-b border-negro/15 text-left text-xs text-negro/65">
                  <th scope="col" className="px-3 py-2.5 font-semibold">Talla</th>
                  <th scope="col" className="px-3 py-2.5 font-semibold">Centímetros</th>
                  <th scope="col" className="px-3 py-2.5 font-semibold">Pulgadas</th>
                </tr>
              </thead>
              <tbody>
                {TALLAS.map((t) => (
                  <tr key={t.talla} className="border-b border-negro/5 last:border-0">
                    <th scope="row" className="px-3 py-3 text-left font-semibold">{t.talla}</th>
                    <td className="px-3 py-3">{t.centimetros}</td>
                    <td className="px-3 py-3">{t.pulgadas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
