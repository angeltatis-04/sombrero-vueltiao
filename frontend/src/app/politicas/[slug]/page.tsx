import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RUTAS } from "@/config/sitio";
import { POLITICAS, VIGENCIA_POLITICAS, getPolitica } from "@/data/politicas";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POLITICAS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const politica = getPolitica((await params).slug);
  return politica ? { title: politica.titulo, description: politica.resumen } : {};
}

// Texto legal sobrio, sin colores de marca: títulos numerados en mayúsculas y cuerpo en gris.
function Seccion({ titulo, parrafos, lista }: { titulo: string; parrafos?: string[]; lista?: string[] }) {
  return (
    <section>
      <h2 className="font-bold uppercase text-negro/80">{titulo}</h2>
      <div className="mt-2 space-y-2">
        {parrafos?.map((p) => (
          <p key={p}>{p}</p>
        ))}
        {lista && (
          <ul className="list-disc space-y-1 pl-5">
            {lista.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default async function PoliticaPage({ params }: Props) {
  const politica = getPolitica((await params).slug);
  if (!politica) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 text-[13px] leading-relaxed text-negro/65 md:py-14">
      <h1 className="text-sm font-bold uppercase text-negro/80">{politica.titulo}</h1>
      <p className="mt-1 text-xs">Vigente desde el {VIGENCIA_POLITICAS}</p>

      <div className="mt-6 space-y-5">
        <Seccion titulo="En resumen" lista={politica.enResumen} />
        {politica.bloques.map((b, i) => (
          <Seccion key={b.titulo} {...b} titulo={`${i + 1}. ${b.titulo}.`} />
        ))}
      </div>

      <nav className="mt-10 border-t border-negro/10 pt-5">
        <ul className="flex flex-wrap gap-x-5 gap-y-1">
          {POLITICAS.filter((p) => p.slug !== politica.slug).map((p) => (
            <li key={p.slug}>
              <Link href={RUTAS.politica(p.slug)} className="underline underline-offset-2 hover:text-negro">
                {p.titulo}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
