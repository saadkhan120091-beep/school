import React from 'react';
import { Lock, UserCheck, MapPin, Phone, Mail } from 'lucide-react';
import { SCHOOL_DATA, PortalItem } from '../config/schoolData';
import { SchoolLogo } from './SchoolLogo';

interface HeaderProps {
  onOpenPortal: (portal: PortalItem) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPortal }) => {
  const staffPortal = SCHOOL_DATA.portals.find((p) => p.id === 'staff-login')!;
  const parentPortal = SCHOOL_DATA.portals.find((p) => p.id === 'parent-portal')!;

  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF] border-b border-[#E5D5D0] shadow-xs">
      {/* Top Crimson Maroon Utility Bar (matching reference image) */}
      <div className="bg-[#7A1215] text-[#FFFFFF] border-b border-[#9E2A2E]/40">
        <div className="max-w-7xl mx-auto px-8 h-9 flex items-center justify-between text-xs font-semibold">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-[#FFFFFF]">
              <MapPin className="w-3.5 h-3.5 text-[#FBBF24]" aria-hidden="true" />
              <span>{SCHOOL_DATA.address}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-[#FFFFFF]">
              <Phone className="w-3.5 h-3.5 text-[#FBBF24]" aria-hidden="true" />
              <span>Phone: {SCHOOL_DATA.contact.phone}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-[#FFFFFF]">
              <Mail className="w-3.5 h-3.5 text-[#FBBF24]" aria-hidden="true" />
              <span>Email: {SCHOOL_DATA.contact.email}</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[#FFFFFF]">
            <span>Admissions: {SCHOOL_DATA.admissions.description}</span>
            <span aria-hidden="true" className="text-[#FBBF24]">|</span>
            <span>{SCHOOL_DATA.shortInitials} Official Portal</span>
          </div>
        </div>
      </div>

      {/* Main White Navigation Bar */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Temporary UFPS Logo & School Name */}
          <a
            href="#home"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1518] rounded-xl shrink-0"
          >
            <SchoolLogo variant="dark" size="md" showFullTitle={true} showSubtitle={false} />
          </a>

          {/* Zone 2: Primary Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="flex items-center gap-7 text-sm font-bold tracking-wide"
          >
            {SCHOOL_DATA.navigation.map((item, idx) => (
              <a
                key={item.id}
                href={item.href}
                className={`py-1.5 whitespace-nowrap shrink-0 transition-colors duration-200 border-b-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1518] rounded-xs ${
                  idx === 0
                    ? 'text-[#8B1518] border-[#8B1518]'
                    : 'text-[#18181B] border-transparent hover:text-[#8B1518] hover:border-[#8B1518]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Staff Login & Parent Portal Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onOpenPortal(staffPortal)}
              className="inline-flex items-center justify-center gap-2 h-10 px-4 text-xs font-bold text-[#8B1518] bg-[#FDF6F3] border-2 border-[#8B1518] rounded-lg hover:bg-[#8B1518] hover:text-[#FFFFFF] active:scale-[0.99] transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1518]"
            >
              <Lock className="w-3.5 h-3.5 text-current" aria-hidden="true" />
              <span>{staffPortal.label}</span>
            </button>
            <button
              type="button"
              onClick={() => onOpenPortal(parentPortal)}
              className="inline-flex items-center justify-center gap-2 h-10 px-4 text-xs font-bold text-[#FFFFFF] bg-[#8B1518] border-2 border-[#8B1518] rounded-lg hover:bg-[#560B0E] hover:border-[#560B0E] active:scale-[0.99] transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1518]"
            >
              <UserCheck className="w-3.5 h-3.5 text-[#FBBF24]" aria-hidden="true" />
              <span>{parentPortal.label}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};


