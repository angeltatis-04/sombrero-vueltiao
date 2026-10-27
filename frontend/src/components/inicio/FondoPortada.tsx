"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SITIO } from "@/config/sitio";

// Fotos del banner superpuestas que se van turnando con un fundido.
export default function FondoPortada() {
  const fotos = SITIO.fotosPortada;
  const [activa, setActiva] = useState(0);

  useEffect(() => {
    if (fotos.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActiva((i) => (i + 1) % fotos.length), SITIO.segundosPorFoto * 1000);
    return () => clearInterval(id);
  }, [fotos.length]);

  return fotos.map((src, i) => (
    <Image
      key={src}
      src={src}
      alt={i === activa ? `Artista en tarima con un sombrero de ${SITIO.marca}` : ""}
      fill
      priority={i === 0}
      sizes="100vw"
      className={`-z-10 object-cover object-[50%_25%] transition-[opacity,transform] ease-out ${
        i === activa ? "scale-110 opacity-100" : "scale-100 opacity-0"
      }`}
      // Fundido de 1 s y acercamiento que dura lo que la foto está en pantalla
      style={{ transitionDuration: `1000ms, ${SITIO.segundosPorFoto * 1000 + 1000}ms` }}
    />
  ));
}
