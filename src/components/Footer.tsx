import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Lock, UserCheck } from 'lucide-react';
import { SCHOOL_DATA, PortalItem, SocialPlatformId } from '../config/schoolData';
import { SchoolLogo } from './SchoolLogo';

interface FooterProps {
  onOpenPortal: (portal: PortalItem) => void;
}

const BRAND_HOVER_STYLES: Record<SocialPlatformId, string> = {
  facebook:
    'hover:bg-[#1877F2] hover:border-[#1877F2] focus-visible:bg-[#1877F2] focus-visible:border-[#1877F2]',
  instagram:
    'hover:bg-[#E4405F] hover:border-[#E4405F] focus-visible:bg-[#E4405F] focus-visible:border-[#E4405F]',
  youtube:
    'hover:bg-[#FF0000] hover:border-[#FF0000] focus-visible:bg-[#FF0000] focus-visible:border-[#FF0000]',
  whatsapp:
    'hover:bg-[#25D366] hover:border-[#25D366] focus-visible:bg-[#25D366] focus-visible:border-[#25D366]',
  tiktok:
    'hover:bg-[#000000] hover:border-[#E5E5E5]/40 focus-visible:bg-[#000000] focus-visible:border-[#E5E5E5]/40',
};

const SocialBrandIcon: React.FC<{ platformId: SocialPlatformId; className?: string }> = ({
  platformId,
  className = 'w-4 h-4',
}) => {
  switch (platformId) {
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
          <path d="M12.031 2c-5.508 0-9.987 4.479-9.987 9.988 0 1.763.459 3.479 1.333 4.992L2 22l5.143-1.349c1.469.802 3.125 1.225 4.885 1.225 5.508 0 9.987-4.479 9.987-9.988 0-5.509-4.479-9.888-9.984-9.888zm5.822 14.129c-.245.689-1.425 1.318-1.976 1.402-.507.077-1.15.109-1.855-.115-.428-.136-.979-.318-1.685-.622-2.964-1.278-4.9-4.265-5.048-4.462-.147-.197-1.205-1.603-1.205-3.058 0-1.455.763-2.17.1034-2.467.271-.296.591-.37.788-.37.197 0 .394.002.566.01.182.009.426-.069.666.508.246.592.837 2.047.911 2.195.074.148.123.321.025.518-.099.197-.148.321-.296.493-.148.173-.311.385-.443.518-.148.148-.303.309-.13.605.172.296.766 1.264 1.645 2.047 1.131 1.008 2.083 1.321 2.379 1.469.296.148.468.123.641-.074.172-.197.739-.863.936-1.159.197-.296.394-.247.665-.148.271.099 1.724.813 2.02.961.296.148.493.222.567.345.074.123.074.715-.171 1.404z" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      );
  }
};

