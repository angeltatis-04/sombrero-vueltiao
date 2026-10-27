import { EMPRESA } from "@/config/sitio";

// Ficha con los datos legales y de contacto. Solo aparecen los campos que tengan valor.
export default function DatosEmpresa({ className = "" }: { className?: string }) {
  const datos = [
    { titulo: "Razón social", valor: EMPRESA.razonSocial },
    { titulo: "NIT", valor: EMPRESA.nit },
    {
      titulo: EMPRESA.telefonos.length > 1 ? "Teléfonos" : "Teléfono",
      valor: EMPRESA.telefonos.join(" · "),
      href: EMPRESA.telefonos[0] && `tel:+57${EMPRESA.telefonos[0].replace(/\D/g, "")}`,
    },
    { titulo: "Correo", valor: EMPRESA.correo, href: EMPRESA.correo && `mailto:${EMPRESA.correo}` },
    { titulo: "Dirección", valor: EMPRESA.direccion },
    { titulo: "Ciudad", valor: EMPRESA.ciudad },
  ].filter((d) => d.valor);

  return (
    <dl className={`grid gap-3 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {datos.map((d) => (
        <div key={d.titulo} className="rounded-2xl border border-white/80 bg-white/60 backdrop-blur-md p-5">
          <dt className="text-sm text-oro">{d.titulo}</dt>
          <dd className="mt-1 break-words text-xl font-semibold">
            {d.href ? (
              <a href={d.href} className="hover:text-oro">
                {d.valor}
              </a>
            ) : (
              d.valor
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
