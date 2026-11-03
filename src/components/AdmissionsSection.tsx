import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { SCHOOL_DATA } from '../config/schoolData';

export const AdmissionsSection: React.FC = () => {
  const { admissions, schoolName, address } = SCHOOL_DATA;

  return (
    <section
      id="admissions"
      aria-labelledby="admissions-heading"
      className="py-20 bg-[#FAF5F2] border-b border-[#E5D5D0]"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="rounded-2xl bg-[#7A1215] text-[#FFFFFF] p-12 border-2 border-[#560B0E] shadow-sm">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-8 space-y-3.5">
              <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#FBBF24]">
                <FileText className="w-4 h-4 text-[#FBBF24]" aria-hidden="true" />
                <span>{admissions.sectionLabel} · {schoolName}</span>
              </div>

              <h2
                id="admissions-heading"
                className="font-display text-4xl font-bold text-[#FFFFFF] tracking-tight"
              >
                {admissions.heading}
              </h2>

              <div className="pt-1">
                <p className="text-lg font-bold text-[#FBBF24]">
                  {admissions.description}
                </p>
                <p className="text-base font-medium text-[#FFFFFF] mt-2 max-w-2xl leading-relaxed">
                  Official admission schedules, grade eligibility guidelines, and fee details for {schoolName} ({address}) are currently marked <strong className="text-[#FBBF24] font-bold">{admissions.description}</strong>. Please reach out via our contact section for direct updates from the school office.
                </p>
              </div>
            </div>

            <div className="col-span-4 flex justify-end">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 text-sm font-bold text-[#7A1215] bg-[#FFFFFF] rounded-lg hover:bg-[#FBBF24] hover:text-[#18181B] active:scale-[0.99] transition-all duration-200 whitespace-nowrap shrink-0 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFFFFF]"
              >
                <span>{admissions.ctaLabel}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
