import Link from "next/link";
import Redes from "@/components/ui/Redes";
import { EMPRESA, ENLACES_CUENTA, ENLACES_FOOTER, RUTAS, SITIO, hayRedes } from "@/config/sitio";
import { POLITICAS } from "@/data/politicas";

const ENLACES_LEGALES = POLITICAS.map((p) => ({ href: RUTAS.politica(p.slug), label: p.nombreCorto }));

function Enlaces({ titulo, enlaces }: { titulo: string; enlaces: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="text-sm font-semibold text-oro">{titulo}</p>
      <ul className="mt-4 space-y-2 text-sm text-negro/70">
        {enlaces.map((e) => (
          <li key={e.href}>
            <Link href={e.href} className="hover:text-negro">
              {e.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const contacto = [
    EMPRESA.nit && `NIT ${EMPRESA.nit}`,
    ...EMPRESA.telefonos.map((t) => `Tel. ${t}`),
    EMPRESA.correo,
    EMPRESA.direccion,
    EMPRESA.ciudad,
  ].filter(Boolean) as string[];

  return (
    <footer className="border-t border-negro/5 bg-white/50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 pt-14">
        <p className="max-w-2xl font-serif text-xl italic leading-snug text-negro/75 md:text-2xl">{SITIO.cierre}</p>

        <div className="mt-12 grid gap-10 border-t border-negro/10 pt-10 sm:grid-cols-2 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="text-sm font-semibold text-oro">Contacto</p>
            <p className="mt-3 text-xl font-semibold">{EMPRESA.razonSocial}</p>
            <ul className="mt-3 space-y-1 text-sm text-negro/70">
              {contacto.map((dato) => (
                <li key={dato}>{dato}</li>
              ))}
            </ul>
            {hayRedes && <Redes className="mt-6" />}
          </div>
          <Enlaces titulo="Tienda" enlaces={ENLACES_FOOTER} />
          <Enlaces titulo="Mi cuenta" enlaces={ENLACES_CUENTA.filter((e) => e.href !== RUTAS.carrito)} />
          <Enlaces titulo="Legal" enlaces={ENLACES_LEGALES} />
        </div>
      </div>

      <div className="mt-14 border-t border-negro/5 py-5 text-center text-xs text-negro/55">
        © {new Date().getFullYear()} {SITIO.marca}. {EMPRESA.ciudad}, cuna del sombrero vueltiao.
      </div>
    </footer>
  );
}
