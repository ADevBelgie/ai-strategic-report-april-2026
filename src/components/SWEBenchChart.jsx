import React, { useState } from 'react';

export const SWEBenchChart = () => {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  // Layout Constants
  const width = 1000;
  const height = 450;
  const padX = 60;
  const padY = 60;
  const graphWidth = width - padX * 2;
  const graphHeight = height - padY * 2;

  // Time Axis (Aug 2024 to Dec 2026) -> 28 months total
  // Aug 24 = 0, Dec 26 = 28
  const TOTAL_MONTHS = 28;
  const monthToRatio = (year, monthStr) => {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const idx = months.indexOf(monthStr);
    let passed = 0;
    if (year === 2024) passed = idx - 7;
    else if (year === 2025) passed = 5 + idx;
    else if (year === 2026) passed = 17 + idx;
    return passed / TOTAL_MONTHS;
  };

  const getX = (year, monthStr) => padX + monthToRatio(year, monthStr) * graphWidth;
  const getY = (score) => padY + graphHeight - (score / 100) * graphHeight;

  // Data
  const verifiedData = [
    { m: 'Aug', y: 2024, score: 33, label: "Verified Launch", note: "OpenAI releases curated 500-task subset. GPT-4o is the baseline." },
    { m: 'Oct', y: 2024, score: 49, label: "Claude 3.5 Sonnet", note: "Updated model jumps from 33.4% to 49.0%." },
    { m: 'Dec', y: 2024, score: 62, label: "Community Submissions", note: "Best scores at year end." },
    { m: 'Jan', y: 2025, score: 71, label: "o3 Era", note: "o3 announced late 2024, score approx 71% - biggest 1-month jump." },
    { m: 'May', y: 2025, score: 74, label: "Plateau Begins", note: "Devlo/TRAE hit ~70%. Little improvement across several months." },
    { m: 'Feb', y: 2026, score: 81, label: "Saturation Clustering", note: "Claude Opus 4.5 reaches 80.9%. Top 5 models separated by under 1%." },
    { m: 'Apr', y: 2026, score: 81, label: "Contamination Confirmed", note: "OpenAI audit published. Benchmark effectively retired.", warning: true }
  ];

  const proData = [
    { m: 'Oct', y: 2025, score: 23, label: "Pro Launch", note: "GPT-5 and Claude Opus 4.1 score ~23% (while scoring 70%+ on Verified)." },
    { m: 'Nov', y: 2025, score: 40, label: "No Cost Cap", note: "Scale updates leaderboard; top models break 40%." },
    { m: 'Apr', y: 2026, score: 46, label: "Current Leader", note: "Current SEAL-standardised leader. Custom scaffolding reaches 50-57%." },
    { m: 'Dec', y: 2026, score: 75, label: "Base Case Projection", note: "RL search agents address failure modes; 2-3 new model generations.", projection: true }
  ];

  const generatePath = (data) => {
    return data.map((d, i) => {
      const x = getX(d.y, d.m);
      const y = getY(d.score);
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  };

  const xTicks = [
    { label: 'Q3 24', ratio: monthToRatio(2024, 'Aug') },
    { label: 'Q1 25', ratio: monthToRatio(2025, 'Jan') },
    { label: 'Q3 25', ratio: monthToRatio(2025, 'Jul') },
    { label: 'Q1 26', ratio: monthToRatio(2026, 'Jan') },
    { label: 'Q3 26', ratio: monthToRatio(2026, 'Jul') },
    { label: 'EOY 26', ratio:monthToRatio(2026, 'Dec') },
  ];

  return (
    <div className="w-full bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 relative my-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white font-bold tracking-tight">SWE-Bench Capabilities: The Saturation Shift</h3>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-500" />
            <span className="text-xs text-slate-400 font-medium tracking-wide uppercase">Verified (Contaminated)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-indigo-500" />
            <span className="text-xs text-indigo-300 font-medium tracking-wide uppercase">Pro (Clean)</span>
          </div>
        </div>
      </div>
      
      <div className="relative w-full aspect-[2/1] min-h-[300px]">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
          {/* Grid Lines */}
          {[0, 25, 50, 75, 100].map(score => {
            const y = getY(score);
            return (
              <g key={score}>
                <line x1={padX} y1={y} x2={width-padX} y2={y} stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
                <text x={padX - 15} y={y + 4} fill="#64748b" fontSize="12" textAnchor="end" fontFamily="monospace">{score}%</text>
              </g>
            );
          })}
          
          {/* X Axis */}
          <line x1={padX} y1={height - padY} x2={width-padX} y2={height - padY} stroke="#475569" strokeWidth="2" />
          {xTicks.map((tick, i) => {
            const x = padX + tick.ratio * graphWidth;
            return (
              <g key={i}>
                <line x1={x} y1={height - padY} x2={x} y2={height - padY + 8} stroke="#475569" strokeWidth="2" />
                <text x={x} y={height - padY + 24} fill="#64748b" fontSize="12" textAnchor="middle" fontWeight="500">{tick.label}</text>
              </g>
            );
          })}

          {/* Current Timeline Zone (Apr 2026) */}
          <line 
            x1={getX(2026, 'Apr')} 
            y1={padY} 
            x2={getX(2026, 'Apr')} 
            y2={height - padY} 
            stroke="#f59e0b" 
            strokeWidth="1" 
            strokeDasharray="2 4"
            opacity="0.5" 
          />
          <text x={getX(2026, 'Apr')} y={padY - 15} fill="#f59e0b" fontSize="10" textAnchor="middle" fontWeight="bold" opacity="0.8">CURRENT</text>

          {/* Verified Path */}
          <path d={generatePath(verifiedData)} fill="none" stroke="#64748b" strokeWidth="3" opacity="0.6" strokeLinejoin="round" />
          {/* Pro Path */}
          <path d={generatePath(proData).replace(/M/, 'M').replace(/(L\s\d+\s\d+)$/, '')} fill="none" stroke="#6366f1" strokeWidth="4" className="drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
          {/* Projection Dashed Path for Pro */}
          <path d={`M ${getX(proData[2].y, proData[2].m)} ${getY(proData[2].score)} L ${getX(proData[3].y, proData[3].m)} ${getY(proData[3].score)}`} fill="none" stroke="#6366f1" strokeWidth="3" strokeDasharray="6 6" opacity="0.7"/>

          {/* Points & Interactive Zones */}
          {verifiedData.map((d, i) => {
            const pointX = getX(d.y, d.m);
            const pointY = getY(d.score);
            return (
              <g key={`v-${i}`} 
                 onMouseEnter={() => setHoveredPoint({ ...d, type: 'verified', posX: pointX, posY: pointY })}
                 onMouseLeave={() => setHoveredPoint(null)}
                 className="cursor-pointer"
              >
                <circle cx={pointX} cy={pointY} r="6" fill="#334155" stroke="#94a3b8" strokeWidth="2" className="transition-all hover:r-8 hover:fill-slate-400" />
                {d.warning && (
                  <g transform={`translate(${pointX - 30}, ${pointY - 35})`}>
                    <rect x="-10" y="-12" width="80" height="20" rx="4" fill="#fef3c7" opacity="0.9" />
                    <text x="30" y="2" fill="#b45309" fontSize="11" textAnchor="middle" fontWeight="bold">⚠️ Audit Fail</text>
                  </g>
                )}
              </g>
            );
          })}

          {proData.map((d, i) => {
            const pointX = getX(d.y, d.m);
            const pointY = getY(d.score);
            return (
              <g key={`p-${i}`}
                 onMouseEnter={() => setHoveredPoint({ ...d, type: 'pro', posX: pointX, posY: pointY })}
                 onMouseLeave={() => setHoveredPoint(null)}
                 className="cursor-pointer"
              >
                <circle cx={pointX} cy={pointY} r={d.projection ? "5" : "7"} fill="#1e1b4b" stroke={d.projection ? "#818cf8" : "#818cf8"} strokeWidth="3" strokeDasharray={d.projection ? "2 2" : "none"} className="transition-all hover:r-9 hover:fill-indigo-500" />
                {d.projection && (
                  <text x={pointX+15} y={pointY-5} fill="#818cf8" fontSize="12" fontWeight="bold">75%</text>
                )}
                {i === 2 && ( // Current Leader label
                   <text x={pointX-15} y={pointY+20} fill="#818cf8" fontSize="12" fontWeight="bold" textAnchor="end">45.9% SEAL</text>
                )}
              </g>
            );
          })}
        </svg>

        {/* Hover Tooltip Overlay (HTML based for better text wrapping) */}
        {hoveredPoint && (
          <div 
            className="absolute z-10 p-3 rounded-lg shadow-xl shadow-slate-900/50 pointer-events-none w-64 backdrop-blur-md"
            style={{
              left: `max(10px, min(calc(${hoveredPoint.posX / width * 100}% - 128px), calc(100% - 260px)))`,
              top: `calc(${hoveredPoint.posY / height * 100}% - ${hoveredPoint.posY > height/2 ? '110px' : '-15px'})`,
              backgroundColor: hoveredPoint.type === 'pro' ? 'rgba(49, 46, 129, 0.9)' : 'rgba(30, 41, 59, 0.95)',
              border: `1px solid ${hoveredPoint.type === 'pro' ? 'rgba(99, 102, 241, 0.4)' : 'rgba(100, 116, 139, 0.4)'}`,
            }}
          >
            <div className={`text-[10px] font-mono mb-1 flex items-center justify-between ${hoveredPoint.type === 'pro' ? 'text-indigo-300' : 'text-slate-400'}`}>
              <span>{hoveredPoint.m} {hoveredPoint.y}</span>
              <span className={`font-bold px-1.5 py-0.5 rounded text-[10px] ${hoveredPoint.type === 'pro' ? 'bg-indigo-500/20 text-indigo-200' : 'bg-slate-700/50 text-slate-300'}`}>
                {hoveredPoint.score}%
              </span>
            </div>
            <div className="font-bold text-white text-sm mb-1">{hoveredPoint.label}</div>
            <div className="text-xs text-slate-300 leading-relaxed">{hoveredPoint.note}</div>
          </div>
        )}
      </div>
    </div>
  );
};
