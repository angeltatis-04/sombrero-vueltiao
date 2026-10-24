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
  const [agregado, setAgregado] = useState(false);

  // Cualquier cambio oculta la confirmación anterior
  const cambiar = <T,>(set: (v: T) => void) => (v: T) => {
    set(v);
    setAgregado(false);
  };

  const onAgregar = () => {
    if (!talla) {
      setFaltaTalla(true);
      return;
    }
    agregar({ slug, talla, cantidad, personalizacion: limpiarPersonalizacion({ nombre, ala, indicaciones }) });
    setAgregado(true);
  };

  return (
    <div className="space-y-8">
      {/* Talla */}
      <fieldset>
        <div className="mb-3 flex items-center justify-between">
          <legend className="text-xs font-semibold uppercase tracking-[0.15em]">Talla</legend>
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
              className={`flex h-14 flex-col items-center justify-center border transition-all ${
                talla === t ? "border-negro bg-negro text-hueso" : "border-negro/20 bg-white hover:border-negro"
              }`}
            >
              <span className="text-sm font-semibold">{t}</span>
              <span className={`text-[10px] ${talla === t ? "text-hueso/70" : "text-negro/50"}`}>
                {centimetros.replace(" cm", "")}
              </span>
            </button>
          ))}
        </div>
        {talla && (
          <p className="mt-2 text-sm text-negro/60">
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
      <fieldset className="border border-negro/15 bg-cana/60 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <legend className="font-display text-2xl uppercase">Personalización</legend>
          {PERSONALIZACION.gratuita && (
            <span className="bg-oro px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-negro">Gratis</span>
          )}
        </div>
        <p className="mt-1 text-sm text-negro/60">Haz que tu sombrero sea único. Todos los campos son opcionales.</p>

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
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em]">Tipo de ala</p>
              <div className="flex flex-wrap gap-2">
                {PERSONALIZACION.tiposAla.map((opcion) => (
                  <button
                    key={opcion}
                    type="button"
                    aria-pressed={ala === opcion}
                    onClick={() => cambiar(setAla)(ala === opcion ? "" : opcion)}
                    className={`border px-4 py-2.5 text-sm transition-colors ${
                      ala === opcion ? "border-negro bg-negro text-hueso" : "border-negro/20 bg-white hover:border-negro"
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
        <div className="animate-aparecer flex items-start gap-3 border border-negro/15 bg-white p-4" role="status">
          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-negro text-hueso">
            <IconoCheck />
          </span>
          <div className="flex-1">
            <p className="font-semibold">Agregado a tu carrito</p>
            <p className="text-sm text-negro/60">
              Talla {talla} · {cantidad} {cantidad === 1 ? "unidad" : "unidades"}
            </p>
            <div className="mt-3 flex gap-5 text-[11px] font-semibold uppercase tracking-[0.18em]">
              <Link href={RUTAS.carrito} className="border-b border-negro pb-0.5 hover:text-oro">
                Ver carrito
              </Link>
              <Link href={RUTAS.catalogo} className="text-negro/60 hover:text-negro">
                Seguir comprando
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
