import React from 'react';
import { BookOpen, Users, ShieldCheck, Compass } from 'lucide-react';
import { SCHOOL_DATA, WhyChooseUsItem } from '../config/schoolData';

const ICON_MAP: Record<WhyChooseUsItem['iconName'], React.FC<{ className?: string }>> = {
  'book-open': BookOpen,
  users: Users,
  'shield-check': ShieldCheck,
  compass: Compass,
};

export const WhyChooseUsSection: React.FC = () => {
  const { whyChooseUs } = SCHOOL_DATA;

  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-heading"
      className="py-20 bg-[#FAF5F2] border-b border-[#E5D5D0]"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#8B1518] mb-2">
              {whyChooseUs.sectionLabel} · <span className="text-[#27272A]">Core Commitments</span>
            </p>
            <h2
              id="why-choose-heading"
              className="font-display text-4xl font-bold text-[#18181B] tracking-tight leading-snug"
            >
              {whyChooseUs.heading}
            </h2>
          </div>
          <p className="text-base font-medium text-[#27272A] max-w-md leading-relaxed">
            {whyChooseUs.subtitle}
          </p>
        </div>

        {/* 4-column desktop grid */}
        <div className="grid grid-cols-4 gap-6">
          {whyChooseUs.items.map((item) => {
            const IconComponent = ICON_MAP[item.iconName];
            return (
              <article
                key={item.id}
                className="group rounded-2xl bg-[#FFFFFF] border-2 border-[#E5D5D0] hover:border-[#8B1518] p-7 transition-colors duration-200 flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#8B1518] text-[#FFFFFF] flex items-center justify-center group-hover:bg-[#560B0E] transition-colors duration-200 shadow-xs">
                      <IconComponent className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-bold text-[#8B1518] tabular-nums">
                      {item.number}. Pillar
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#18181B] mb-2.5 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm font-medium text-[#27272A] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5D5D0] flex items-center justify-between text-xs font-bold text-[#8B1518]">
                  <span>{SCHOOL_DATA.shortInitials} Standard</span>
                  <span>Core Focus →</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
