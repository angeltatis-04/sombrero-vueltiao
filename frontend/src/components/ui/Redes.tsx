import { IconoFacebook, IconoInstagram, IconoTikTok } from "./Iconos";
import { REDES } from "@/config/sitio";

const ICONOS = { instagram: IconoInstagram, facebook: IconoFacebook, tiktok: IconoTikTok };
const NOMBRES = { instagram: "Instagram", facebook: "Facebook", tiktok: "TikTok" };

// Solo muestra las redes que tienen URL en config/sitio.ts.
export default function Redes({ className = "" }: { className?: string }) {
  const redes = (Object.keys(REDES) as (keyof typeof REDES)[]).filter((r) => REDES[r]);
  if (redes.length === 0) return null;

  return (
    <div className={`flex gap-2 ${className}`}>
      {redes.map((r) => {
        const Icono = ICONOS[r];
        return (
          <a
            key={r}
            href={REDES[r]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={NOMBRES[r]}
            className="grid h-11 w-11 place-items-center border border-current/30 transition-colors hover:border-oro hover:bg-oro hover:text-negro"
          >
            <Icono />
          </a>
        );
      })}
    </div>
  );
}
