import Link from "next/link";
import TituloSeccion from "@/components/ui/TituloSeccion";
import { RUTAS, SECCIONES } from "@/config/sitio";
import { NIVELES_VUELTAS } from "@/data/catalogo";
import { formatoCOP } from "@/lib/format";

export default function GuiaVueltas() {
  return (
    <section id={SECCIONES.vueltas} className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 md:py-20">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <TituloSeccion antetitulo="Guía de vueltas" as="h1">
          Más vueltas, <br />
          <span className="text-oro">más finura</span>
        </TituloSeccion>
        <p className="max-w-sm text-negro/70">
          Las &quot;vueltas&quot; indican cuántas fibras de caña flecha forman cada trenza. Entre más vueltas, más delgada la
          trenza, más flexible el sombrero y más días de trabajo artesanal.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {NIVELES_VUELTAS.map((n, i) => (
          <Link
            key={n.vueltas}
            href={RUTAS.catalogoPorVueltas(n.vueltas)}
            className="aparecer group flex flex-col rounded-2xl border border-negro/10 p-6 transition hover:-translate-y-1 hover:border-negro/30 hover:shadow-lg hover:shadow-negro/5"
          >
            <p className="font-display text-5xl leading-none text-oro">{n.vueltas}</p>
            <p className="mt-3 text-lg font-semibold">{n.nombre}</p>
            <div className="mt-4 flex gap-1" aria-hidden>
              {NIVELES_VUELTAS.map((_, j) => (
                <span key={j} className={`h-1 flex-1 rounded-full ${j <= i ? "bg-oro" : "bg-negro/10"}`} />
              ))}
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-negro/75">{n.detalle}</p>
            <p className="mt-6 font-semibold">{formatoCOP(n.precio)}</p>
            {n.incluye && <p className="text-xs text-negro/65">Incluye {n.incluye.toLowerCase()}</p>}
            <p className="mt-4 text-sm font-medium text-negro/70 group-hover:text-oro">Ver {n.vueltas} vueltas →</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
