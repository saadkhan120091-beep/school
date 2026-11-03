import React, { useState } from 'react';
import { BookOpen, Target, Eye, MessageSquareQuote } from 'lucide-react';
import { SCHOOL_DATA } from '../config/schoolData';

export const AboutSection: React.FC = () => {
  const { about } = SCHOOL_DATA;

  const pillars = [
    { ...about.introduction, icon: BookOpen },
    { ...about.mission, icon: Target },
    { ...about.vision, icon: Eye },
    { ...about.principalMessage, icon: MessageSquareQuote },
  ];

  const [selectedId, setSelectedId] = useState<string>(pillars[0].id);
  const activePillar = pillars.find((p) => p.id === selectedId) || pillars[0];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 bg-[#FFFFFF] border-b border-[#E5D5D0]"
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-bold uppercase tracking-wider text-[#8B1518] mb-2">
            {about.sectionLabel} · <span className="text-[#27272A]">{SCHOOL_DATA.schoolName}</span>
          </p>
          <h2
            id="about-heading"
            className="font-display text-4xl font-bold text-[#18181B] tracking-tight leading-snug"
          >
            {about.heading}
          </h2>
        </div>

        {/* Four Institutional Pillar Cards — 4-column desktop layout */}
        <div className="grid grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            const isSelected = pillar.id === selectedId;
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setSelectedId(pillar.id)}
                aria-pressed={isSelected}
                className={`text-left rounded-2xl p-6 transition-all duration-200 cursor-pointer border-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1518] ${
                  isSelected
                    ? 'border-[#8B1518] bg-[#FDF6F3] shadow-xs'
                    : 'border-[#E5D5D0] bg-[#FFFFFF] hover:border-[#8B1518]/60'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 ${
                      isSelected
                        ? 'bg-[#8B1518] text-[#FFFFFF]'
                        : 'bg-[#FCE8E8] text-[#8B1518]'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold text-[#3F3F46]">
                    Official Statement
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-[#18181B] mb-1.5 leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-sm font-bold text-[#8B1518]">
                  {pillar.summary}
                </p>
              </button>
            );
          })}
        </div>

        {/* Highlighted Institutional Notice Panel */}
        <div className="mt-8 rounded-2xl bg-[#FAF5F2] border-2 border-[#E5D5D0] p-8 flex items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-[#8B1518]">
              Selected Section · {activePillar.title}
            </p>
            <h3 className="font-display text-xl font-bold text-[#18181B]">
              {activePillar.title}: <span className="font-bold text-[#8B1518]">{activePillar.summary}</span>
            </h3>
            <p className="text-sm font-medium text-[#27272A] leading-relaxed">
              Official documentation for {activePillar.title.toLowerCase()} at {SCHOOL_DATA.schoolName} ({SCHOOL_DATA.address}) is currently being prepared and will be published here soon.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-11 px-6 text-xs font-bold text-[#FFFFFF] bg-[#8B1518] rounded-lg hover:bg-[#560B0E] transition-colors duration-200 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1518]"
          >
            Inquire at School Office
          </a>
        </div>
      </div>
    </section>
  );
};
