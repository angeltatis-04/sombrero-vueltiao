import Link from "next/link";
import Redes from "@/components/ui/Redes";
import { EMPRESA, ENLACES_CUENTA, ENLACES_FOOTER, RUTAS, SITIO, hayRedes } from "@/config/sitio";

function Enlaces({ titulo, enlaces }: { titulo: string; enlaces: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-oro">{titulo}</p>
      <ul className="mt-4 space-y-2 text-sm text-hueso/70">
        {enlaces.map((e) => (
          <li key={e.href}>
            <Link href={e.href} className="hover:text-hueso">
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
    <footer className="bg-negro text-hueso">
      <div className="greca-claro opacity-70" />
      <div className="mx-auto max-w-7xl px-4 pt-16">
        <p className="max-w-3xl font-serif text-2xl italic leading-snug text-hueso/80 md:text-3xl">{SITIO.cierre}</p>

        <div className="mt-14 grid gap-10 border-t border-hueso/15 pt-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-oro">Contacto</p>
            <p className="mt-3 font-display text-3xl uppercase">{EMPRESA.razonSocial}</p>
            <ul className="mt-3 space-y-1 text-sm text-hueso/70">
              {contacto.map((dato) => (
                <li key={dato}>{dato}</li>
              ))}
            </ul>
            {hayRedes && <Redes className="mt-6" />}
          </div>
          <Enlaces titulo="Tienda" enlaces={ENLACES_FOOTER} />
          <Enlaces titulo="Mi cuenta" enlaces={ENLACES_CUENTA.filter((e) => e.href !== RUTAS.carrito)} />
        </div>
      </div>

      <p
        className="select-none overflow-hidden whitespace-nowrap px-4 pt-10 text-center font-display text-[17vw] uppercase leading-[0.8] text-hueso/[0.06]"
        aria-hidden
      >
        Vueltiao
      </p>
      <div className="border-t border-hueso/10 py-5 text-center text-xs text-hueso/50">
        © {new Date().getFullYear()} {SITIO.marca}. {EMPRESA.ciudad}, cuna del sombrero vueltiao.
      </div>
    </footer>
  );
}
