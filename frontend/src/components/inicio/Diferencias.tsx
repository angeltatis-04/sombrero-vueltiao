import TituloSeccion from "@/components/ui/TituloSeccion";

const PILARES = [
  {
    titulo: "Conexión directa con el origen",
    texto: "Nacimos en Tuchín, Córdoba, cuna del sombrero vueltiao. De allí viene cada pieza que ofrecemos.",
  },
  {
    titulo: "Pasión por la tradición",
    texto: "Valoramos el trabajo artesanal, los detalles y la esencia que hacen único a cada sombrero.",
  },
  {
    titulo: "Autenticidad, elegancia y cultura",
    texto: "Sombreros que combinan lo ancestral con el estilo, para que cada cliente encuentre una pieza que lo represente.",
  },
];

export default function Diferencias() {
  return (
    <section className="bg-negro py-24 text-hueso md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <TituloSeccion antetitulo="Lo que nos define">
          ¿Qué nos hace <span className="text-oro">diferentes?</span>
        </TituloSeccion>

        <ol className="mt-16 grid border-t border-hueso/15 md:grid-cols-3">
          {PILARES.map((p, i) => (
            <li key={p.titulo} className="border-b border-hueso/15 py-10 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
              <span className="font-display text-7xl text-oro">0{i + 1}</span>
              <h3 className="mt-6 font-display text-3xl uppercase leading-tight">{p.titulo}</h3>
              <p className="mt-4 leading-relaxed text-hueso/70">{p.texto}</p>
            </li>
          ))}
        </ol>

        <p className="mt-16 max-w-4xl font-serif text-2xl italic leading-snug text-hueso/85 md:text-4xl">
          Hoy seguimos creciendo con una visión clara: posicionar el sombrero vueltiao como un símbolo de{" "}
          <span className="text-oro">distinción, identidad y estilo</span>, sin perder la esencia artesanal que lo hace
          extraordinario.
        </p>
      </div>
    </section>
  );
}
