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
    <div className={`aparecer ${className}`}>
      <Antetitulo tono={tono}>{antetitulo}</Antetitulo>
      <Tag className="mt-3 font-display text-3xl leading-[1.1] md:text-[2.6rem]">{children}</Tag>
      {descripcion && <p className="mt-5 max-w-xl leading-relaxed opacity-80">{descripcion}</p>}
    </div>
  );
}
