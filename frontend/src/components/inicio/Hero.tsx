import type { CSSProperties } from "react";
import FondoPortada from "./FondoPortada";
import Antetitulo from "@/components/ui/Antetitulo";
import { BotonLink } from "@/components/ui/Boton";
import { EMPRESA, RUTAS } from "@/config/sitio";

const retraso = (ms: number) => ({ "--retraso": `${ms}ms` }) as CSSProperties;

// Banner con el lema centrado sobre las fotos que se turnan.
export default function Hero() {
  return (
    <section className="relative isolate -mt-16 flex min-h-[88svh] items-center overflow-hidden bg-negro text-white md:-mt-20 md:min-h-[92svh]">
      <FondoPortada />
      {/* Oscurece parejo para que el texto centrado se lea sobre cualquier foto */}
      <div className="absolute inset-0 -z-10 bg-negro/25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-negro/55 via-transparent to-transparent" />

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 pb-20 pt-36 text-center">
        <div className="entrada">
          <Antetitulo tono="arena">{EMPRESA.ciudad} · Cuna del sombrero vueltiao</Antetitulo>
        </div>
        <h1 className="entrada mt-6 font-display text-4xl uppercase leading-[1.05] sm:text-5xl md:text-6xl" style={retraso(150)}>
          Tradición que marca <br />
          <span className="font-light">la diferencia.</span>
        </h1>
        <p className="entrada mt-6 max-w-lg text-base text-white/80 md:text-lg" style={retraso(300)}>
          Sombreros vueltiaos originales, tejidos a mano en caña flecha. Estilo, identidad y orgullo.
        </p>
        <div className="entrada mt-9 flex flex-wrap justify-center gap-3" style={retraso(450)}>
          <BotonLink href={RUTAS.catalogo} variante="claro" tamano="lg">
            Ver la colección
          </BotonLink>
          <BotonLink href={RUTAS.nosotros} variante="contorno" tamano="lg">
            Conócenos
          </BotonLink>
        </div>
      </div>
    </section>
  );
}
