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
    <section className="bg-hueso/70 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <TituloSeccion antetitulo="Lo que nos define">
          ¿Qué nos hace <span className="text-oro">diferentes?</span>
        </TituloSeccion>

        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {PILARES.map((p, i) => (
            <li key={p.titulo} className="aparecer rounded-2xl border border-white/80 bg-white/60 backdrop-blur-md p-7">
              <span className="font-display text-4xl text-oro">0{i + 1}</span>
              <h3 className="mt-4 text-xl font-semibold leading-snug">{p.titulo}</h3>
              <p className="mt-3 leading-relaxed text-negro/75">{p.texto}</p>
            </li>
          ))}
        </ol>

        <p className="mt-12 max-w-4xl font-serif text-xl italic leading-snug text-negro/75 md:text-2xl">
          Hoy seguimos creciendo con una visión clara: posicionar el sombrero vueltiao como un símbolo de{" "}
          <span className="text-oro">distinción, identidad y estilo</span>, sin perder la esencia artesanal que lo hace
          extraordinario.
        </p>
      </div>
    </section>
  );
}
