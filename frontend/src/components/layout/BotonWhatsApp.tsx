"use client";

import { usePathname } from "next/navigation";
import { IconoWhatsApp } from "@/components/ui/Iconos";
import { WHATSAPP, enlaceWhatsApp } from "@/config/sitio";
import { getProducto } from "@/lib/productos";
import { mensajeProducto } from "@/lib/whatsapp";

// Botón flotante de WhatsApp. En la ficha de un producto, el mensaje ya lleva el nombre y el precio.
export default function BotonWhatsApp() {
  const ruta = usePathname();
  if (!WHATSAPP.numero) return null;

  const slug = ruta.startsWith("/productos/") ? ruta.split("/")[2] : null;
  const producto = slug ? getProducto(slug) : undefined;

  return (
    <a
      href={enlaceWhatsApp(producto ? mensajeProducto(producto) : undefined)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="entrada group fixed bottom-5 right-5 z-30 flex items-center gap-2 rounded-full bg-[#25D366]/90 p-3.5 text-white shadow-lg shadow-black/10 backdrop-blur-md transition hover:-translate-y-1 hover:bg-[#1ebe5b] md:bottom-7 md:right-7"
      style={{ "--retraso": "1200ms" } as React.CSSProperties}
    >
      {/* Onda que late para llamar la atención */}
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30 [animation-duration:2.5s]" aria-hidden />
      <IconoWhatsApp className="h-7 w-7" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-40 group-hover:pr-1 md:inline">
        ¿Te ayudamos?
      </span>
    </a>
  );
}
