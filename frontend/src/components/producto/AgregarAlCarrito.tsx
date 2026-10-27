"use client";

import Link from "next/link";
import { useState } from "react";
import GuiaTallas from "./GuiaTallas";
import { Boton } from "@/components/ui/Boton";
import Campo, { AreaTexto } from "@/components/ui/Campo";
import { IconoCheck } from "@/components/ui/Iconos";
import SelectorCantidad from "@/components/ui/SelectorCantidad";
import { RUTAS } from "@/config/sitio";
import { useCart } from "@/context/CartContext";
import { TALLAS } from "@/data/catalogo";
import { PERSONALIZACION } from "@/data/tienda";
import { limpiarPersonalizacion } from "@/lib/carrito";

const MAX_INDICACIONES = 300;

export default function AgregarAlCarrito({ slug }: { slug: string }) {
  const { agregar } = useCart();
  const [talla, setTalla] = useState<string | null>(null);
  const [cantidad, setCantidad] = useState(1);
  const [nombre, setNombre] = useState("");
  const [ala, setAla] = useState("");
  const [indicaciones, setIndicaciones] = useState("");
  const [faltaTalla, setFaltaTalla] = useState(false);
  // Lo último que se agregó, para la confirmación
  const [agregado, setAgregado] = useState<{ talla: string; cantidad: number } | null>(null);

  // Cualquier cambio oculta la confirmación anterior
  const cambiar = <T,>(set: (v: T) => void) => (v: T) => {
    set(v);
    setAgregado(null);
  };

  const onAgregar = () => {
    if (!talla) {
      setFaltaTalla(true);
      return;
    }
    agregar({ slug, talla, cantidad, personalizacion: limpiarPersonalizacion({ nombre, ala, indicaciones }) });
    setAgregado({ talla, cantidad });
    // Queda listo para elegir la talla del siguiente sombrero
    setTalla(null);
    setCantidad(1);
  };

  return (
    <div className="space-y-8">
      {/* Talla */}
      <fieldset>
        <div className="mb-3 flex items-center justify-between">
          <legend className="text-sm font-medium">Talla</legend>
          <GuiaTallas />
        </div>
        <div className="grid grid-cols-5 gap-2">
          {TALLAS.map(({ talla: t, centimetros }) => (
            <button
              key={t}
              type="button"
              aria-pressed={talla === t}
              aria-label={`Talla ${t}, ${centimetros}`}
              onClick={() => {
                cambiar(setTalla)(t);
                setFaltaTalla(false);
              }}
              className={`flex h-14 flex-col items-center justify-center rounded-xl border transition-all ${
                talla === t ? "border-negro bg-negro text-white" : "border-negro/15 bg-white hover:border-negro"
              }`}
            >
              <span className="text-sm font-semibold">{t}</span>
              <span className={`text-[10px] ${talla === t ? "text-white/70" : "text-negro/60"}`}>
                {centimetros.replace(" cm", "")}
              </span>
            </button>
          ))}
        </div>
        {talla && (
          <p className="mt-2 text-sm text-negro/70">
            Talla {talla}: contorno de cabeza de {TALLAS.find((t) => t.talla === talla)?.centimetros}.
          </p>
        )}
        {faltaTalla && (
          <p className="mt-2 text-sm text-rojo" role="alert">
            Selecciona una talla para continuar.
          </p>
        )}
      </fieldset>

      {/* Personalización */}
      <fieldset className="rounded-2xl border border-negro/10 bg-white p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <legend className="text-lg font-semibold">Personalización</legend>
          {PERSONALIZACION.gratuita && (
            <span className="rounded-full bg-oro/20 px-2.5 py-0.5 text-xs font-semibold text-negro">Gratis</span>
          )}
        </div>
        <p className="mt-1 text-sm text-negro/70">Haz que tu sombrero sea único. Todos los campos son opcionales.</p>

        <div className="mt-5 space-y-5">
          <Campo
            label="Nombre y apellido"
            opcional
            value={nombre}
            onChange={(e) => cambiar(setNombre)(e.target.value)}
            maxLength={PERSONALIZACION.maxCaracteresNombre}
            placeholder="Ej.: María Pérez"
            autoComplete="off"
            ayuda={`${nombre.length}/${PERSONALIZACION.maxCaracteresNombre} caracteres`}
          />

          {PERSONALIZACION.tiposAla.length > 0 && (
            <div>
              <p className="mb-2 text-sm font-medium">Tipo de ala</p>
              <div className="flex flex-wrap gap-2">
                {PERSONALIZACION.tiposAla.map((opcion) => (
                  <button
                    key={opcion}
                    type="button"
                    aria-pressed={ala === opcion}
                    onClick={() => cambiar(setAla)(ala === opcion ? "" : opcion)}
                    className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                      ala === opcion ? "border-negro bg-negro text-white" : "border-negro/15 bg-white hover:border-negro"
                    }`}
                  >
                    {opcion}
                  </button>
                ))}
              </div>
            </div>
          )}

          <AreaTexto
            label="Indicaciones adicionales"
            opcional
            value={indicaciones}
            onChange={(e) => cambiar(setIndicaciones)(e.target.value)}
            maxLength={MAX_INDICACIONES}
            placeholder="Cuéntanos cualquier detalle que debamos tener en cuenta."
            ayuda={`${indicaciones.length}/${MAX_INDICACIONES} caracteres`}
          />
        </div>
      </fieldset>

      {/* Cantidad y compra */}
      <div className="flex gap-3">
        <SelectorCantidad valor={cantidad} onCambiar={cambiar(setCantidad)} />
        <Boton onClick={onAgregar} tamano="md" className="flex-1 whitespace-nowrap !px-4">
          Agregar al carrito
        </Boton>
      </div>

      {agregado && (
        <div className="animate-aparecer flex items-start gap-3 rounded-2xl bg-hueso p-4" role="status">
          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-negro text-hueso">
            <IconoCheck />
          </span>
          <div className="flex-1">
            <p className="font-semibold">Agregado a tu carrito</p>
            <p className="text-sm text-negro/70">
              Talla {agregado.talla} · {agregado.cantidad} {agregado.cantidad === 1 ? "unidad" : "unidades"}
            </p>
            <p className="mt-1 text-sm text-negro/70">¿Otro sombrero? Elige su talla y agrégalo.</p>
            <div className="mt-3 flex gap-5 text-sm font-medium">
              <Link href={RUTAS.carrito} className="underline underline-offset-4 hover:text-oro">
                Ver carrito
              </Link>
              <Link href={RUTAS.catalogo} className="text-negro/70 hover:text-negro">
                Seguir comprando
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
