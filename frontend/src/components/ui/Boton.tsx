import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps } from "react";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40";

const VARIANTES = {
  primario: "bg-negro text-white hover:bg-grafito",
  oro: "bg-oro text-white hover:bg-grafito",
  secundario: "border border-negro/20 hover:border-negro",
  // Vidrio sobre fotos
  contorno: "border border-white/35 bg-white/10 text-white backdrop-blur-md hover:bg-white/25",
  claro: "bg-white/85 text-negro backdrop-blur-md hover:bg-white",
};

const TAMANOS = {
  md: "h-12 px-6",
  lg: "h-13 px-7",
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
