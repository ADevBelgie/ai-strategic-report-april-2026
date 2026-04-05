import React from 'react';
import { useReadingMode } from '../context/ReadingModeContext';

const ReadingModeToggle = () => {
  const { mode, setMode } = useReadingMode();

  return (
    <div className="flex items-center bg-slate-900/50 border border-slate-700/50 rounded-full p-1 w-[200px] relative overflow-hidden shadow-inner">
      {/* Sliding Background */}
      <div 
        className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-indigo-600 transition-all duration-300 ease-out z-0 ${
          mode === 'expert' ? 'left-1' : 'left-[calc(50%+1px)]'
        }`}
      />
      
      {/* Expert Label */}
      <button
        onClick={() => setMode('expert')}
        className={`flex-1 text-center py-1.5 text-xs font-bold uppercase tracking-wider relative z-10 transition-colors duration-200 ${
          mode === 'expert' ? 'text-white' : 'text-slate-500 hover:text-slate-300'
        }`}
        aria-pressed={mode === 'expert'}
      >
        Expert
      </button>

      {/* Essentials Label */}
      <button
        onClick={() => setMode('essentials')}
        className={`flex-1 text-center py-1.5 text-xs font-bold uppercase tracking-wider relative z-10 transition-colors duration-200 ${
          mode === 'essentials' ? 'text-white' : 'text-slate-500 hover:text-slate-300'
        }`}
        aria-pressed={mode === 'essentials'}
      >
        Essentials
      </button>
    </div>
  );
};

export default ReadingModeToggle;
