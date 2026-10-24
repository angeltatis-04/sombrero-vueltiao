"use client";

import Image from "next/image";
import { useState } from "react";
import FotoSombrero from "./FotoSombrero";
import type { Producto } from "@/types/producto";

// Foto principal con miniaturas. Sin fotos reales muestra la ilustración.
export default function GaleriaProducto({ producto }: { producto: Producto }) {
  const fotos = [producto.imagen, ...(producto.galeria ?? [])].filter((f): f is string => Boolean(f));
  const [activa, setActiva] = useState(0);

  if (fotos.length === 0) {
    return <FotoSombrero producto={producto} sizes="(min-width: 1024px) 55vw, 100vw" />;
  }

  return (
    <div>
      <div className="relative aspect-square overflow-hidden bg-white">
        <Image
          src={fotos[activa]}
          alt={`${producto.nombre}, foto ${activa + 1} de ${fotos.length}`}
          fill
          priority
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-contain"
        />
      </div>
      {fotos.length > 1 && (
        <div className="mt-3 grid grid-cols-5 gap-2">
          {fotos.map((src, i) => (
            <button
              key={src}
              onClick={() => setActiva(i)}
              aria-label={`Ver foto ${i + 1}`}
              aria-current={i === activa}
              className={`relative aspect-square overflow-hidden bg-white ring-1 transition ${
                i === activa ? "ring-negro" : "ring-negro/10 hover:ring-negro/40"
              }`}
            >
              <Image src={src} alt="" fill sizes="10vw" className="object-contain" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
