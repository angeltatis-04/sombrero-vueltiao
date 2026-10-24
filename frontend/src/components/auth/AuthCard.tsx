import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  titulo: string;
  subtitulo: string;
  children: ReactNode;
  pie: { texto: string; enlace: string; href: string };
};

export default function AuthCard({ titulo, subtitulo, children, pie }: Props) {
  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <div className="border border-negro/10 bg-hueso p-8 shadow-sm">
        <div className="greca -mx-8 -mt-8 mb-8 opacity-70" />
        <h1 className="font-display text-4xl uppercase leading-none">{titulo}</h1>
        <p className="mt-2 text-sm text-negro/60">{subtitulo}</p>
        <div className="mt-8">{children}</div>
      </div>
      <p className="mt-6 text-center text-sm text-negro/70">
        {pie.texto}{" "}
        <Link href={pie.href} className="font-semibold text-oro hover:underline">
          {pie.enlace}
        </Link>
      </p>
    </div>
  );
}
