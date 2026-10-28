import Image from "next/image";
import { SITIO } from "@/config/sitio";

// Usa el logo de /public si está configurado en SITIO.logo; si no, el nombre en texto.
export default function Logo() {
  if (SITIO.logo) {
    const { src, ancho, alto } = SITIO.logo;
    // Un emblema casi cuadrado necesita más alto que un logo horizontal para leerse
    const alturas = ancho / alto < 2 ? "h-12 md:h-16" : "h-6 min-[380px]:h-7 md:h-9";
    return <Image src={src} alt={SITIO.marca} width={ancho} height={alto} className={`w-auto ${alturas}`} priority />;
  }
  return (
    <span className="whitespace-nowrap text-sm font-extrabold uppercase leading-none tracking-[0.18em] min-[380px]:text-base md:text-lg">
      Sombreros <span className="font-light">Vueltiao</span>
    </span>
  );
}
