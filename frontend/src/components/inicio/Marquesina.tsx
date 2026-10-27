import { IconoAcordeon, IconoSombrero } from "@/components/ui/Iconos";
import { ENVIO } from "@/config/sitio";
import { GARANTIA, PERSONALIZACION } from "@/data/tienda";
import { formatoCOP } from "@/lib/format";

// Frase destacada: va entre dos acordeones
const LEMA = "Puro sombrero vueltiao";

const FRASES = [
  LEMA,
  "Hecho a mano en Tuchín",
  "100% caña flecha",
  GARANTIA && "Garantía de 1 año",
  "Se dobla y se desdobla",
  "Envíos a toda Colombia",
  `Envío gratis desde ${formatoCOP(ENVIO.gratisDesde)}`,
  PERSONALIZACION.gratuita && "Personalización gratuita",
  "Tradición zenú",
  "Estilo · Identidad · Orgullo",
].filter(Boolean) as string[];

const CLASE_ACORDEON = "h-4 w-4";

// Franja con texto que se desplaza sin fin. El contenido va duplicado para que el bucle no tenga cortes.
export default function Marquesina({ tono = "oro" }: { tono?: "oro" | "negro" }) {
  const colores = tono === "oro" ? "bg-gradient-to-r from-oro via-oro-claro to-oro text-white" : "bg-negro text-white";

  return (
    <div className={`overflow-hidden py-2.5 ${colores}`} aria-hidden>
      <div className="flex w-max animate-marquesina">
        {[0, 1].map((copia) => (
          <ul key={copia} className="flex shrink-0">
            {FRASES.map((f) => (
              <li key={f} className="flex items-center whitespace-nowrap px-4 text-xs font-semibold uppercase tracking-[0.2em]">
                {f === LEMA ? (
                  <span className="flex items-center gap-2">
                    <IconoAcordeon className={CLASE_ACORDEON} />
                    {f}
                    <IconoAcordeon className={CLASE_ACORDEON} />
                  </span>
                ) : (
                  f
                )}
                <IconoSombrero className="ml-8 h-4 w-4 opacity-70" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
