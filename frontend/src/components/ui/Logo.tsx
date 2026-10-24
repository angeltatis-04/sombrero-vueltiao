import Image from "next/image";
import { SITIO } from "@/config/sitio";

// Usa el logo de /public si está configurado en SITIO.logo; si no, el nombre en texto.
export default function Logo() {
  if (SITIO.logo) {
    return <Image src={SITIO.logo} alt={SITIO.marca} width={160} height={160} className="h-11 w-auto" priority />;
  }
  return (
    <span className="whitespace-nowrap font-display text-lg uppercase leading-none tracking-wide min-[380px]:text-xl">
      Sombreros <span className="text-oro">Vueltiao</span>
      <sup className="ml-0.5 text-[10px]">®</sup>
    </span>
  );
}
