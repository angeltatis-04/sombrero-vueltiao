import Link from "next/link";
import TituloSeccion from "@/components/ui/TituloSeccion";
import { RUTAS, SECCIONES } from "@/config/sitio";
import { NIVELES_VUELTAS } from "@/data/catalogo";

export default function GuiaVueltas() {
  return (
    <section id={SECCIONES.vueltas} className="mx-auto max-w-7xl scroll-mt-20 px-4 py-24 md:py-32">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <TituloSeccion antetitulo="Guía de vueltas">
          Más vueltas, <br />
          <span className="text-oro">más finura</span>
        </TituloSeccion>
        <p className="max-w-sm text-negro/70">
          Las &quot;vueltas&quot; indican cuántas fibras de caña flecha forman cada trenza. Entre más vueltas, más delgada la
          trenza, más flexible el sombrero y más días de trabajo artesanal.
        </p>
      </div>

      <div className="mt-14 grid border-l border-t border-negro/15 sm:grid-cols-2 lg:grid-cols-5">
        {NIVELES_VUELTAS.map((n, i) => (
          <Link
            key={n.vueltas}
            href={RUTAS.catalogoPorVueltas(n.vueltas)}
            className="group flex flex-col border-b border-r border-negro/15 p-6 transition-colors hover:bg-negro hover:text-hueso"
          >
            <p className="font-display text-7xl leading-none text-oro">{n.vueltas}</p>
            <p className="mt-3 font-display text-2xl uppercase">{n.nombre}</p>
            <div className="mt-4 flex gap-1" aria-hidden>
              {NIVELES_VUELTAS.map((_, j) => (
                <span key={j} className={`h-1 flex-1 ${j <= i ? "bg-oro" : "bg-current opacity-15"}`} />
              ))}
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed opacity-70">{n.detalle}</p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-oro">Ver {n.vueltas} vueltas →</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
