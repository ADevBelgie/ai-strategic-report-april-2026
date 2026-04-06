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

        {/* Connecting Line (Upper) - Solid structural pipe overlap */}
        <div className="flex justify-center -my-1 relative z-0">
          <div className="w-0.5 h-16 bg-slate-700/60 shadow-[0_0_8px_rgba(51,65,85,0.4)]"></div>
        </div>

        {/* Mid Tier — The Compressed Middle (Subordinate - Dimmed Further) */}
        <div className="flex flex-col items-center relative py-4 opacity-70 transition-all hover:opacity-100 z-10">
          <div className="w-40 h-14 border border-dashed border-slate-700 bg-slate-950/50 rounded-xl flex items-center justify-center group shadow-inner shadow-black/20">
            <span className="text-slate-400 font-bold tracking-widest uppercase text-[12px]">Compressed Middle</span>
          </div>
          <div className="absolute left-[calc(100%+0.5rem)] md:left-[calc(50%+6rem)] top-1/2 -translate-y-1/2 hidden sm:block whitespace-nowrap">
            <p className="text-[12px] text-slate-300 font-bold uppercase tracking-widest leading-[1.1]">
              Coordination <br /> & Synthesis <br /> <span className="text-rose-500/50 line-through">Squeezed</span>
            </p>
          </div>
        </div>

        {/* Connecting Line (Lower) - Structural pipe overlap */}
        <div className="flex justify-center -my-1 relative z-0">
          <div className="w-0 border-l-2 border-dashed border-rose-500/40 h-16 bg-transparent"></div>
        </div>

        {/* Junior Tier — The Structurally Removed Layer (Primary Signal: Striking Collapse) */}
        <div className="flex flex-col items-center relative z-10 w-full mt-2">
          
          {/* Ghost outline showing what WAS there (The V1 stable base) - Synchronized with top tier width */}
          <div className="absolute top-0 inset-x-0 mx-auto w-5/6 max-w-lg h-32 border-2 border-slate-800/40 rounded-2xl -z-20 border-dashed opacity-50 hidden sm:block" />
          
          {/* Striking Background Layer (SVG Collapsing Pyramid) */}
          <div className="absolute inset-x-0 mx-auto w-5/6 max-w-lg h-32 top-0 bottom-0 -z-10 hidden sm:block">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              {/* The tapering polygon matching the 'collapsing base' metaphor */}
              <polygon 
                points="15,0 85,0 60,100 40,100" 
                fill="url(#collapseGradient)" 
                stroke="rgba(244,63,94,0.4)" 
                strokeWidth="0.5" 
                strokeDasharray="2,2" 
              />
              <defs>
                <linearGradient id="collapseGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(244,63,94,0.15)" />
                  <stop offset="100%" stopColor="rgba(244,63,94,0.02)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute inset-x-0 mx-auto w-full h-full top-0 bottom-0 bg-gradient-to-b from-rose-500/10 to-transparent -z-10 sm:hidden border-t border-dashed border-rose-500/50 rounded-t-xl" />

          {/* Text Layer (Primary Impact) */}
          <div className="flex flex-col items-center justify-center h-16 z-10 px-4 mt-2">
            <span className="text-rose-500 font-black tracking-widest uppercase text-[15px] drop-shadow-[0_0_8px_rgba(244,63,94,0.6)] whitespace-nowrap text-center leading-tight">
              Removal in<br className="sm:hidden" /> Progress
            </span>
            <span className="text-[10px] text-rose-500/60 font-bold uppercase tracking-tighter mt-1 hidden sm:block">Structural Contraction</span>
          </div>
          
          <div className="mt-3 flex gap-4 pb-6">
             <div className="text-[11px] text-rose-500/80 font-bold uppercase px-3 py-1.5 border border-rose-500/30 rounded tracking-[0.1em] bg-rose-500/10 backdrop-blur-sm">Postings: -67%</div>
             <div className="text-[11px] text-rose-500/80 font-bold uppercase px-3 py-1.5 border border-rose-500/30 rounded tracking-[0.1em] bg-rose-500/10 backdrop-blur-sm">Jobs: -27.5%</div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center max-w-2xl px-6">
        <div className="space-y-6 px-8 py-8 bg-slate-900/60 border border-slate-800/80 rounded-3xl shadow-2xl">
          <p className="text-lg md:text-xl text-slate-200 font-black italic leading-tight tracking-tight">
            "The top is growing. The middle is being compressed. The bottom has been structurally removed."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-800/80">
             <div className="flex flex-col items-center">
               <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-2">Growth</span>
               <div className="flex flex-col items-center gap-1">
                 <span className="text-[12px] text-emerald-400 font-bold">denoise.digital synthesis</span>
                 <span className="text-[11px] text-slate-500 italic">+40% senior AI-role salaries</span>
               </div>
             </div>
             <div className="flex flex-col items-center border-y md:border-y-0 md:border-x border-slate-800/80 py-4 md:py-0">
               <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-2">Compression</span>
               <div className="flex flex-col items-center gap-1">
                 <span className="text-[12px] text-slate-400 font-bold">Harvard Hosseini & Lichtinger</span>
                 <span className="text-[11px] text-slate-500 italic">Seniority-biased tech change</span>
               </div>
             </div>
             <div className="flex flex-col items-center">
               <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-2">Removal</span>
               <div className="flex flex-col items-center gap-1 text-center">
                 <span className="text-[12px] text-rose-400 font-bold">AlterSquare + BLS + Stanford</span>
                 <span className="text-[11px] text-slate-500 italic">(-67% Postings / -20% Ages 22–25)</span>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarbellConcept;
