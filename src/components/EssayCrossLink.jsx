import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

const EssayCrossLink = () => {
  return (
    <div className="my-16 flex justify-center">
      <div className="max-w-2xl w-full bg-indigo-500/5 border border-indigo-500/20 rounded-2xl p-8 md:p-10 text-center shadow-xl shadow-indigo-500/5 hover:border-indigo-500/40 transition-all group">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/10 text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
          <BookOpen size={24} />
        </div>
        
        <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">
          Want to go deeper?
        </p>
        
        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4 leading-tight">
          After the Intelligence Flood
        </h3>
        
        <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 max-w-lg mx-auto font-light">
          A speculative essay on where AI takes the economy, institutions, 
          and societies over the next decade — and what the decisions made 
          in the next five years will determine.
        </p>
        
        <a 
          href="https://after-the-intelligence-flood.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          Read the Essay
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default EssayCrossLink;
