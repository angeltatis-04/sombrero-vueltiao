import type { ReactNode } from "react";

// Texto pequeño en mayúsculas, con una raya, que va sobre los títulos de sección.
export default function Antetitulo({ children, tono = "oro" }: { children: ReactNode; tono?: "oro" | "arena" }) {
  const color = tono === "arena" ? "text-arena" : "text-oro";
  return (
    <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] ${color}`}>
      <span className="h-px w-10 bg-current" aria-hidden />
      {children}
    </p>
  );
}
