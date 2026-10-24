import { formatoCOP } from "@/lib/format";

const TAMANOS = {
  sm: { contenedor: "items-baseline gap-2", actual: "font-semibold", anterior: "text-sm" },
  // Precio actual arriba y el anterior debajo, alineados a la derecha (tarjetas de producto)
  apilado: { contenedor: "items-baseline gap-2 sm:shrink-0 sm:flex-col sm:items-end sm:gap-0 sm:text-right", actual: "font-semibold", anterior: "text-xs" },
  lg: { contenedor: "items-baseline gap-3", actual: "text-3xl font-semibold", anterior: "text-lg" },
};

type Props = {
  precio: number;
  precioAnterior?: number;
  tamano?: keyof typeof TAMANOS;
  className?: string;
};

export default function Precio({ precio, precioAnterior, tamano = "sm", className = "" }: Props) {
  const t = TAMANOS[tamano];
  return (
    <p className={`flex flex-wrap ${t.contenedor} ${className}`}>
      <span className={t.actual}>{formatoCOP(precio)}</span>
      {precioAnterior && (
        <span className={`${t.anterior} text-negro/50 line-through`}>
          <span className="sr-only">Antes </span>
          {formatoCOP(precioAnterior)}
        </span>
      )}
    </p>
  );
}
