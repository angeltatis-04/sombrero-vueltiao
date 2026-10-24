"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { IconoBolsa, IconoBuscar, IconoMenu, IconoUsuario } from "@/components/ui/Iconos";
import Logo from "@/components/ui/Logo";
import Redes from "@/components/ui/Redes";
import { ENLACES_CUENTA, ENLACES_NAV, RUTAS, SITIO } from "@/config/sitio";
import { useCart } from "@/context/CartContext";

const CLASE_ICONO = "grid h-10 w-10 place-items-center transition-colors hover:text-oro";

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
    <header className="sticky top-0 z-40 border-b border-hueso/10 bg-negro text-hueso">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-20">
        <Link href={RUTAS.inicio} onClick={cerrarTodo} aria-label={`${SITIO.marca}, inicio`}>
          <Logo />
        </Link>

        <ul className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em] lg:flex">
          {ENLACES_NAV.map((e) => (
            <li key={e.href}>
              <Link href={e.href} className="transition-colors hover:text-oro">
                {e.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="-mr-2 flex items-center">
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
          <Link href={RUTAS.login} className={`${CLASE_ICONO} hidden sm:grid`} aria-label="Mi cuenta">
            <IconoUsuario />
          </Link>
          <Link
            href={RUTAS.carrito}
            className={`${CLASE_ICONO} relative`}
            onClick={cerrarTodo}
            aria-label={`Carrito, ${totalItems} productos`}
          >
            <IconoBolsa />
            {totalItems > 0 && (
              <span className="absolute right-0 top-0.5 grid h-5 min-w-5 place-items-center bg-oro px-1 text-[11px] font-bold text-negro">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            className={`${CLASE_ICONO} lg:hidden`}
            onClick={() => {
              setMenuAbierto(!menuAbierto);
              setBuscando(false);
            }}
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuAbierto}
          >
            <IconoMenu abierto={menuAbierto} />
          </button>
        </div>
      </nav>

      {buscando && (
        <div className="animate-aparecer border-t border-hueso/10">
          <form onSubmit={buscar} role="search" className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-5">
            <IconoBuscar />
            <input
              ref={inputBusqueda}
              name="q"
              type="search"
              placeholder="Busca por nombre, vueltas u origen…"
              aria-label="Buscar sombreros"
              className="h-12 min-w-0 flex-1 border-b border-hueso/30 bg-transparent text-lg outline-none placeholder:text-hueso/40 focus:border-oro"
            />
            <button type="submit" className="text-xs font-semibold uppercase tracking-[0.2em] text-oro hover:text-oro-claro">
              Buscar
            </button>
          </form>
        </div>
      )}

      {menuAbierto && (
        <div className="animate-aparecer absolute inset-x-0 top-full flex h-[calc(100dvh-4rem)] flex-col justify-between overflow-y-auto bg-negro px-6 py-10 lg:hidden">
          <div>
            <ul className="space-y-2">
              {ENLACES_NAV.map((e) => (
                <li key={e.href}>
                  <Link href={e.href} onClick={cerrarTodo} className="font-display text-5xl uppercase hover:text-oro">
                    {e.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold uppercase tracking-[0.2em] text-hueso/70">
              {ENLACES_CUENTA.map((e) => (
                <li key={e.href}>
                  <Link href={e.href} onClick={cerrarTodo} className="hover:text-oro">
                    {e.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 font-serif text-lg italic text-hueso/70">{SITIO.eslogan}</p>
            <Redes />
          </div>
        </div>
      )}
    </header>
  );
}
