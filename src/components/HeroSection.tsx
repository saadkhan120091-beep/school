import React from 'react';
import { ArrowRight, BookOpen, Calendar, MapPin } from 'lucide-react';
import { SCHOOL_DATA } from '../config/schoolData';
import { SchoolIllustration } from './SchoolIllustration';

export const HeroSection: React.FC = () => {
  const { hero, address, schoolName } = SCHOOL_DATA;

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative bg-gradient-to-br from-[#FDF8F5] via-[#FFFFFF] to-[#F8ECE6] border-b border-[#E5D5D0] py-20"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-12 gap-14 items-stretch">
          {/* Left Column: Core Proposition, Admissions Status & CTAs */}
          <div className="col-span-7 flex flex-col justify-center space-y-6">
            {/* High-Contrast Admissions Open Indicator with Coming Soon Dates */}
            <div className="inline-flex flex-wrap items-center gap-3 text-sm text-[#18181B]">
              <span className="inline-flex items-center gap-1.5 bg-[#8B1518] text-[#FFFFFF] px-4 py-1.5 rounded-lg font-bold shadow-xs">
                <Calendar className="w-4 h-4 text-[#FBBF24]" aria-hidden="true" />
                <span>{hero.admissionsBadgeLabel}</span>
              </span>
              <span aria-hidden="true" className="text-[#8B1518] font-bold">·</span>
              <span className="text-[#18181B] font-semibold">
                Admission Dates: <strong className="font-extrabold text-[#8B1518]">{hero.admissionDatesStatus}</strong>
              </span>
            </div>

            {/* Main Heading with Charcoal & Crimson Split */}
            <h1
              id="hero-heading"
              className="font-display text-5xl font-bold text-[#18181B] tracking-tight leading-[1.16]"
            >
              Building Bright Futures{' '}
              <span className="text-[#8B1518]">Through Quality Education</span>
            </h1>

            {/* High-Contrast Supporting Text */}
            <p className="text-lg font-medium text-[#27272A] leading-relaxed max-w-2xl">
              {hero.supportingText}
            </p>

            {/* Location Reference */}
            <div className="flex items-center gap-2 text-sm font-bold text-[#18181B]">
              <MapPin className="w-4 h-4 text-[#8B1518] shrink-0" aria-hidden="true" />
              <span>{schoolName} · {address}</span>
            </div>

            {/* Action Buttons Matching Reference Image */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 text-sm font-bold text-[#FFFFFF] bg-[#8B1518] rounded-lg hover:bg-[#560B0E] active:scale-[0.99] transition-all duration-200 whitespace-nowrap shrink-0 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1518]"
              >
                <span>{hero.primaryCtaLabel}</span>
                <ArrowRight className="w-4 h-4 text-[#FBBF24]" aria-hidden="true" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 text-sm font-bold text-[#8B1518] bg-[#FFFFFF] border-2 border-[#8B1518] rounded-lg hover:bg-[#8B1518] hover:text-[#FFFFFF] active:scale-[0.99] transition-all duration-200 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1518]"
              >
                <BookOpen className="w-4 h-4 text-current" aria-hidden="true" />
                <span>{hero.secondaryCtaLabel}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Desktop Campus Visual */}
          <div className="col-span-5 flex flex-col">
            <div className="relative flex-1 flex flex-col rounded-2xl overflow-hidden border-2 border-[#E5D5D0] bg-[#FFFFFF] shadow-sm min-h-[360px]">
              <SchoolIllustration
                variant="hero-campus"
                imageUrl={hero.heroImageUrl}
                alt={`${schoolName} Campus Architectural Preview`}
                className="flex-1 w-full h-full min-h-[250px]"
              />
              <div className="bg-[#FFFFFF] text-[#18181B] px-5 py-4 border-t border-[#E5D5D0] flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#8B1518]">
                    Official Campus Visual
                  </p>
                  <p className="text-sm font-bold text-[#18181B] truncate mt-0.5">
                    {schoolName} — {address}
                  </p>
                </div>
                <span className="text-xs font-bold text-[#8B1518] bg-[#FDF2F2] border border-[#E5D5D0] px-2.5 py-1 rounded-md whitespace-nowrap shrink-0">
                  Replaceable Visual
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
