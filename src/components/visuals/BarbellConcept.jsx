import React from 'react';

const BarbellConcept = () => {
  return (
    <div className="my-20 flex flex-col items-center">
      <div className="w-full max-w-lg space-y-0">
        {/* Senior Tier */}
        <div className="flex flex-col items-center relative group">
          {/* Emerald ambient glow */}
          <div className="absolute -inset-8 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />
          
          <div className="w-5/6 h-20 bg-slate-900 border-2 border-emerald-500/40 rounded-2xl flex flex-col items-center justify-center shadow-2xl shadow-emerald-500/10 hover:border-emerald-500/60 transition-all z-10 relative">
            <span className="text-emerald-400 font-black tracking-[0.2em] uppercase text-sm">Senior Judgment</span>
            <span className="text-[10px] text-emerald-500/60 font-bold uppercase tracking-tighter mt-1">Strategic Oversight</span>
          </div>
        </div>

        {/* Connecting Line (Upper) */}
        <div className="flex justify-center">
          <div className="w-0.5 h-16 bg-gradient-to-b from-slate-800 to-slate-900/40"></div>
        </div>

        {/* Mid Tier — The Hollow Center */}
        <div className="flex flex-col items-center relative py-2">
          <div className="w-1/3 h-14 border border-dashed border-slate-600 bg-slate-900/40 rounded-xl flex items-center justify-center group hover:bg-slate-900/60 transition-all shadow-inner shadow-black/20">
            <span className="text-slate-100 font-bold tracking-widest uppercase text-[10px] drop-shadow-sm group-hover:text-white transition-colors">Hollow Middle</span>
          </div>
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 hidden md:block">
            <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest leading-tight">
              Coordination <br /> & Synthesis <br /> <span className="text-rose-500/30 line-through">Squeezed</span>
            </p>
          </div>
        </div>

        {/* Connecting Line (Lower) */}
        <div className="flex justify-center">
          <div className="w-0.5 h-16 bg-gradient-to-t from-slate-800 to-slate-900/40"></div>
        </div>

        {/* Junior Tier — The Shrinking Execution Layer */}
        <div className="flex flex-col items-center relative">
          <div className="w-4/6 h-16 bg-slate-900 border border-slate-800 rounded-xl flex flex-col items-center justify-center shadow-lg hover:border-rose-500/40 transition-colors z-10 relative">
            <span className="text-slate-400 font-black tracking-widest uppercase text-[12px]">Junior Execution</span>
            <span className="text-[10px] text-slate-700 font-bold uppercase tracking-tighter mt-1">Automated Routine</span>
          </div>
          <div className="absolute -inset-4 border border-rose-500/10 rounded-2xl -z-10 group-hover:border-rose-500/20 transition-colors" />
        </div>
      </div>

      <div className="mt-16 text-center max-w-sm">
        <p className="text-[11px] text-slate-400 font-medium italic leading-relaxed px-4">
          "The Barbell is not just a shape—it is a filtering mechanism. Value is accumulating at the ends while the middle is being structurally evacuated."
        </p>
      </div>
    </div>
  );
};

export default BarbellConcept;
