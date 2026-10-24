"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import TituloSeccion from "@/components/ui/TituloSeccion";
import { RUTAS, SECCIONES, SITIO } from "@/config/sitio";
import { FOTOS_ARTISTAS, type FotoArtista } from "@/data/artistas";

const textoAlt = (f: FotoArtista) => (f.nombre ? `${f.nombre} con un sombrero vueltiao` : "Artista luciendo un sombrero vueltiao");

export default function Artistas() {
  const [activa, setActiva] = useState<number | null>(null);
  const total = FOTOS_ARTISTAS.length;
  const abierta = activa !== null;

  const mover = useCallback((paso: number) => setActiva((i) => (i === null ? null : (i + paso + total) % total)), [total]);

  // Teclado y bloqueo de scroll mientras el visor está abierto
  useEffect(() => {
    if (!abierta) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiva(null);
      if (e.key === "ArrowRight") mover(1);
      if (e.key === "ArrowLeft") mover(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [abierta, mover]);

  const foto = activa !== null ? FOTOS_ARTISTAS[activa] : null;

  return (
    <section id={SECCIONES.artistas} className="scroll-mt-20 bg-negro py-24 text-hueso md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <TituloSeccion antetitulo="Colaboraciones">
            Colaboraciones <br />
            <span className="text-oro">con artistas</span>
          </TituloSeccion>
          <p className="max-w-sm text-hueso/65">
            Artistas que han lucido un {SITIO.marca} en tarima, giras y eventos. Toca una foto para verla en grande.
          </p>
        </div>

        {/* Cuadrícula de 2 (celular) y 4 (escritorio) columnas. Si a la última fila le falta
            justo una celda, el enlace a la colección la completa. */}
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
          {FOTOS_ARTISTAS.map((f, i) => (
            <button key={f.src} onClick={() => setActiva(i)} className="group relative aspect-[3/4] overflow-hidden">
              <Image
                src={f.src}
                alt={textoAlt(f)}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover object-top transition duration-500 group-hover:scale-105 md:grayscale md:group-hover:grayscale-0"
              />
              {f.nombre && (
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 p-3 text-left text-sm font-medium">
                  {f.nombre}
                </span>
              )}
            </button>
          ))}
          {FOTOS_ARTISTAS.length % 4 === 3 && (
            <Link
              href={RUTAS.catalogo}
              className="flex aspect-[3/4] flex-col justify-between bg-oro p-5 text-negro transition-colors hover:bg-oro-claro"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">Colección</span>
              <span className="font-display text-3xl uppercase leading-none md:text-4xl">
                ¿Y tú? <br />
                Encuentra el tuyo →
              </span>
            </Link>
          )}
        </div>
        {FOTOS_ARTISTAS.length % 4 !== 3 && (
          <div className="mt-10 text-center">
            <Link
              href={RUTAS.catalogo}
              className="border-b border-oro pb-1 text-xs font-semibold uppercase tracking-[0.2em] text-oro hover:text-oro-claro"
            >
              ¿Y tú? Encuentra el tuyo →
            </Link>
          </div>
        )}
      </div>

      {foto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={textoAlt(foto)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActiva(null)}
        >
          <div className="relative h-[85vh] w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <Image src={foto.src} alt={textoAlt(foto)} fill sizes="100vw" className="object-contain" />
          </div>
          <button
            onClick={() => setActiva(null)}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center bg-white/10 text-2xl hover:bg-white/20"
            aria-label="Cerrar"
          >
            ×
          </button>
          {[
            { paso: -1, label: "Foto anterior", simbolo: "‹", lado: "left-2 md:left-6" },
            { paso: 1, label: "Foto siguiente", simbolo: "›", lado: "right-2 md:right-6" },
          ].map((b) => (
            <button
              key={b.paso}
              onClick={(e) => {
                e.stopPropagation();
                mover(b.paso);
              }}
              className={`absolute top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center bg-white/10 text-3xl hover:bg-white/20 ${b.lado}`}
              aria-label={b.label}
            >
              {b.simbolo}
            </button>
          ))}
          <p className="absolute bottom-4 text-sm text-white/60">
            {activa! + 1} / {total}
          </p>
        </div>
      )}
    </section>
  );
}
