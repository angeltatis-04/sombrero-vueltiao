import type { ReactNode } from "react";
import Antetitulo from "./Antetitulo";

type Props = {
  antetitulo: string;
  children: ReactNode;
  descripcion?: ReactNode;
  tono?: "oro" | "arena";
  as?: "h1" | "h2";
  className?: string;
};

// Encabezado estándar de sección: antetítulo + título grande en mayúsculas.
export default function TituloSeccion({ antetitulo, children, descripcion, tono, as: Tag = "h2", className = "" }: Props) {
  return (
    <div className={className}>
      <Antetitulo tono={tono}>{antetitulo}</Antetitulo>
      <Tag className="mt-4 font-display text-5xl uppercase leading-[0.95] md:text-7xl">{children}</Tag>
      {descripcion && <p className="mt-5 max-w-xl leading-relaxed opacity-70">{descripcion}</p>}
    </div>
  );
}
