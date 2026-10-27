"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { IconoBolsa, IconoBuscar, IconoMenu, IconoUsuario } from "@/components/ui/Iconos";
import Logo from "@/components/ui/Logo";
import Redes from "@/components/ui/Redes";
import { ENLACES_CUENTA, ENLACES_NAV, RUTAS, SITIO } from "@/config/sitio";
import { useCart } from "@/context/CartContext";

const CLASE_ICONO = "grid h-10 w-10 place-items-center transition-opacity hover:opacity-70";

// Descuentos se resalta con su color, un brillo que lo recorre y un punto que late
function TextoEnlace({ href, label }: { href: string; label: string }) {
  if (href !== RUTAS.descuentos) return label;
  return (
    <span className="inline-flex items-center gap-2">
      <span className="relative flex h-2 w-2" aria-hidden>
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-oferta opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-oferta" />
      </span>
      <span className="brillo-oferta">{label}</span>
    </span>
  );
}

export default function Navbar() {
  const { totalItems } = useCart();
  const router = useRouter();
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [buscando, setBuscando] = useState(false);
  const inputBusqueda = useRef<HTMLInputElement>(null);

  const cerrarTodo = () => {
    setMenuAbierto(false);
    setBuscando(false);
  };

  useEffect(() => {
    if (buscando) inputBusqueda.current?.focus();
  }, [buscando]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && cerrarTodo();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const buscar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = new FormData(e.currentTarget).get("q")?.toString().trim();
    if (!q) return;
    cerrarTodo();
    router.push(RUTAS.busqueda(q));
  };

  return (
    // Barra de vidrio oscuro sobre el contenido: lo que pasa por debajo se ve difuminado
    <header className="fixed inset-x-0 top-0 z-40 bg-negro/35 text-white backdrop-blur-xl backdrop-saturate-150">
      <nav className="mx-auto grid h-16 max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 md:h-20 md:px-8">
        {/* Izquierda: enlaces en escritorio, botón de menú en celular */}
        <div className="flex items-center">
          <button
            className={`${CLASE_ICONO} -ml-2 xl:hidden`}
            onClick={() => {
              setMenuAbierto(!menuAbierto);
              setBuscando(false);
            }}
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuAbierto}
          >
            <IconoMenu abierto={menuAbierto} />
          </button>
          <ul className="hidden items-center gap-7 text-[13px] font-bold uppercase tracking-wide xl:flex">
            {ENLACES_NAV.map((e) => (
              <li key={e.href}>
                <Link href={e.href} className="transition-opacity hover:opacity-70">
                  <TextoEnlace {...e} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link href={RUTAS.inicio} onClick={cerrarTodo} aria-label={`${SITIO.marca}, inicio`}>
          <Logo />
        </Link>

        <div className="-mr-2 flex items-center justify-end gap-1">
          <Link href={RUTAS.login} className={`${CLASE_ICONO} hidden sm:grid`} aria-label="Mi cuenta">
            <IconoUsuario />
          </Link>
          <button
            className={CLASE_ICONO}
            onClick={() => {
              setBuscando(!buscando);
              setMenuAbierto(false);
            }}
            aria-label="Buscar sombreros"
            aria-expanded={buscando}
          >
            <IconoBuscar />
          </button>
          <Link
            href={RUTAS.carrito}
            className={`${CLASE_ICONO} relative`}
            onClick={cerrarTodo}
            aria-label={`Carrito, ${totalItems} productos`}
          >
            <IconoBolsa />
            {totalItems > 0 && (
              <span key={totalItems} className="absolute right-0 top-0.5 grid h-5 min-w-5 animate-rebote place-items-center rounded-full bg-white px-1 text-[11px] font-bold text-negro">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </nav>

      {buscando && (
        <div className="animate-aparecer border-t border-white/10">
          <form onSubmit={buscar} role="search" className="mx-auto flex max-w-2xl items-center gap-2 px-4 py-4">
            <input
              ref={inputBusqueda}
              name="q"
              type="search"
              placeholder="Busca por nombre, vueltas u origen…"
              aria-label="Buscar sombreros"
              className="h-12 min-w-0 flex-1 rounded-full bg-white/15 px-5 text-base outline-none placeholder:text-white/60 focus:bg-white/20"
            />
            <button type="submit" className="rounded-full bg-white px-5 py-3 text-sm font-bold text-negro hover:bg-white/85">
              Buscar
            </button>
          </form>
        </div>
      )}

      {menuAbierto && (
        <div className="animate-aparecer absolute inset-x-0 top-full flex h-[calc(100dvh-4rem)] flex-col justify-between overflow-y-auto bg-negro/80 px-6 py-10 backdrop-blur-2xl xl:hidden">
          <div>
            <ul className="space-y-5">
              {ENLACES_NAV.map((e) => (
                <li key={e.href}>
                  <Link href={e.href} onClick={cerrarTodo} className="text-xl font-bold uppercase tracking-wide hover:opacity-70">
                    <TextoEnlace {...e} />
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/60">
              {ENLACES_CUENTA.map((e) => (
                <li key={e.href}>
                  <Link href={e.href} onClick={cerrarTodo} className="hover:text-white">
                    {e.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 font-serif text-lg italic text-white/60">{SITIO.eslogan}</p>
            <Redes />
          </div>
        </div>
      )}
    </header>
  );
}
