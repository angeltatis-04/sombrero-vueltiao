import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

const CLASE_CONTROL =
  "w-full border border-negro/20 bg-white px-4 text-[15px] outline-none transition-colors placeholder:text-negro/35 hover:border-negro/40 focus:border-negro";

type Envoltura = { label: string; ayuda?: ReactNode; opcional?: boolean };

function Etiqueta({ label, opcional }: Envoltura) {
  return (
    <span className="mb-2 flex items-baseline justify-between text-xs font-semibold uppercase tracking-[0.15em]">
      {label}
      {opcional && <span className="font-normal normal-case tracking-normal text-negro/50">Opcional</span>}
    </span>
  );
}

type Props = Envoltura & InputHTMLAttributes<HTMLInputElement>;

export default function Campo({ label, ayuda, opcional, ...props }: Props) {
  return (
    <label className="block">
      <Etiqueta label={label} opcional={opcional} />
      <input {...props} className={`h-12 ${CLASE_CONTROL}`} />
      {ayuda && <span className="mt-1.5 block text-xs text-negro/55">{ayuda}</span>}
    </label>
  );
}

type AreaProps = Envoltura & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function AreaTexto({ label, ayuda, opcional, ...props }: AreaProps) {
  return (
    <label className="block">
      <Etiqueta label={label} opcional={opcional} />
      <textarea {...props} className={`min-h-24 resize-y py-3 ${CLASE_CONTROL}`} />
      {ayuda && <span className="mt-1.5 block text-xs text-negro/55">{ayuda}</span>}
    </label>
  );
}
