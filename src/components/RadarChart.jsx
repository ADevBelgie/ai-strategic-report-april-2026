import React, { useState } from 'react';
import { Brain, Terminal, Database, Lightbulb, Network, Shield } from 'lucide-react';

const RadarChart = () => {
  const [viewMode, setViewMode] = useState('apr2026');
  const [reliabilityDomain, setReliabilityDomain] = useState('general');

  const reliabilityByDomain = {
    general: { 
      standard: 35, engineered: 82, projection: 94,
      tooltip: "Reliability 82 — Best-practice RAG deployments on structured enterprise tasks achieve under 1% hallucination on grounded summarisation (Vectara HHEM, 2026). Score = 100 minus hallucination rate."
    },
    medical: { 
      standard: 36, engineered: 57, projection: 72,
      tooltip: "Reliability 57 — Best mitigation (structured RAG on MEDLINE) reduces hallucination from 64% to 43% in clinical settings (MDPI Electronics, Oct 2025)."
    },
    legal: { 
      standard: 12, engineered: 45, projection: 58,
      tooltip: "Reliability 45 — High variance (69-88% hallucination base). Regulatory and legal-grade reliability remains a structural barrier. Courts imposing sanctions for unverified AI filings (Gartner 2026)."
    },
    financial: { 
      standard: 31, engineered: 68, projection: 82,
      tooltip: "Reliability 68 — Strongest ROI signal and mature RAG adoption in risk-governed sector. High requirement for auditable decision chains."
    }
  };

  // V2 data: 6 dimensions, scored 0-100
  const metrics = [
    { key: 'reasoning', label: 'REASONING', icon: Brain, angle: -90 },
    { key: 'execution', label: 'EXECUTION', icon: Terminal, angle: -30 },
    { key: 'memory', label: 'MEMORY', icon: Database, angle: 30 },
    { key: 'confidencecalibration', label: 'CONFIDENCE CALIBRATION', icon: Lightbulb, angle: 90, tooltip: "The ability to accurately signal uncertainty (metacognition: calibration vs sensitivity)." },
    { key: 'coherence', label: 'COHERENCE', icon: Network, angle: 150 },
    { key: 'reliability', label: 'RELIABILITY (domain-dependent)', icon: Shield, angle: 210, tooltip: reliabilityByDomain[reliabilityDomain].tooltip },
  ];

  const data = {
    standard: {
      label: 'Typical Deployment',
      color: '#6366f1',
      values: { 
        reasoning: 58, execution: 46, memory: 47, confidencecalibration: 62, coherence: 45, 
        reliability: reliabilityByDomain[reliabilityDomain].standard 
      },
      desc: 'What most organisations are actually running today — the 95% that MIT\'s GenAI Divide found seeing no measurable P&L impact. Raw API calls, no memory infrastructure, no verification loops. Base model performance on most benchmarks.'
    },
    engineered: {
      label: 'Best System Today',
      color: '#34d399',
      values: { 
        reasoning: 75, execution: 65, memory: 95, confidencecalibration: 78, coherence: 75, 
        reliability: reliabilityByDomain[reliabilityDomain].engineered 
      },
      desc: 'What the best-engineered agent systems achieve today with full tool access, retrieval architecture, and memory infrastructure. This is the whole-system score — model plus scaffold plus engineering — not a base model number. The gap between the inner and outer polygon is the engineering opportunity that narrows as inference costs fall.'
    },
    projection: {
      label: '2027 Base Case',
      color: '#f59e0b',
      values: { 
        reasoning: 90, execution: 82, memory: 96, confidencecalibration: 88, coherence: 90, 
        reliability: reliabilityByDomain[reliabilityDomain].projection 
      },
      desc: 'Where Typical Deployment lands by mid-to-late 2027 (~60% probability). Speculative. Execution crosses 80% on contamination-resistant benchmarks. Memory and coherence become table-stakes features as MCP and framework RAG mature. Reliability convergence arrives for grounded enterprise tasks. Reasoning advances on ARC-AGI-3 via RL approaches.'
    }
  };

  const center = 150;
  const radius = 105;

  const valueToPoint = (val, angleDeg) => {
    const angleRad = (Math.PI / 180) * angleDeg;
    const r = (val / 100) * radius;
    return { x: center + r * Math.cos(angleRad), y: center + r * Math.sin(angleRad) };
  };

  const getPoints = (values) => {
    return metrics.map(m => {
      const p = valueToPoint(values[m.key], m.angle);
      return `${p.x},${p.y}`;
    }).join(' ');
  };

  const views = {
    standard: { polygons: ['standard'], label: 'Typical Deployment' },
    apr2026: { polygons: ['standard', 'engineered'], label: 'April 2026 (Two Realities)' },
    projection: { polygons: ['projection'], label: '2027 Base Case' },
  };

  const activeView = views[viewMode];
  const primaryData = viewMode === 'apr2026' ? data.engineered : data[activeView.polygons[0]];

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start bg-slate-900/50 p-6 lg:p-8 rounded-xl border border-slate-700">
      {/* Left: Controls */}
      <div className="flex-1 space-y-6 w-full">
        <div>
          <div className="flex justify-between items-end mb-5">
            <h3 className="text-2xl font-bold text-white">Capability Radar</h3>
            <div className="text-right">
              <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Reliability Domain</div>
              <div className="flex gap-1">
                {[
                  { id: 'general', label: 'Gen' },
                  { id: 'medical', label: 'Med' },
                  { id: 'legal', label: 'Law' },
                  { id: 'financial', label: 'Fin' },
                ].map(d => (
                  <button key={d.id} onClick={() => setReliabilityDomain(d.id)}
                    className={`px-2 py-0.5 text-[9px] rounded uppercase font-bold transition-all border ${reliabilityDomain === d.id ? 'bg-slate-700 border-indigo-500 text-indigo-400' : 'border-slate-800 text-slate-500 hover:text-slate-300'}`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Toggle buttons */}
          <div className="flex gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700/50 mb-6">
            {[
              { key: 'standard', label: 'Typical' },
              { key: 'apr2026', label: 'Apr 2026 Gap' },
              { key: 'projection', label: '2027 Base Case' },
            ].map(v => (
              <button key={v.key} onClick={() => setViewMode(v.key)}
                className={`flex-1 px-3 py-2 text-xs rounded-lg font-medium transition-all ${viewMode === v.key ? 'bg-indigo-500 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-700/50'}`}
              >
                {v.label}
              </button>
            ))}
          </div>

          {/* Description */}
          <div className="bg-slate-800/80 p-4 rounded-lg border border-slate-700 shadow-inner">
            <p className="text-sm text-slate-300 leading-relaxed">"{primaryData.desc}"</p>
          </div>

          {/* Legend for two-polygon mode */}
          {viewMode === 'apr2026' && (
            <div className="flex gap-6 mt-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-indigo-500" /> <span className="text-slate-400">Typical Deployment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-400" /> <span className="text-slate-400">Best System Today</span>
              </div>
            </div>
          )}
        </div>

        {/* Metric values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {metrics.map((m) => {
            const val = primaryData.values[m.key];
            const standardVal = viewMode === 'apr2026' ? data.standard.values[m.key] : null;
            return (
              <div key={m.key} className="flex items-center justify-between group p-2.5 hover:bg-slate-800/50 rounded-lg transition-colors border border-transparent hover:border-slate-700/50">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-slate-800 text-slate-400 group-hover:text-white transition-colors">
                    <m.icon size={14} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider" title={m.tooltip}>
                    {m.key === 'reliability' ? `${m.label} (${reliabilityDomain})` : m.label}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {standardVal !== null && (
                    <span className="font-mono text-xs text-indigo-400">{standardVal}%</span>
                  )}
                  {standardVal !== null && <span className="text-slate-600">→</span>}
                  <span className={`font-mono text-sm font-bold ${val > 80 ? 'text-emerald-400' : 'text-white'}`}>{val}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right: SVG Radar */}
      <div className="relative w-full max-w-[340px] aspect-square flex-shrink-0 mx-auto lg:mx-0">
        <svg viewBox="0 0 300 300" className="w-full h-full drop-shadow-2xl">
          {/* Background rings */}
          {[20, 40, 60, 80, 100].map(r => (
            <circle key={r} cx={center} cy={center} r={r * radius / 100} fill="none" stroke="#334155" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
          ))}

          {/* Axis lines + labels */}
          {metrics.map((m, i) => {
            const pEnd = valueToPoint(100, m.angle);
            const pLabel = valueToPoint(118, m.angle);
            return (
              <g key={i}>
                <line x1={center} y1={center} x2={pEnd.x} y2={pEnd.y} stroke="#475569" strokeWidth="0.5" opacity="0.4" />
                <text x={pLabel.x} y={pLabel.y} textAnchor="middle" dominantBaseline="middle" fill="#64748b" fontSize="6.5" fontWeight="700" className="uppercase" title={m.tooltip}>
                  {m.label.includes(' ') ? m.label.split(' ').map((w, wi) => (
                    <tspan key={wi} x={pLabel.x} dy={wi === 0 ? 0 : 8}>{w}</tspan>
                  )) : m.label}
                </text>
              </g>
            );
          })}

          {/* Polygons */}
          {activeView.polygons.map(key => {
            const d = data[key];
            const isDashed = key === 'projection';
            return (
              <g key={key}>
                <polygon points={getPoints(d.values)} fill={d.color} fillOpacity="0.15" stroke={d.color} strokeWidth="2" strokeDasharray={isDashed ? "6 3" : "none"} className="radar-polygon" />
                {metrics.map((m, i) => {
                  const p = valueToPoint(d.values[m.key], m.angle);
                  return <circle key={i} cx={p.x} cy={p.y} r="3" fill={d.color} stroke="#0f172a" strokeWidth="2" className="radar-dot" />;
                })}
              </g>
            );
          })}

          {/* Percentage labels at rings */}
          {[25, 50, 75, 100].map(v => (
            <text key={v} x={center + 4} y={center - (v / 100) * radius + 3} fill="#475569" fontSize="7" fontWeight="500">{v}%</text>
          ))}
        </svg>

        {/* Projection warning */}
        {viewMode === 'projection' && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] text-amber-400/70 font-medium bg-slate-900/80 px-3 py-1 rounded-full">
            ⚠ Speculative — ~60% probability
          </div>
        )}
      </div>
    </div>
  );
};

export default RadarChart;
