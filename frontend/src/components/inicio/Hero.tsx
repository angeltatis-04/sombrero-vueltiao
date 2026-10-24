import Image from "next/image";
import Antetitulo from "@/components/ui/Antetitulo";
import { BotonLink } from "@/components/ui/Boton";
import { EMPRESA, RUTAS, SITIO } from "@/config/sitio";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-end overflow-hidden bg-negro text-hueso md:min-h-[calc(100svh-5rem)]">
      <Image
        src={SITIO.fotoPortada}
        alt={`Artista en tarima con un sombrero de ${SITIO.marca}`}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-[50%_25%] opacity-70"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-negro via-negro/60 to-negro/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-negro/80 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-4 pb-14 pt-32 md:pb-20">
        <Antetitulo>{EMPRESA.ciudad} · Cuna del sombrero vueltiao</Antetitulo>
        <h1 className="mt-6 max-w-5xl font-display text-6xl uppercase leading-[0.9] sm:text-7xl md:text-8xl lg:text-9xl">
          Tradición que marca <span className="text-oro">la diferencia.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-hueso/75">
          Sombreros vueltiaos originales que hablan de estilo, identidad y orgullo. Artesanía ancestral para quien busca
          algo auténtico.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <BotonLink href={RUTAS.catalogo} variante="oro" tamano="lg">
            Ver la colección
          </BotonLink>
          <BotonLink href={RUTAS.nosotros} variante="contorno" tamano="lg">
            Conócenos
          </BotonLink>
        </div>
      </div>

      <p className="absolute bottom-24 right-4 hidden origin-bottom-right rotate-90 text-xs font-semibold uppercase tracking-[0.4em] text-hueso/50 md:block">
        {SITIO.marca} — Hecho a mano
      </p>
    </section>
  );
}
