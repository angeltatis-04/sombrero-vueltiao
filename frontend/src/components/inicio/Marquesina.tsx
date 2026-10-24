import { ENVIO } from "@/config/sitio";
import { PERSONALIZACION } from "@/data/tienda";
import { formatoCOP } from "@/lib/format";

const FRASES = [
  "Hecho a mano en Tuchín",
  "100% caña flecha",
  "Envíos a toda Colombia",
  `Envío gratis desde ${formatoCOP(ENVIO.gratisDesde)}`,
  PERSONALIZACION.gratuita && "Personalización gratuita",
  "Tradición zenú",
  "Estilo · Identidad · Orgullo",
].filter(Boolean) as string[];

// Franja con texto que se desplaza sin fin. El contenido va duplicado para que el bucle no tenga cortes.
export default function Marquesina({ tono = "oro" }: { tono?: "oro" | "negro" }) {
  const colores = tono === "oro" ? "bg-oro text-negro" : "bg-negro text-oro";

  return (
    <div className={`overflow-hidden py-4 ${colores}`} aria-hidden>
      <div className="flex w-max animate-marquesina">
        {[0, 1].map((copia) => (
          <ul key={copia} className="flex shrink-0">
            {FRASES.map((f) => (
              <li key={f} className="flex items-center whitespace-nowrap px-6 font-display text-2xl uppercase md:text-3xl">
                {f}
                <span className="ml-12 text-lg">✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
