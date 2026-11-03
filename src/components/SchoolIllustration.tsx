import React, { useState } from 'react';

export type IllustrationVariant =
  | 'hero-campus'
  | 'computer-lab'
  | 'science-lab'
  | 'library'
  | 'sports-ground'
  | 'classrooms'
  | 'school-campus';

interface SchoolIllustrationProps {
  variant: IllustrationVariant;
  imageUrl?: string;
  alt: string;
  className?: string;
}

/**
 * Calm, refined architectural & educational SVG illustrations.
 * Uses soft light-gray (#E5E5E5) and white (#FFFFFF) backgrounds with clean
 * navy (#14213D) linework and restrained orange (#FCA311) accents for eye comfort.
 * Automatically swaps to `imageUrl` when provided in `src/config/schoolData.ts`.
 */
export const SchoolIllustration: React.FC<SchoolIllustrationProps> = ({
  variant,
  imageUrl,
  alt,
  className = '',
}) => {
  const [imageFailed, setImageFailed] = useState(false);

  if (imageUrl && !imageFailed) {
    return (
      <div className={`relative overflow-hidden bg-[#E5E5E5]/40 ${className}`}>
        <img
          src={imageUrl}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => setImageFailed(true)}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden bg-[#FAF5F2] select-none ${className}`}
    >
      {variant === 'hero-campus' && (
        <svg
          viewBox="0 0 800 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
        >
          {/* Warm academic sky and courtyard canvas */}
          <rect width="800" height="500" fill="#FAF5F2" />
          <circle cx="650" cy="105" r="46" fill="#F59E0B" fillOpacity="0.22" />
          <circle cx="650" cy="105" r="28" fill="#F59E0B" fillOpacity="0.45" />

          {/* Ground Plane & Walkway */}
          <rect x="0" y="385" width="800" height="115" fill="#EFE2DC" />
          <path d="M335 385 L465 385 L525 500 L275 500 Z" fill="#FFFFFF" />
          <line x1="0" y1="385" x2="800" y2="385" stroke="#8B1518" strokeOpacity="0.25" strokeWidth="2" />

          {/* Left Academic Wing */}
          <rect
            x="80"
            y="220"
            width="195"
            height="165"
            rx="6"
            fill="#FFFFFF"
            stroke="#8B1518"
            strokeOpacity="0.4"
            strokeWidth="2"
          />
          <rect x="74" y="210" width="207" height="10" rx="3" fill="#8B1518" />
          {[0, 1, 2].map((col) =>
            [0, 1].map((row) => (
              <rect
                key={`lw-${col}-${row}`}
                x={104 + col * 54}
                y={246 + row * 54}
                width="34"
                height="34"
                rx="4"
                fill="#FAF5F2"
                stroke="#8B1518"
                strokeOpacity="0.35"
                strokeWidth="1.5"
              />
            ))
          )}

          {/* Right Academic Wing */}
          <rect
            x="525"
            y="220"
            width="195"
            height="165"
            rx="6"
            fill="#FFFFFF"
            stroke="#8B1518"
            strokeOpacity="0.4"
            strokeWidth="2"
          />
          <rect x="519" y="210" width="207" height="10" rx="3" fill="#8B1518" />
          {[0, 1, 2].map((col) =>
            [0, 1].map((row) => (
              <rect
                key={`rw-${col}-${row}`}
                x={549 + col * 54}
                y={246 + row * 54}
                width="34"
                height="34"
                rx="4"
                fill="#FAF5F2"
                stroke="#8B1518"
                strokeOpacity="0.35"
                strokeWidth="1.5"
              />
            ))
          )}

          {/* Central Main School Facade */}
          <rect
            x="265"
            y="160"
            width="270"
            height="225"
            rx="6"
            fill="#FFFFFF"
            stroke="#8B1518"
            strokeOpacity="0.55"
            strokeWidth="2.5"
          />
          <polygon
            points="250,162 400,92 550,162"
            fill="#8B1518"
          />
          <polygon
            points="280,156 400,102 520,156"
            fill="#FFFFFF"
          />

          {/* UFPS Crest Emblem */}
          <circle cx="400" cy="134" r="16" fill="#8B1518" stroke="#F59E0B" strokeWidth="2" />
          <text
            x="400"
            y="138"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="10"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            UFPS
          </text>

          {/* Flagpole */}
          <line x1="400" y1="42" x2="400" y2="92" stroke="#8B1518" strokeWidth="2.5" />
          <path d="M401 44 L438 54 L401 64 Z" fill="#F59E0B" />

          {/* Upper Floor Windows */}
          {[0, 1, 2, 3].map((col) => (
            <rect
              key={`cw-${col}`}
              x={294 + col * 58}
              y={188}
              width="36"
              height="42"
              rx="4"
              fill="#FAF5F2"
              stroke="#8B1518"
              strokeOpacity="0.4"
              strokeWidth="1.5"
            />
          ))}

          {/* Subtle Trim Line & Entrance Arch */}
          <rect x="290" y="250" width="220" height="4" rx="2" fill="#F59E0B" />
          <rect x="360" y="280" width="80" height="105" rx="40" fill="#7A1215" />
          <rect x="360" y="325" width="80" height="60" fill="#7A1215" />
          <line x1="400" y1="280" x2="400" y2="385" stroke="#FFFFFF" strokeOpacity="0.45" strokeWidth="1.5" />

          {/* Side Windows */}
          <rect x="296" y="286" width="38" height="48" rx="4" fill="#FAF5F2" stroke="#8B1518" strokeOpacity="0.4" strokeWidth="1.5" />
          <rect x="466" y="286" width="38" height="48" rx="4" fill="#FAF5F2" stroke="#8B1518" strokeOpacity="0.4" strokeWidth="1.5" />

          {/* Entrance Steps */}
          <rect x="340" y="385" width="120" height="7" rx="2" fill="#8B1518" fillOpacity="0.8" />
          <rect x="325" y="392" width="150" height="7" rx="2" fill="#8B1518" fillOpacity="0.4" />
        </svg>
      )}

      {variant === 'computer-lab' && (
        <svg viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <rect width="600" height="450" fill="#FAF5F2" />
          <rect x="0" y="335" width="600" height="115" fill="#EFE2DC" />
          <rect x="60" y="285" width="480" height="12" rx="4" fill="#8B1518" />
          <rect x="90" y="297" width="10" height="75" fill="#8B1518" fillOpacity="0.45" />
          <rect x="500" y="297" width="10" height="75" fill="#8B1518" fillOpacity="0.45" />
          {[100, 248, 396].map((x, idx) => (
            <g key={idx}>
              <rect
                x={x}
                y="165"
                width="104"
                height="76"
                rx="6"
                fill="#FFFFFF"
                stroke="#8B1518"
                strokeOpacity="0.65"
                strokeWidth="2.5"
              />
              <rect x={x + 10} y="175" width="84" height="52" rx="3" fill="#FAF5F2" />
              <line x1={x + 22} y1="191" x2={x + 62} y2="191" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round" />
              <line x1={x + 22} y1="203" x2={x + 76} y2="203" stroke="#8B1518" strokeOpacity="0.5" strokeWidth="2.5" strokeLinecap="round" />
              <line x1={x + 22} y1="213" x2={x + 50} y2="213" stroke="#8B1518" strokeOpacity="0.5" strokeWidth="2.5" strokeLinecap="round" />
              <rect x={x + 44} y="241" width="16" height="28" fill="#8B1518" fillOpacity="0.5" />
              <rect x={x + 26} y="269" width="52" height="10" rx="3" fill="#FFFFFF" stroke="#8B1518" strokeOpacity="0.5" strokeWidth="1.5" />
            </g>
          ))}
        </svg>
      )}

      {variant === 'science-lab' && (
        <svg viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <rect width="600" height="450" fill="#FAF5F2" />
          <rect x="0" y="340" width="600" height="110" fill="#EFE2DC" />
          <rect x="80" y="312" width="440" height="24" rx="4" fill="#FFFFFF" stroke="#8B1518" strokeOpacity="0.45" strokeWidth="2" />
          {/* Conical Flask */}
          <path
            d="M185 180 L185 220 L150 295 L245 295 L210 220 L210 180 Z"
            fill="#FFFFFF"
            stroke="#8B1518"
            strokeOpacity="0.75"
            strokeWidth="2.5"
          />
          <path d="M162 270 L233 270 L242 292 L153 292 Z" fill="#F59E0B" fillOpacity="0.75" />
          {/* Graduated Beaker */}
          <rect
            x="295"
            y="200"
            width="80"
            height="95"
            rx="6"
            fill="#FFFFFF"
            stroke="#8B1518"
            strokeOpacity="0.75"
            strokeWidth="2.5"
          />
          <rect x="303" y="250" width="64" height="38" rx="2" fill="#FAF5F2" />
          <line x1="312" y1="220" x2="335" y2="220" stroke="#8B1518" strokeOpacity="0.6" strokeWidth="2.5" />
          <line x1="312" y1="234" x2="345" y2="234" stroke="#8B1518" strokeOpacity="0.6" strokeWidth="2.5" />
          {/* Subtle Science Orbit */}
          <circle cx="445" cy="195" r="10" fill="#F59E0B" />
          <ellipse cx="445" cy="195" rx="46" ry="18" transform="rotate(-28 445 195)" stroke="#8B1518" strokeOpacity="0.5" strokeWidth="2" />
          <ellipse cx="445" cy="195" rx="46" ry="18" transform="rotate(28 445 195)" stroke="#8B1518" strokeOpacity="0.5" strokeWidth="2" />
        </svg>
      )}

      {variant === 'library' && (
        <svg viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <rect width="600" height="450" fill="#FAF5F2" />
          <rect
            x="90"
            y="70"
            width="420"
            height="310"
            rx="8"
            fill="#FFFFFF"
            stroke="#8B1518"
            strokeOpacity="0.5"
            strokeWidth="2.5"
          />
          <rect x="110" y="170" width="380" height="8" rx="2" fill="#8B1518" fillOpacity="0.8" />
          <rect x="110" y="275" width="380" height="8" rx="2" fill="#8B1518" fillOpacity="0.8" />
          {[125, 165, 205, 250, 295, 340, 385, 430].map((x, i) => (
            <rect
              key={`b1-${i}`}
              x={x}
              y={i % 2 === 0 ? 98 : 108}
              width="28"
              height={i % 2 === 0 ? 72 : 62}
              rx="3"
              fill={i === 2 || i === 6 ? '#F59E0B' : i % 2 === 0 ? '#8B1518' : '#E5D5D0'}
              fillOpacity={i === 2 || i === 6 ? 0.9 : 0.85}
            />
          ))}
          {[130, 175, 220, 265, 310, 355, 400, 440].map((x, i) => (
            <rect
              key={`b2-${i}`}
              x={x}
              y={i % 2 === 0 ? 200 : 210}
              width="28"
              height={i % 2 === 0 ? 75 : 65}
              rx="3"
              fill={i === 4 ? '#F59E0B' : i % 2 === 0 ? '#E5D5D0' : '#8B1518'}
              fillOpacity="0.85"
            />
          ))}
        </svg>
      )}

      {variant === 'sports-ground' && (
        <svg viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <rect width="600" height="450" fill="#FAF5F2" />
          <circle cx="485" cy="95" r="34" fill="#F59E0B" fillOpacity="0.4" />
          <rect x="0" y="235" width="600" height="215" fill="#EFE2DC" />
          <rect
            x="75"
            y="265"
            width="450"
            height="140"
            rx="24"
            fill="#FFFFFF"
            stroke="#8B1518"
            strokeOpacity="0.55"
            strokeWidth="2.5"
          />
          <circle cx="300" cy="335" r="32" stroke="#F59E0B" strokeWidth="2.5" />
          <line x1="300" y1="265" x2="300" y2="405" stroke="#8B1518" strokeOpacity="0.35" strokeWidth="2" />
          <line x1="165" y1="160" x2="165" y2="235" stroke="#8B1518" strokeOpacity="0.7" strokeWidth="3" />
          <line x1="245" y1="160" x2="245" y2="235" stroke="#8B1518" strokeOpacity="0.7" strokeWidth="3" />
          <line x1="165" y1="160" x2="245" y2="160" stroke="#F59E0B" strokeWidth="4" />
        </svg>
      )}

      {variant === 'classrooms' && (
        <svg viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <rect width="600" height="450" fill="#FAF5F2" />
          <rect x="0" y="335" width="600" height="115" fill="#EFE2DC" />
          <rect
            x="115"
            y="75"
            width="370"
            height="170"
            rx="8"
            fill="#FFFFFF"
            stroke="#8B1518"
            strokeOpacity="0.55"
            strokeWidth="2.5"
          />
          <line x1="155" y1="118" x2="320" y2="118" stroke="#8B1518" strokeOpacity="0.8" strokeWidth="4" strokeLinecap="round" />
          <line x1="155" y1="146" x2="420" y2="146" stroke="#E5D5D0" strokeWidth="5" strokeLinecap="round" />
          <line x1="155" y1="172" x2="380" y2="172" stroke="#E5D5D0" strokeWidth="5" strokeLinecap="round" />
          <rect x="265" y="237" width="70" height="6" rx="3" fill="#F59E0B" />
          {[100, 248, 396].map((x, idx) => (
            <g key={idx}>
              <rect x={x} y="302" width="104" height="12" rx="3" fill="#8B1518" fillOpacity="0.85" />
              <rect x={x + 14} y="314" width="8" height="62" fill="#8B1518" fillOpacity="0.4" />
              <rect x={x + 82} y="314" width="8" height="62" fill="#8B1518" fillOpacity="0.4" />
            </g>
          ))}
        </svg>
      )}

      {variant === 'school-campus' && (
        <svg viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <rect width="600" height="450" fill="#FAF5F2" />
          <circle cx="480" cy="95" r="34" fill="#F59E0B" fillOpacity="0.4" />
          <rect x="0" y="340" width="600" height="110" fill="#EFE2DC" />
          <rect
            x="145"
            y="165"
            width="310"
            height="175"
            rx="6"
            fill="#FFFFFF"
            stroke="#8B1518"
            strokeOpacity="0.55"
            strokeWidth="2.5"
          />
          <polygon points="130,167 300,90 470,167" fill="#8B1518" />
          <circle cx="300" cy="136" r="12" fill="#F59E0B" />
          <rect x="268" y="255" width="64" height="85" rx="32" fill="#7A1215" />
          <rect x="268" y="290" width="64" height="50" fill="#7A1215" />
          {[180, 238, 332, 390].map((x, i) => (
            <rect
              key={i}
              x={x}
              y="195"
              width="30"
              height="36"
              rx="4"
              fill="#FAF5F2"
              stroke="#8B1518"
              strokeOpacity="0.4"
              strokeWidth="1.5"
            />
          ))}
        </svg>
      )}
    </div>
  );
};
