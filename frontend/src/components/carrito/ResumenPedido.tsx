import { Boton } from "@/components/ui/Boton";
import { ENVIO } from "@/config/sitio";
import { formatoCOP } from "@/lib/format";
import type { ResumenCarrito } from "@/types/carrito";

export default function ResumenPedido({ resumen }: { resumen: ResumenCarrito }) {
  const { subtotal, envio, total, faltaParaEnvioGratis } = resumen;
  const progreso = Math.min(100, Math.round((subtotal / ENVIO.gratisDesde) * 100));

  return (
    <aside className="h-fit bg-cana p-6 sm:p-8 lg:sticky lg:top-28" aria-labelledby="titulo-resumen">
      <h2 id="titulo-resumen" className="font-display text-3xl uppercase">
        Resumen del pedido
      </h2>

      <div className="mt-6 bg-hueso/70 p-4">
        {faltaParaEnvioGratis > 0 ? (
          <p className="text-sm">
            Te faltan <span className="font-semibold">{formatoCOP(faltaParaEnvioGratis)}</span> para el envío gratis.
          </p>
        ) : (
          <p className="text-sm font-semibold">Tu pedido tiene envío gratis.</p>
        )}
        <div
          className="mt-3 h-1 bg-negro/10"
          role="progressbar"
          aria-valuenow={progreso}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Progreso hacia el envío gratis"
        >
          <div className="h-full bg-oro transition-all duration-500" style={{ width: `${progreso}%` }} />
        </div>
      </div>

      <dl className="mt-6 space-y-3 text-[15px]">
        <div className="flex justify-between">
          <dt className="text-negro/70">Subtotal</dt>
          <dd className="tabular-nums">{formatoCOP(subtotal)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-negro/70">Envío</dt>
          <dd className="tabular-nums">{envio === 0 ? "Gratis" : formatoCOP(envio)}</dd>
        </div>
        <div className="flex items-baseline justify-between border-t border-negro/15 pt-4">
          <dt className="font-semibold">Total</dt>
          <dd className="font-display text-3xl tabular-nums">{formatoCOP(total)}</dd>
        </div>
      </dl>

      {/* TODO: conectar con el checkout de Wompi desde el backend */}
      <Boton tamano="lg" className="mt-6 w-full">
        Pagar con Wompi
      </Boton>
      <p className="mt-3 text-center text-xs text-negro/60">Tarjeta, PSE, Nequi y Bancolombia</p>
    </aside>
  );
}
