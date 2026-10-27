import { IconoAcordeon, IconoSombrero } from "@/components/ui/Iconos";
import { ENVIO } from "@/config/sitio";
import { GARANTIA, PERSONALIZACION } from "@/data/tienda";
import { formatoCOP } from "@/lib/format";

// Frase destacada: va entre dos acordeones
const LEMA = "Puro sombrero vueltiao";

// `oferta`: lo que le ahorra plata o le da algo extra al cliente; va resaltado como etiqueta
const FRASES = [
  { texto: LEMA },
  { texto: `Envío gratis desde ${formatoCOP(ENVIO.gratisDesde)}`, oferta: true },
  { texto: "Hecho a mano en Tuchín" },
  PERSONALIZACION.gratuita && { texto: "Personalización gratis", oferta: true },
  { texto: "100% caña flecha" },
  GARANTIA && { texto: "Garantía de 1 año", oferta: true },
  { texto: "Se dobla y se desdobla" },
  { texto: "Envíos a toda Colombia" },
  { texto: "Tradición zenú" },
].filter(Boolean) as { texto: string; oferta?: boolean }[];

const CLASE_ACORDEON = "h-5 w-5";

// Franja con texto que se desplaza sin fin. El contenido va duplicado para que el bucle no tenga cortes.
// Se detiene al pasar el mouse para poder leerla.
export default function Marquesina({ tono = "oferta" }: { tono?: "oferta" | "negro" }) {
  const fondo = tono === "oferta" ? "franja-viva" : "bg-negro";

  return (
    <div className={`group relative overflow-hidden py-3.5 text-white md:py-4 ${fondo}`} aria-hidden>
      {/* Destello que cruza la franja */}
      <span className="destello pointer-events-none absolute inset-y-0 left-0 z-10 w-1/4" />
      <div className="flex w-max animate-marquesina group-hover:[animation-play-state:paused]">
        {[0, 1].map((copia) => (
          <ul key={copia} className="flex shrink-0 items-center">
            {FRASES.map(({ texto, oferta }) => (
              <li key={texto} className="flex items-center whitespace-nowrap px-5 text-sm font-extrabold uppercase tracking-[0.14em] md:text-base">
                {texto === LEMA ? (
                  <span className="flex items-center gap-2.5">
                    <IconoAcordeon className={CLASE_ACORDEON} />
                    {texto}
                    <IconoAcordeon className={CLASE_ACORDEON} />
                  </span>
                ) : oferta ? (
                  <span className="rounded-full bg-white px-4 py-1.5 text-oferta shadow-md shadow-black/10">{texto}</span>
                ) : (
                  texto
                )}
                <IconoSombrero className="ml-10 h-6 w-6 animate-balanceo" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
