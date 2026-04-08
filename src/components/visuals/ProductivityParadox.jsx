import React from 'react';
import { StatCard } from '../shared';

const ProductivityParadox = () => {
  return (
    <div className="my-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <p className="text-[10px] tracking-[0.2em] uppercase text-slate-500 font-bold">
          The Productivity Paradox
        </p>
        <h3 className="text-2xl font-black text-white tracking-tight">
          Why the inner track is so far from the outer track
        </h3>
      </div>

      {/* Two stat panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {/* Left — muted, expectation */}
        <div className="bg-slate-900/40 border border-slate-800/50 rounded-2xl p-8 text-center relative overflow-hidden group hover:border-slate-700/50 transition-colors">
          <p className="text-[10px] tracking-[0.15em] uppercase text-slate-500 mb-6 font-bold">
            What executives expect
          </p>
          <div className="text-7xl font-black text-slate-700 tracking-tighter mb-4 transition-colors group-hover:text-slate-600">
            +25%
          </div>
          <p className="text-sm text-slate-400 leading-relaxed max-w-[200px] mx-auto">
            Expected productivity improvement from AI adoption
          </p>
          <div className="mt-6 text-[9px] tracking-widest uppercase text-slate-600">
            Executive Surveys & ESG Reports
          </div>
        </div>

        {/* Right — emerald, reality */}
        <div className="bg-slate-900/60 border border-emerald-500/20 rounded-2xl p-8 text-center relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
          {/* Emerald ambient glow */}
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none group-hover:animate-pulse" />
          
          <p className="text-[10px] tracking-[0.15em] uppercase text-emerald-500/60 mb-6 font-bold">
            What the data shows
          </p>
          <div className="text-7xl font-black text-emerald-400 tracking-tighter mb-4 shadow-emerald-500/10 transition-transform group-hover:scale-105 duration-500">
            +2%
          </div>
          <p className="text-sm text-slate-300 leading-relaxed max-w-[220px] mx-auto">
            Actual increase per 25% AI adoption. This reveals a stark market bifurcation: the 2027 autonomy gains are concentrated in "AI-native" organisations using engineered agentic systems.
          </p>
          <div className="mt-6 text-[9px] tracking-widest uppercase text-emerald-500/40 font-bold">
            Google DORA 2024 · Empirical Data
          </div>
        </div>
      </div>

      {/* Dividing line + MIT data */}
      <div className="pt-12 border-t border-slate-800/50 mx-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 95% */}
          <div className="text-center md:text-right md:border-r md:border-slate-800/50 md:pr-12 space-y-2">
            <div className="text-5xl font-black text-slate-700 tracking-tighter">95%</div>
            <p className="text-sm text-slate-400 leading-relaxed">
              of enterprise GenAI pilots show <br className="hidden md:block" />
              <span className="text-rose-500/60 font-semibold tracking-tight">no measurable P&L impact</span>
            </p>
            <p className="text-[9px] tracking-widest uppercase text-slate-600 font-bold">
              MIT Project NANDA · July 2025
            </p>
          </div>

          {/* 5% */}
          <div className="text-center md:text-left space-y-2">
            <div className="text-5xl font-black text-emerald-400 tracking-tighter">5%</div>
            <p className="text-sm text-slate-300 leading-relaxed">
              extract measurable value — <br className="hidden md:block" />
              <span className="text-emerald-400 font-semibold tracking-tight">millions in annual savings</span>
            </p>
            <p className="text-[9px] tracking-widest uppercase text-emerald-500/40 font-bold">
              Top-Tier Implementation Tier
            </p>
          </div>
        </div>

        {/* Conclusion line */}
        <div className="mt-12 pt-8 border-t border-slate-900 text-center">
          <p className="text-sm text-slate-500 italic font-medium tracking-tight">
            "The gap is not a model problem. It is an <span className="text-indigo-400 not-italic font-bold">architecture problem</span>."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductivityParadox;
