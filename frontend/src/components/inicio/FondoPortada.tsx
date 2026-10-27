"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SITIO } from "@/config/sitio";

// Las fotos son verticales: estiradas a todo el ancho de un computador se ven borrosas.
// Por eso en celular va una sola foto y desde md tres en fila (tríptico), cada una a su tamaño real.
const COLUMNAS_ESCRITORIO = 3;

function Capa({ fotos, activa, sizes, prioridad }: { fotos: string[]; activa: number; sizes: string; prioridad: boolean }) {
  return fotos.map((src, i) => (
    <Image
      key={src}
      src={src}
      alt={i === activa ? `Artista con un sombrero de ${SITIO.marca}` : ""}
      fill
      quality={90}
      priority={prioridad && i === activa}
      sizes={sizes}
      className={`object-cover object-[50%_25%] transition-[opacity,transform] ease-out ${
        i === activa ? "scale-105 opacity-100" : "scale-100 opacity-0"
      }`}
      // Fundido de 1 s y acercamiento suave mientras la foto está en pantalla
      style={{ transitionDuration: `1000ms, ${SITIO.segundosPorFoto * 1000 + 1000}ms` }}
    />
  ));
}

// Fotos del banner que se van turnando con un fundido.
export default function FondoPortada() {
  const fotos = SITIO.fotosPortada;
  const [activa, setActiva] = useState(0);

  useEffect(() => {
    if (fotos.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActiva((i) => (i + 1) % fotos.length), SITIO.segundosPorFoto * 1000);
    return () => clearInterval(id);
  }, [fotos.length]);

  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 md:hidden">
        <Capa fotos={fotos} activa={activa} sizes="100vw" prioridad />
      </div>
      {/* Cada columna arranca en una foto distinta para que no se repitan a la vez */}
      <div className="absolute inset-0 hidden gap-1 md:grid md:grid-cols-3">
        {Array.from({ length: COLUMNAS_ESCRITORIO }, (_, col) => (
          <div key={col} className="relative overflow-hidden">
            <Capa
              fotos={fotos}
              activa={(activa + col * Math.ceil(fotos.length / COLUMNAS_ESCRITORIO)) % fotos.length}
              sizes="34vw"
              prioridad={col === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
