import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { SCHOOL_DATA, FacilityCategory, FacilityItem } from '../config/schoolData';
import { filterFacilitiesByCategory } from '../utils/validation';
import { SchoolIllustration } from './SchoolIllustration';

const CATEGORIES: FacilityCategory[] = ['All', 'Academic & Labs', 'Campus & Athletics'];

export const FacilitiesSection: React.FC = () => {
  const { facilities } = SCHOOL_DATA;
  const [activeCategory, setActiveCategory] = useState<FacilityCategory>('All');
  const [selectedFacility, setSelectedFacility] = useState<FacilityItem | null>(null);

  const visibleFacilities = filterFacilitiesByCategory(facilities.items, activeCategory);

  return (
    <section
      id="facilities"
      aria-labelledby="facilities-heading"
      className="py-20 bg-[#FFFFFF] border-b border-[#E5D5D0]"
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Header & Interactive Filter Controls */}
        <div className="flex items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-[#8B1518] mb-2">
              {facilities.sectionLabel} · <span className="text-[#27272A]">{SCHOOL_DATA.schoolName}</span>
            </p>
            <h2
              id="facilities-heading"
              className="font-display text-4xl font-bold text-[#18181B] tracking-tight leading-snug"
            >
              {facilities.heading}
            </h2>
            <p className="mt-2 text-base font-medium text-[#27272A] leading-relaxed">
              {facilities.subtitle}
            </p>
          </div>

          {/* Interactive Segmented Filter Control */}
          <div
            role="group"
            aria-label="Filter facilities by category"
            className="inline-flex flex-wrap items-center gap-1.5 p-1.5 bg-[#FAF5F2] border-2 border-[#E5D5D0] rounded-xl"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1518] ${
                    isActive
                      ? 'bg-[#8B1518] text-[#FFFFFF] shadow-2xs'
                      : 'text-[#18181B] hover:text-[#8B1518] hover:bg-[#FFFFFF]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* 6 Replaceable Facility Cards — 3-column desktop grid */}
        <div className="grid grid-cols-3 gap-7">
          {visibleFacilities.map((facility) => (
            <article
              key={facility.id}
              className="group rounded-2xl bg-[#FFFFFF] border-2 border-[#E5D5D0] hover:border-[#8B1518] overflow-hidden flex flex-col justify-between transition-colors duration-200 shadow-2xs"
            >
              <div>
                <div className="aspect-4/3 w-full overflow-hidden border-b border-[#E5D5D0]">
                  <SchoolIllustration
                    variant={facility.illustrationType}
                    imageUrl={facility.imageUrl}
                    alt={`${facility.title} at ${SCHOOL_DATA.schoolName}`}
                    className="w-full h-full"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-[#8B1518] font-bold mb-2">
                    <span className="truncate">{facility.category}</span>
                    <span>·</span>
                    <span className="text-[#3F3F46]">Replaceable Visual</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#18181B] mb-1.5 leading-snug">
                    {facility.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#27272A] whitespace-nowrap">
                    Description: <span className="text-[#8B1518] font-bold">{facility.description}</span>
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedFacility(facility)}
                  className="h-9 px-4 text-xs font-bold text-[#FFFFFF] bg-[#8B1518] hover:bg-[#560B0E] rounded-lg transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1518]"
                >
                  View Facility Status →
                </button>
                <span className="text-xs font-bold text-[#3F3F46]">
                  {facility.description}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Facility Inspection Modal portaled to document.body */}
        {selectedFacility &&
          typeof document !== 'undefined' &&
          createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="facility-modal-title"
              className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000]/60 p-4"
            >
              <div className="bg-[#FFFFFF] border-2 border-[#E5D5D0] rounded-2xl max-w-lg w-full overflow-hidden shadow-md">
                <div className="aspect-16/9 w-full border-b border-[#E5D5D0]">
                  <SchoolIllustration
                    variant={selectedFacility.illustrationType}
                    imageUrl={selectedFacility.imageUrl}
                    alt={selectedFacility.title}
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#8B1518] font-bold">
                    <span>
                      {selectedFacility.category} · {SCHOOL_DATA.shortInitials}
                    </span>
                    <span className="font-bold text-[#8B1518]">
                      {selectedFacility.description}
                    </span>
                  </div>
                  <h3 id="facility-modal-title" className="font-display text-2xl font-bold text-[#18181B]">
                    {selectedFacility.title}
                  </h3>
                  <p className="text-sm font-medium text-[#27272A] leading-relaxed">
                    Detailed specifications and official photography for the{' '}
                    <strong>{selectedFacility.title}</strong> at {SCHOOL_DATA.schoolName} are marked{' '}
                    <strong>{selectedFacility.description}</strong>. You can easily replace this visual in{' '}
                    <code>src/config/schoolData.ts</code> once official photographs are available.
                  </p>
                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedFacility(null)}
                      className="h-10 px-5 text-xs font-bold text-[#FFFFFF] bg-[#8B1518] rounded-lg hover:bg-[#560B0E] transition-colors duration-200 cursor-pointer"
                    >
                      Close Preview
                    </button>
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )}
      </div>
    </section>
  );
};

