import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../../data/customBottles';
import {
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Printer,
  Truck,
  ArrowRight
} from 'lucide-react';

const STEP_ICONS = [
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Printer,
  Truck
];

export const CustomHowItWorks: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#F4FAFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E6F3FF] text-[#0B5FD6] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#3FB4F5]" />
            <span>Simple 5-Step Process</span>
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0A2A6B] tracking-tight">
            From Your Idea to Your Venue Table
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            No design experience required. We handle graphic layout, proofing, waterproof printing, and plant bottling with zero stress.
          </p>
        </div>

        {/* DESKTOP TIMELINE (Horizontal 5-step with animated connecting line) */}
        <div className="hidden lg:block relative mb-8">
          {/* Animated Connecting Water Line */}
          <div className="absolute top-10 left-[10%] right-[10%] h-1 bg-sky-200 -z-0">
            <div className="h-full bg-gradient-to-r from-[#0B5FD6] via-[#3FB4F5] to-emerald-400 w-full animate-pulse" />
          </div>

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const IconComp = STEP_ICONS[idx];
              return (
                <div
                  key={step.step}
                  className="bg-white rounded-3xl p-5 border border-sky-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center group"
                >
                  {/* Step Bubble */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#0A2A6B] to-[#0B5FD6] text-white flex items-center justify-center shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform mb-4 relative">
                    <IconComp className="w-7 h-7 text-[#7FD8FF]" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-emerald-500 text-white font-bold text-[11px] flex items-center justify-center border-2 border-white shadow-sm">
                      {step.step}
                    </span>
                  </div>

                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0B5FD6] bg-sky-50 px-2 py-0.5 rounded-full mb-1">
                    {step.timeframe}
                  </span>

                  <h3 className="font-display font-bold text-sm text-[#0A2A6B] mt-1">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE & TABLET TIMELINE (Vertical with continuous left water line) */}
        <div className="lg:hidden relative pl-8 sm:pl-10 space-y-6 max-w-lg mx-auto">
          {/* Continuous Vertical Water Line */}
          <div className="absolute left-3.5 sm:left-4 top-4 bottom-4 w-1 bg-gradient-to-b from-[#0B5FD6] via-[#3FB4F5] to-emerald-400 rounded-full" />

          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const IconComp = STEP_ICONS[idx];
            return (
              <div
                key={step.step}
                className="relative bg-white rounded-2xl p-5 border border-sky-100 shadow-sm"
              >
                {/* Step Marker on the line */}
                <div className="absolute -left-8 sm:-left-10 top-4 w-8 h-8 rounded-full bg-[#0A2A6B] text-white font-bold text-xs flex items-center justify-center border-2 border-white shadow-md">
                  {step.step}
                </div>

                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#0B5FD6] flex items-center justify-center">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-bold text-sm text-[#0A2A6B]">
                      {step.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-extrabold text-[#0B5FD6] bg-sky-50 px-2 py-0.5 rounded-full shrink-0">
                    {step.timeframe}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pl-10">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
