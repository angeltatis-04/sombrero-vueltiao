import Image from "next/image";
import { SITIO } from "@/config/sitio";

// Usa el logo de /public si está configurado en SITIO.logo; si no, el nombre en texto.
export default function Logo() {
  if (SITIO.logo) {
    return <Image src={SITIO.logo} alt={SITIO.marca} width={160} height={160} className="h-11 w-auto" priority />;
  }
  return (
    <span className="whitespace-nowrap text-sm font-extrabold uppercase leading-none tracking-[0.18em] min-[380px]:text-base md:text-lg">
      Sombreros <span className="font-light">Vueltiao</span>
    </span>
  );
}