export const Footer: React.FC<FooterProps> = ({ onOpenPortal }) => {
  const { schoolName, address, navigation, portals, contact, socialMedia } = SCHOOL_DATA;
  const [activeSocialTooltip, setActiveSocialTooltip] = useState<SocialPlatformId | null>(null);

  return (
    <footer className="bg-[#560B0E] text-[#FFFFFF] border-t-2 border-[#7A1215]">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-12 gap-10 pb-12 border-b border-[#FFFFFF]/20">
          {/* Column 1: Temporary School Logo, Name, Address & Social Media Icons */}
          <div className="col-span-4 space-y-5">
            <SchoolLogo variant="light" size="lg" showFullTitle={true} showSubtitle={true} />
            <p className="text-sm font-medium text-[#FFFFFF] leading-relaxed max-w-sm">
              Welcome to {schoolName}. Dedicated to nurturing knowledge, character, and confidence in a supportive educational environment.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-[#FDE68A]">
              <MapPin className="w-4 h-4 text-[#FBBF24] shrink-0" aria-hidden="true" />
              <span>{address}</span>
            </div>

            {/* Social Media Icon-Only Bar */}
            <div className="pt-2 space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#FFFFFF]">
                  Official Social Channels
                </span>
                <span className="text-xs font-semibold text-[#FDE68A]">· Coming Soon</span>
              </div>

              <div
                role="group"
                aria-label="Official Social Media Channels (Coming Soon)"
                className="flex flex-wrap items-center gap-3"
              >
                {socialMedia.map((social) => {
                  const brandHover = BRAND_HOVER_STYLES[social.id];
                  const isTooltipVisible = activeSocialTooltip === social.id;
                  const accessibleLabel = social.url
                    ? `Visit our ${social.platform} page`
                    : `${social.platform} (${social.status})`;

                  const sharedClasses = `group relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#7A1215] border border-[#FFFFFF]/35 text-[#FFFFFF] hover:text-[#FFFFFF] focus-visible:text-[#FFFFFF] hover:-translate-y-0.5 hover:shadow-md active:scale-95 transition-all duration-250 ease-out cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF24] ${brandHover}`;

                  const tooltipElement = (
                    <span
                      role="tooltip"
                      className={`pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-[#18181B] text-[#FFFFFF] text-[11px] font-semibold whitespace-nowrap shadow-sm transition-all duration-200 z-10 ${
                        isTooltipVisible
                          ? 'opacity-100 translate-y-0.5'
                          : 'opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100'
                      }`}
                    >
                      {social.platform}
                      {!social.url ? ` · ${social.status}` : ''}
                    </span>
                  );

                  if (social.url) {
                    return (
                      <a
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={accessibleLabel}
                        className={sharedClasses}
                      >
                        <SocialBrandIcon
                          platformId={social.id}
                          className="w-4 h-4 transition-transform duration-250 ease-out group-hover:scale-110"
                        />
                        {tooltipElement}
                      </a>
                    );
                  }

                  return (
                    <button
                      key={social.id}
                      type="button"
                      aria-label={accessibleLabel}
                      onClick={() =>
                        setActiveSocialTooltip((prev) => (prev === social.id ? null : social.id))
                      }
                      onBlur={() => setActiveSocialTooltip(null)}
                      className={sharedClasses}
                    >
                      <SocialBrandIcon
                        platformId={social.id}
                        className="w-4 h-4 transition-transform duration-250 ease-out group-hover:scale-110"
                      />
                      {tooltipElement}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-2 space-y-3.5">
            <h3 className="font-display text-base font-bold uppercase tracking-wider text-[#FBBF24]">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-[#FFFFFF] hover:text-[#FBBF24] transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Important Portals */}
          <div className="col-span-3 space-y-3.5">
            <h3 className="font-display text-base font-bold uppercase tracking-wider text-[#FBBF24]">
              Important Portals
            </h3>
            <ul className="space-y-2.5 text-sm">
              {portals.map((portal) => (
                <li key={portal.id}>
                  <button
                    type="button"
                    onClick={() => onOpenPortal(portal)}
                    className="inline-flex flex-wrap items-center gap-2 text-[#FFFFFF] hover:text-[#FBBF24] font-semibold transition-colors duration-200 cursor-pointer text-left"
                  >
                    {portal.id === 'staff-login' ? (
                      <Lock className="w-3.5 h-3.5 text-[#FBBF24] shrink-0" aria-hidden="true" />
                    ) : (
                      <UserCheck className="w-3.5 h-3.5 text-[#FBBF24] shrink-0" aria-hidden="true" />
                    )}
                    <span>{portal.label}</span>
                    <span className="text-xs font-bold text-[#FDE68A]">({portal.status})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="col-span-3 space-y-3.5">
            <h3 className="font-display text-base font-bold uppercase tracking-wider text-[#FBBF24]">
              Contact Information
            </h3>
            <ul className="grid grid-cols-1 gap-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FBBF24] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block text-xs font-bold text-[#FDE68A]">Address</span>
                  <span className="font-semibold text-[#FFFFFF]">{contact.address}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#FBBF24] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block text-xs font-bold text-[#FDE68A]">Phone</span>
                  <span className="font-semibold text-[#FFFFFF]">{contact.phone}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#FBBF24] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block text-xs font-bold text-[#FDE68A]">Email</span>
                  <span className="font-semibold text-[#FFFFFF]">{contact.email}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#FBBF24] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block text-xs font-bold text-[#FDE68A]">Office Hours</span>
                  <span className="font-semibold text-[#FFFFFF]">{contact.officeHours}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex items-center justify-between gap-4 text-xs font-semibold text-[#FFFFFF]">
          <p>
            © {new Date().getFullYear()} {schoolName}. All rights reserved.
          </p>
          <p className="text-[#FDE68A]">
            {address} · Official Portal & Firebase Integration: Coming Soon
          </p>
        </div>
      </div>
    </footer>
  );
};
