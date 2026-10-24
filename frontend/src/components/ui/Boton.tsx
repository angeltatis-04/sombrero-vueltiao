import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps } from "react";

const BASE =
  "inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] transition-colors active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40";

const VARIANTES = {
  primario: "bg-negro text-hueso hover:bg-oro hover:text-negro",
  oro: "bg-oro text-negro hover:bg-oro-claro",
  secundario: "border border-negro hover:bg-negro hover:text-hueso",
  contorno: "border border-hueso/60 text-hueso hover:border-hueso hover:bg-hueso hover:text-negro",
  claro: "bg-hueso text-negro hover:bg-white",
};

const TAMANOS = {
  md: "h-12 px-6",
  lg: "px-8 py-4",
};

type Estilo = { variante?: keyof typeof VARIANTES; tamano?: keyof typeof TAMANOS };

function clasesBoton({ variante = "primario", tamano = "md" }: Estilo, className = "") {
  return `${BASE} ${VARIANTES[variante]} ${TAMANOS[tamano]} ${className}`;
}

type BotonProps = ButtonHTMLAttributes<HTMLButtonElement> & Estilo;

export function Boton({ variante, tamano, className, ...props }: BotonProps) {
  return <button {...props} className={clasesBoton({ variante, tamano }, className)} />;
}

type BotonLinkProps = ComponentProps<typeof Link> & Estilo;

export function BotonLink({ variante, tamano, className, ...props }: BotonLinkProps) {
  return <Link {...props} className={clasesBoton({ variante, tamano }, className)} />;
}
