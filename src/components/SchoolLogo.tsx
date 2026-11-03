import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { SCHOOL_DATA } from '../config/schoolData';

interface SchoolLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showFullTitle?: boolean;
  showSubtitle?: boolean;
}

/**
 * Temporary UFPS School Emblem Component.
 * Responsive sizing: compact on mobile/tablet while preserving full desktop proportions.
 */
export const SchoolLogo: React.FC<SchoolLogoProps> = ({
  variant = 'light',
  size = 'md',
  showFullTitle = true,
  showSubtitle = false,
}) => {
  const [imgError, setImgError] = useState(false);
  const hasOfficialLogo = Boolean(SCHOOL_DATA.officialLogoUrl && !imgError);

  const badgeDimensions = {
    sm: 'w-9 h-9',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }[size];

  const iconSize = {
    sm: 'w-4 h-4',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  }[size];

  const titleClasses = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  }[size];

  return (
    <div className="inline-flex items-center gap-3.5 select-none">
      {hasOfficialLogo ? (
        <img
          src={SCHOOL_DATA.officialLogoUrl}
          alt={`${SCHOOL_DATA.schoolName} Official Logo`}
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className={`${badgeDimensions} object-contain rounded-xl bg-[#FFFFFF] p-1 border-2 border-[#D97706]`}
        />
      ) : (
        <div
          aria-hidden="true"
          className={`${badgeDimensions} relative flex flex-col items-center justify-center rounded-xl border-2 border-[#F59E0B] bg-[#8B1518] text-[#FFFFFF] shadow-xs shrink-0`}
        >
          <GraduationCap className={`${iconSize} text-[#FBBF24] -mb-0.5`} strokeWidth={2.2} />
          <span className="text-[9px] font-extrabold tracking-wider leading-none text-[#FFFFFF]">
            {SCHOOL_DATA.shortInitials}
          </span>
        </div>
      )}

      {showFullTitle && (
        <div className="flex flex-col text-left">
          <span
            className={`font-display font-bold tracking-tight leading-tight whitespace-nowrap ${titleClasses} ${
              variant === 'light' ? 'text-[#FFFFFF]' : 'text-[#8B1518]'
            }`}
          >
            {SCHOOL_DATA.schoolName}
          </span>
          {showSubtitle ? (
            <span
              className={`text-xs font-semibold leading-tight mt-0.5 ${
                variant === 'light' ? 'text-[#FDE68A]' : 'text-[#27272A]'
              }`}
            >
              {SCHOOL_DATA.shortInitials} · {SCHOOL_DATA.address}
            </span>
          ) : (
            <span
              className={`text-[11px] font-semibold leading-tight ${
                variant === 'light' ? 'text-[#FDE68A]' : 'text-[#3F3F46]'
              }`}
            >
              {SCHOOL_DATA.address}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
