const PROPS_SVG = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  "aria-hidden": true,
};

export function IconoBolsa() {
  return (
    <svg {...PROPS_SVG}>
      <path d="M6 7h12l-1 13H7L6 7Z" strokeLinejoin="round" />
      <path d="M9 7a3 3 0 0 1 6 0" />
    </svg>
  );
}

export function IconoBuscar() {
  return (
    <svg {...PROPS_SVG}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconoUsuario() {
  return (
    <svg {...PROPS_SVG}>
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M5 20c.8-3.6 3.6-5.5 7-5.5s6.2 1.9 7 5.5" strokeLinecap="round" />
    </svg>
  );
}

// Íconos pequeños para bloques informativos (envío, hecho a mano, personalización…)
export function IconoCamion() {
  return (
    <svg {...PROPS_SVG}>
      <path d="M3 6h11v10H3zM14 10h4l3 3v3h-7" strokeLinejoin="round" />
      <circle cx="7" cy="17.5" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="17.5" cy="17.5" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconoMano() {
  return (
    <svg {...PROPS_SVG}>
      <path
        d="M8 12V5.5a1.5 1.5 0 0 1 3 0V11m0-1.5V4.5a1.5 1.5 0 0 1 3 0V11m0-4.5a1.5 1.5 0 0 1 3 0V13c0 4-2.5 7-6.5 7S5 17.5 4 14.5L3 12a1.5 1.5 0 0 1 2.6-1.4L8 13"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconoPluma() {
  return (
    <svg {...PROPS_SVG}>
      <path d="M4 20l4-1 11-11-3-3L5 16l-1 4Z" strokeLinejoin="round" />
      <path d="M14 7l3 3" />
    </svg>
  );
}

export function IconoEscudo() {
  return (
    <svg {...PROPS_SVG}>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconoRegalo() {
  return (
    <svg {...PROPS_SVG}>
      <path d="M4 10h16v10H4zM3 7h18v3H3zM12 7v13" strokeLinejoin="round" />
      <path d="M12 7C10.5 4 7 4 7.5 6s4.5 1 4.5 1Zm0 0c1.5-3 5-3 4.5-1S12 7 12 7Z" />
    </svg>
  );
}

export function IconoRegla() {
  return (
    <svg {...PROPS_SVG}>
      <path d="M3 15 15 3l6 6L9 21z" strokeLinejoin="round" />
      <path d="m7 13 1.5 1.5M10 10l1.5 1.5M13 7l1.5 1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconoCheck({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden>
      <path d="m5 12 4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Acordeón vallenato: dos cajas de botones unidas por el fuelle
export function IconoAcordeon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden>
      <rect x="2" y="5.5" width="5" height="13" rx="1" />
      <rect x="17" y="5.5" width="5" height="13" rx="1" />
      <path d="M7 5.5 9.5 8 12 5.5 14.5 8 17 5.5M7 18.5 9.5 16 12 18.5 14.5 16 17 18.5M9.5 8v8M12 5.5v13M14.5 8v8" strokeLinejoin="round" />
      <circle cx="4.5" cy="9" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="4.5" cy="12" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="4.5" cy="15" r="0.9" fill="currentColor" stroke="none" />
      <path d="M18.5 9h2M18.5 12h2M18.5 15h2" strokeLinecap="round" />
    </svg>
  );
}

// Sombrero vueltiao de lado: ala ancha y copa con la franja en zigzag del tejido
export function IconoSombrero({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden>
      <ellipse cx="12" cy="16" rx="10.5" ry="3" />
      <ellipse cx="12" cy="16" rx="6.5" ry="1.6" />
      <path d="M7 15.6C6.8 11.5 7.4 8.3 9 7.2Q12 6.2 15 7.2C16.6 8.3 17.2 11.5 17 15.6" strokeLinejoin="round" />
      <path d="M7.2 11.3 8.9 10l1.7 1.3 1.7-1.3 1.7 1.3 1.7-1.3 1.7 1.3" strokeLinejoin="round" />
    </svg>
  );
}

export function IconoInstagram({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconoFacebook({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.25-1.46 1.5-1.46H16.6V4.46A21 21 0 0 0 14.3 4.3c-2.28 0-3.84 1.39-3.84 3.95v2.25H7.9v3h2.56V21h3.04Z" />
    </svg>
  );
}

export function IconoTikTok({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.59-2.6 2.6 2.6 0 0 1 3.4-2.47V9.67a5.7 5.7 0 0 0-6.5 5.63 5.68 5.68 0 0 0 5.69 5.7 5.68 5.68 0 0 0 5.68-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.3 4.3 0 0 1-3.24-1.48Z" />
    </svg>
  );
}

export function IconoWhatsApp({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35ZM12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.42 9.42 0 0 1-1.45-5.03c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.9.99 6.68 2.77a9.38 9.38 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.45 9.44Zm8.04-17.48A11.3 11.3 0 0 0 12.04.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.6 23.6l6-1.57a11.3 11.3 0 0 0 5.43 1.38h.01c6.26 0 11.36-5.1 11.36-11.36 0-3.03-1.18-5.89-3.32-8.03Z" />
    </svg>
  );
}

export function IconoMenu({ abierto }: { abierto: boolean }) {
  return (
    <svg {...PROPS_SVG}>
      {abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  );
}
