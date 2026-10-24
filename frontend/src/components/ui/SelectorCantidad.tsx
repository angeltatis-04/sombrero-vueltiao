const TAMANOS = {
  md: { boton: "h-12 w-11 text-lg", valor: "w-8 font-medium" },
  sm: { boton: "h-10 w-10", valor: "w-6 text-sm" },
};

type Props = {
  valor: number;
  onCambiar: (valor: number) => void;
  tamano?: keyof typeof TAMANOS;
};

export default function SelectorCantidad({ valor, onCambiar, tamano = "md" }: Props) {
  const t = TAMANOS[tamano];
  const boton = `${t.boton} transition-colors hover:bg-negro/5 disabled:opacity-30`;
  return (
    <div className="inline-flex items-center border border-negro/20 bg-white" role="group" aria-label="Cantidad">
      <button type="button" className={boton} onClick={() => onCambiar(Math.max(1, valor - 1))} disabled={valor <= 1} aria-label="Restar uno">
        −
      </button>
      <span className={`text-center tabular-nums ${t.valor}`} aria-live="polite">
        {valor}
      </span>
      <button type="button" className={boton} onClick={() => onCambiar(valor + 1)} aria-label="Sumar uno">
        +
      </button>
    </div>
  );
}
