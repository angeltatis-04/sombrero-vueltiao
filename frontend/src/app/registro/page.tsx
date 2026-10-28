import type { Metadata } from "next";
import Link from "next/link";
import AuthCard from "@/components/auth/AuthCard";
import { Boton } from "@/components/ui/Boton";
import Campo from "@/components/ui/Campo";
import { RUTAS } from "@/config/sitio";

export const metadata: Metadata = { title: "Crear cuenta" };

// TODO: enviar al endpoint de registro del backend (bcrypt + JWT)
export default function RegistroPage() {
  return (
    <AuthCard
      titulo="Crea tu cuenta"
      subtitulo="Guarda tus datos de envío y sigue tus pedidos."
      pie={{ texto: "¿Ya tienes cuenta?", enlace: "Ingresa", href: RUTAS.login }}
    >
      <form className="space-y-5">
        <Campo label="Nombre completo" name="nombre" autoComplete="name" required />
        <Campo label="Correo electrónico" type="email" name="email" autoComplete="email" required />
        <Campo label="Contraseña" type="password" name="password" autoComplete="new-password" minLength={8} required ayuda="Mínimo 8 caracteres." />
        <label className="flex gap-3 text-sm leading-relaxed text-negro/75">
          <input type="checkbox" name="autorizaDatos" required className="mt-1 h-4 w-4 shrink-0 accent-negro" />
          <span>
            Autorizo el tratamiento de mis datos personales según la{" "}
            <Link href={RUTAS.politica("tratamiento-de-datos")} className="font-semibold text-oro hover:underline">
              política de tratamiento de datos
            </Link>
            .
          </span>
        </label>
        <Boton type="submit" tamano="lg" className="w-full">
          Crear cuenta
        </Boton>
      </form>
    </AuthCard>
  );
}
