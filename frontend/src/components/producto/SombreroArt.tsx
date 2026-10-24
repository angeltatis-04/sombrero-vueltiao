import { useId } from "react";

// Ilustración vectorial provisional hasta tener fotos reales en Cloudinary.
type Props = {
  acento?: string;
  className?: string;
};

const COPA = "M80 100 C77 76 80 54 88 44 Q120 32 152 44 C160 54 163 76 160 100 Z";
const ANILLOS_ALA = [104, 92, 80, 68, 56];

export default function SombreroArt({ acento = "#1c1a17", className }: Props) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const zigzag = `zz-${id}`;
  const recorte = `copa-${id}`;

  return (
    <svg viewBox="0 0 240 150" className={className} role="img" aria-label="Ilustración de sombrero vueltiao">
      <defs>
        <pattern id={zigzag} width="10" height="8" patternUnits="userSpaceOnUse">
          <path d="M0 7 L5 1 L10 7" fill="none" stroke={acento} strokeWidth="1.8" />
        </pattern>
        <clipPath id={recorte}>
          <path d={COPA} />
        </clipPath>
      </defs>

      <ellipse cx="120" cy="134" rx="104" ry="9" fill="#000" opacity="0.08" />

      {/* Ala */}
      <ellipse cx="120" cy="100" rx="112" ry="28" fill="#efe3c4" stroke={acento} strokeWidth="2" />
      {ANILLOS_ALA.map((rx, i) => (
        <ellipse
          key={rx}
          cx="120"
          cy="100"
          rx={rx}
          ry={rx * 0.25}
          fill="none"
          stroke={acento}
          strokeWidth={i % 2 === 0 ? 2.5 : 1.5}
          strokeDasharray={i % 2 === 0 ? undefined : "5 3"}
        />
      ))}

      {/* Copa */}
      <path d={COPA} fill="#efe3c4" stroke={acento} strokeWidth="2" />
      <g clipPath={`url(#${recorte})`}>
        <rect x="0" y="50" width="240" height="3" fill={acento} />
        <rect x="0" y="56" width="240" height="9" fill={`url(#${zigzag})`} />
        <rect x="0" y="68" width="240" height="3" fill={acento} />
        <rect x="0" y="76" width="240" height="9" fill={`url(#${zigzag})`} />
        <rect x="0" y="88" width="240" height="3" fill={acento} />
      </g>
      <ellipse cx="120" cy="43" rx="30" ry="5" fill="#f5ecd4" stroke={acento} strokeWidth="1.5" />
    </svg>
  );
}
