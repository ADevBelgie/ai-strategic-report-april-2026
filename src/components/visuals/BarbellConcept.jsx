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

        {/* Mid Tier — The Compressed Middle (Subordinate) */}
        <div className="flex flex-col items-center relative py-2 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="w-1/3 h-14 border border-dashed border-slate-700 bg-transparent rounded-xl flex items-center justify-center group shadow-inner shadow-black/10">
            <span className="text-slate-500 font-bold tracking-widest uppercase text-[10px]">Compressed Middle</span>
          </div>
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 hidden md:block">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-tight">
              Coordination <br /> & Synthesis <br /> <span className="text-rose-500/20 line-through">Squeezed</span>
            </p>
          </div>
        </div>

        {/* Connecting Line (Lower) */}
        <div className="flex justify-center">
          <div className="w-0.5 h-16 bg-gradient-to-t from-slate-800 to-transparent"></div>
        </div>

        {/* Junior Tier — The Structurally Removed Layer (Primary Signal: Collapsed Bottom) */}
        <div className="flex flex-col items-center relative">
          {/* Tapered shape (Collapsing Pyramid) */}
          <div 
            className="w-1/4 h-12 bg-slate-900 border border-dashed border-rose-500/40 rounded-t-lg flex flex-col items-center justify-center shadow-lg transition-all z-10 relative opacity-100 group-hover:bg-rose-500/5"
            style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)' }}
          >
            <span className="text-rose-400 font-black tracking-widest uppercase text-[9px] drop-shadow-sm">Removal in Progress</span>
          </div>
          
          {/* Ghost outline showing what WAS there */}
          <div className="absolute top-0 w-4/6 h-12 border border-slate-800/30 rounded-xl -z-20 border-dashed" />
          
          <div className="mt-4 flex gap-4">
             <div className="text-[8px] text-slate-600 font-bold uppercase px-1.5 py-0.5 border border-slate-800/50 rounded tracking-tighter">Postings: -67%</div>
             <div className="text-[8px] text-slate-600 font-bold uppercase px-1.5 py-0.5 border border-slate-800/50 rounded tracking-tighter">Jobs: -27.5%</div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center max-w-md">
        <div className="space-y-4 px-6 py-4 bg-slate-900/40 border border-slate-800/50 rounded-2xl">
          <p className="text-[12px] text-slate-200 font-semibold italic leading-relaxed">
            "The top is growing. The middle is being compressed. The bottom has been structurally removed."
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 border-t border-slate-800/50 pt-3">
             <div className="flex flex-col items-center">
               <span className="text-[7px] text-slate-500 font-black uppercase tracking-[0.15em]">Top Growth</span>
               <span className="text-[8px] text-emerald-500/60 font-bold">denoise.digital synthesis</span>
             </div>
             <div className="w-px h-4 bg-slate-800 hidden sm:block" />
             <div className="flex flex-col items-center">
               <span className="text-[7px] text-slate-500 font-black uppercase tracking-[0.15em]">Middle Compression</span>
               <span className="text-[8px] text-slate-600 font-bold italic">Inferred from Harvard (H&L)</span>
             </div>
             <div className="w-px h-4 bg-slate-800 hidden sm:block" />
             <div className="flex flex-col items-center">
               <span className="text-[7px] text-slate-500 font-black uppercase tracking-[0.15em]">Bottom Removal</span>
               <span className="text-[8px] text-rose-500/60 font-bold">AlterSquare + BLS + Stanford</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarbellConcept;
