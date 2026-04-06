import React from 'react';

const YEAR_START = 2013;
const YEAR_END = 2037;
const TOTAL_YEARS = YEAR_END - YEAR_START;

const SVG_W = 1000;
const SVG_H = 340;
const MARGIN_L = 40;
const MARGIN_R = 40;
const TRACK_W = SVG_W - MARGIN_L - MARGIN_R;

const Y_CENTER = 170;
const Y_DECISIONS = 60;
const Y_CONSEQUENCES = 280;

const yx = (year) => MARGIN_L + ((year - YEAR_START) / TOTAL_YEARS) * TRACK_W;

const CONV_X1 = yx(2033);
const CONV_X2 = yx(2037);

const decisionEvents = [
  { year: 2013, label: 'CS Degrees: ~52k', sub: 'awarded annually', y: -60, anchor: 'start' },
  { year: 2023, label: 'CS Degrees: ~113k', sub: 'Doubled in 10 years', y: -60, anchor: 'middle' },
  { year: 2025.5, label: 'CS Enrollment −8.1%', sub: 'Steepest legacy decline', y: -60, anchor: 'middle', alert: true },
  { year: 2026, label: '54% stop building', sub: 'junior pipelines', y: -20, anchor: 'middle', alert: true },
];

const consequenceEvents = [
  { year: 2029.5, label: 'Graduation Gap', sub: 'First missing cohort', y: 50, anchor: 'middle' },
  { year: 2032.5, label: 'Seniority Ceiling', sub: 'No mid-level transition', y: 50, anchor: 'middle' },
  { year: 2035, label: 'Peak Orchestration', sub: 'Maximum labor demand', y: 50, anchor: 'middle', highlight: true },
];

const tickYears = [2013, 2016, 2019, 2022, 2026, 2030, 2033, 2037];

const PipelineTimeline = () => {
  return (
    <div className="my-16 space-y-10">
      <div className="max-w-2xl space-y-2">
        <p className="text-[10px] tracking-[0.2em] uppercase text-slate-500 font-bold">
          The Pipeline Time Bomb · Section 7
        </p>
        <h3 className="text-2xl font-black text-white tracking-tight">
          Structural Shortage Meets Peak Demand
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed font-medium">
          Decisions made in the 2026 labor market produce irreversible consequences in 2033. The "mental model gap" being created today is a structural risk for the coming decade.
        </p>
      </div>

      <div className="bg-slate-900/40 border border-slate-800/50 rounded-2xl p-6 md:p-10 overflow-hidden relative group">
        <div className="overflow-x-auto overflow-y-hidden pb-4 custom-scrollbar">
          <svg
            viewBox={`0 0 ${SVG_W} ${SVG_H}`}
            className="w-full min-w-[800px] h-auto block select-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Convergence zone background */}
            <rect x={CONV_X1} y={20} width={CONV_X2 - CONV_X1} height={SVG_H - 40} className="fill-amber-500/5 stroke-amber-500/20" rx={8} />

            {/* Labels in Zone */}
            <g className="font-bold text-[10px] tracking-widest uppercase fill-amber-500">
              <text x={(CONV_X1 + CONV_X2) / 2} y={Y_CENTER - 15} textAnchor="middle">Peak Demand</text>
              <text x={(CONV_X1 + CONV_X2) / 2} y={Y_CENTER + 5} textAnchor="middle">Meets</text>
              <text x={(CONV_X1 + CONV_X2) / 2} y={Y_CENTER + 25} textAnchor="middle">Shortage</text>
            </g>

            {/* Axis */}
            <line x1={MARGIN_L} y1={Y_CENTER} x2={SVG_W - MARGIN_R} y2={Y_CENTER} className="stroke-slate-800" strokeWidth={2} />
            
            {/* Track labels */}
            <text x={MARGIN_L} y={Y_DECISIONS - 15} className="fill-slate-600 font-black text-[9px] tracking-widest uppercase">Decisions</text>
            <text x={MARGIN_L} y={Y_CONSEQUENCES + 35} className="fill-slate-600 font-black text-[9px] tracking-widest uppercase">Consequences</text>

            {/* Ticks */}
            {tickYears.map((yr) => (
              <g key={yr}>
                <line x1={yx(yr)} y1={Y_CENTER - 4} x2={yx(yr)} y2={Y_CENTER + 4} className="stroke-slate-700" />
                <text x={yx(yr)} y={Y_CENTER + 20} textAnchor="middle" className="fill-slate-600 font-bold text-[9px]">{yr}</text>
              </g>
            ))}

            {/* Decision Events */}
            {decisionEvents.map((ev, i) => (
              <g key={`d-${i}`}>
                <line x1={yx(ev.year)} y1={Y_CENTER} x2={yx(ev.year)} y2={Y_CENTER + ev.y + 15} className={ev.alert ? 'stroke-rose-500/20' : 'stroke-slate-800'} strokeDasharray="4 2" />
                <circle cx={yx(ev.year)} cy={Y_CENTER} r={ev.alert ? 5 : 3} className={ev.alert ? 'fill-rose-500' : 'fill-slate-700'} />
                <text x={yx(ev.year)} y={Y_CENTER + ev.y} textAnchor={ev.anchor} className={`text-[10px] font-bold ${ev.alert ? 'fill-rose-400' : 'fill-slate-400'}`}>{ev.label}</text>
                <text x={yx(ev.year)} y={Y_CENTER + ev.y + 12} textAnchor={ev.anchor} className="text-[9px] fill-slate-600 font-medium italic">{ev.sub}</text>
              </g>
            ))}

            {/* Consequence Events */}
            {consequenceEvents.map((ev, i) => (
              <g key={`c-${i}`}>
                <line x1={yx(ev.year)} y1={Y_CENTER} x2={yx(ev.year)} y2={Y_CENTER + ev.y - 12} className={ev.highlight ? 'stroke-amber-500/20' : 'stroke-slate-800'} strokeDasharray="4 2" />
                <circle cx={yx(ev.year)} cy={Y_CENTER} r={ev.highlight ? 5 : 3} className={ev.highlight ? 'fill-amber-500' : 'fill-slate-700'} />
                <text x={yx(ev.year)} y={Y_CENTER + ev.y + 4} textAnchor={ev.anchor} className={`text-[10px] font-bold ${ev.highlight ? 'fill-amber-400' : 'fill-slate-400'}`}>{ev.label}</text>
                <text x={yx(ev.year)} y={Y_CENTER + ev.y + 16} textAnchor={ev.anchor} className="text-[9px] fill-slate-600 font-medium italic">{ev.sub}</text>
              </g>
            ))}
          </svg>
        </div>

        {/* Footer info */}
        <div className="mt-8 pt-6 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-slate-500 italic max-w-lg text-center md:text-left leading-relaxed font-medium">
            "Short-term hiring cuts made today produce structural talent bottlenecks exactly as AI orchestration arrives at the enterprise layer."
          </p>
          <div className="text-[9px] text-slate-700 font-black tracking-widest uppercase text-right whitespace-nowrap">
            Sources: NSC / CRA / AlterSquare / Denoise
          </div>
        </div>
      </div>
    </div>
  );
};

export default PipelineTimeline;
