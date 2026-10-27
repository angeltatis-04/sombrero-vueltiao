import Image from "next/image";
import { BotonLink } from "@/components/ui/Boton";
import { RUTAS, SITIO } from "@/config/sitio";
import { FOTOS_ARTISTAS } from "@/data/artistas";

// Cierre de la página con el lema de la marca sobre fotos de fondo.
// Las fotos son verticales: en celular va una y desde md tres en fila, para no estirarlas y que no se vean borrosas.
export default function Manifiesto() {
  const fotos = [FOTOS_ARTISTAS[3], FOTOS_ARTISTAS[4], FOTOS_ARTISTAS[7]];

  return (
    <section className="relative isolate overflow-hidden bg-negro py-20 text-white md:py-28">
      <div className="absolute inset-0 -z-10 grid gap-1 opacity-70 md:grid-cols-3">
        {fotos.map((f, i) => (
          <div key={f.src} className={`relative ${i > 0 ? "hidden md:block" : ""}`}>
            <Image src={f.src} alt="" fill quality={90} sizes="(min-width: 768px) 34vw, 100vw" className="object-cover object-[50%_20%]" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-negro/20 via-negro/40 to-negro/60" />

      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="font-display text-4xl uppercase leading-[1.05] md:text-5xl lg:text-6xl">
          No sigas <span className="font-light">tendencias.</span>
        </p>
        <p className="mx-auto mt-8 max-w-2xl font-serif text-xl italic text-white/80 md:text-2xl">
          Lleva una tradición que nunca pasa de moda.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <BotonLink href={RUTAS.catalogo} variante="claro" tamano="lg">
            Encuentra el tuyo
          </BotonLink>
          <BotonLink href={RUTAS.contacto} variante="contorno" tamano="lg">
            Contacto
          </BotonLink>
        </div>
        <p className="mt-16 text-xs font-semibold uppercase tracking-[0.4em] text-white/50">{SITIO.marca}</p>
      </div>
    </section>
  );
}
