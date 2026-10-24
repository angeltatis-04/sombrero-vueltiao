import type { Metadata } from "next";
import AuthCard from "@/components/auth/AuthCard";
import { Boton } from "@/components/ui/Boton";
import Campo from "@/components/ui/Campo";
import { RUTAS } from "@/config/sitio";

export const metadata: Metadata = { title: "Ingresar" };

// TODO: enviar al endpoint de login del backend (JWT)
export default function LoginPage() {
  return (
    <AuthCard
      titulo="Bienvenido de nuevo"
      subtitulo="Ingresa para ver tus pedidos y pagar más rápido."
      pie={{ texto: "¿No tienes cuenta?", enlace: "Regístrate", href: RUTAS.registro }}
    >
      <form className="space-y-5">
        <Campo label="Correo electrónico" type="email" name="email" autoComplete="email" required />
        <Campo label="Contraseña" type="password" name="password" autoComplete="current-password" required />
        <Boton type="submit" tamano="lg" className="w-full">
          Ingresar
        </Boton>
      </form>
    </AuthCard>
  );
}
