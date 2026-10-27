import { IconoFacebook, IconoInstagram, IconoTikTok, IconoWhatsApp } from "./Iconos";
import { REDES, WHATSAPP, enlaceWhatsApp } from "@/config/sitio";

const ICONOS = { whatsapp: IconoWhatsApp, instagram: IconoInstagram, facebook: IconoFacebook, tiktok: IconoTikTok };
const NOMBRES = { whatsapp: "WhatsApp", instagram: "Instagram", facebook: "Facebook", tiktok: "TikTok" };

// Solo muestra las redes que tienen URL en config/sitio.ts.
export default function Redes({ className = "" }: { className?: string }) {
  const enlaces = { whatsapp: WHATSAPP.numero && enlaceWhatsApp(), ...REDES };
  const redes = (Object.keys(enlaces) as (keyof typeof enlaces)[]).filter((r) => enlaces[r]);
  if (redes.length === 0) return null;

  return (
    <div className={`flex gap-2 ${className}`}>
      {redes.map((r) => {
        const Icono = ICONOS[r];
        return (
          <a
            key={r}
            href={enlaces[r]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={NOMBRES[r]}
            className="grid h-11 w-11 place-items-center rounded-full border border-current/25 transition hover:-translate-y-0.5 hover:border-negro/30 hover:bg-white/70"
          >
            <Icono />
          </a>
        );
      })}
    </div>
  );
}
