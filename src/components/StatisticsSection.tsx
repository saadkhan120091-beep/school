import React from 'react';
import { GraduationCap, UserCheck, LayoutGrid, Award } from 'lucide-react';
import { SCHOOL_DATA, StatisticItem } from '../config/schoolData';

const STAT_ICONS: Record<StatisticItem['iconName'], React.FC<{ className?: string }>> = {
  'graduation-cap': GraduationCap,
  'user-check': UserCheck,
  'layout-grid': LayoutGrid,
  award: Award,
};

export const StatisticsSection: React.FC = () => {
  const { statistics } = SCHOOL_DATA;

  return (
    <section
      aria-labelledby="statistics-heading"
      className="py-16 bg-[#7A1215] text-[#FFFFFF] border-b border-[#560B0E]"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#FBBF24] mb-1.5">
              {statistics.sectionLabel} · <span className="text-[#FFFFFF]">Verified Institutional Figures</span>
            </p>
            <h2
              id="statistics-heading"
              className="font-display text-3xl font-bold text-[#FFFFFF] tracking-tight"
            >
              {statistics.heading}
            </h2>
          </div>
          <p className="text-sm font-semibold text-[#FDE8E8]">
            Official verified school counts and academic results will be published once finalized.
          </p>
        </div>

        {/* 4-column desktop grid on deep crimson banner */}
        <div className="grid grid-cols-4 gap-6">
          {statistics.items.map((stat) => {
            const IconComponent = STAT_ICONS[stat.iconName];
            return (
              <div
                key={stat.id}
                className="rounded-2xl bg-[#600D10] text-[#FFFFFF] p-6 border border-[#A32C30] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold uppercase tracking-wide text-[#FBBF24]">
                    {stat.label}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-[#7A1215] border border-[#FBBF24]/50 text-[#FBBF24] flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5 text-[#FBBF24]" aria-hidden="true" />
                  </div>
                </div>

                <div>
                  <p className="font-display text-2xl font-bold text-[#FFFFFF] tracking-tight tabular-nums">
                    {stat.value}
                  </p>
                  <p className="text-xs font-medium text-[#FCE7E7] mt-1 leading-snug">
                    Official {stat.label.toLowerCase()} data pending publication
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
