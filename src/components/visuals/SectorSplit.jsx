import React from 'react';

const WorkforcePyramid = ({ tiers, colorClass }) => {
  return (
    <div className="mt-8 space-y-4">
      <p className="text-[10px] tracking-[0.12em] uppercase text-slate-600 font-black text-center">
        Workforce shape · 2026
      </p>
      <div className="flex flex-col items-center gap-1.5 w-full max-w-[160px] mx-auto">
        {tiers.map((tier, i) => (
          <div key={i} className="flex items-center w-full gap-3 group/tier">
            <div 
              className={`h-4 rounded-sm transition-all duration-700 ${colorClass} shadow-sm`}
              style={{ 
                width: `${tier.width}%`,
                opacity: tier.opacity ?? (1 - i * 0.25)
              }} 
            />
            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-tighter transition-colors group-hover/tier:text-slate-300">
              {tier.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const sectors = [
  {
    id: 'startup',
    badge: 'Limited Hiring',
    badgeColor: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
    pyramidColor: 'bg-rose-500',
    title: 'Tech-native · Startup',
    keyStat: '54%',
    keyStatLabel: 'stopped hiring junior developers',
    keyStatSource: 'AlterSquare · March 2026',
    points: [
      'Salesforce — zero new engineering hires in 2025',
      'Block — workforce cut from 10k to <6k (2026)',
      'Atlassian — skill mix shift (March 2026)',
    ],
    riskFlag: 'No mentorship pipeline being built. Senior talent gap arrives 2033.',
    riskColor: 'text-rose-400 border-rose-500/30 bg-rose-500/5',
    pyramidTiers: [
      { label: 'Sr', width: 90 },
      { label: 'Md', width: 45 },
      { label: 'Jr', width: 10 },
    ],
  },
  {
    id: 'enterprise',
    badge: 'Maintained',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    pyramidColor: 'bg-amber-500',
    title: 'Enterprise · Finance · Health',
    keyStat: '+74%',
    keyStatLabel: 'AI-related postings in insurance YoY',
    keyStatSource: 'Multiple · 2025–2026',
    points: [
      'Specialist salaries +40% with higher output',
      'Institutional knowledge requires junior continuity',
      'Regulatory accountability chains require onboarding',
    ],
    riskFlag: 'Not immune. Structural delay, not avoidance.',
    riskColor: 'text-amber-400 border-amber-500/30 bg-amber-500/5',
    pyramidTiers: [
      { label: 'Sr', width: 55 },
      { label: 'Md', width: 65 },
      { label: 'Jr', width: 45 },
    ],
  },
  {
    id: 'regulated',
    badge: 'Legally Required',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    pyramidColor: 'bg-emerald-500',
    title: 'Regulated · Legal · Compliance',
    keyStat: '1,200+',
    keyStatLabel: 'AI-related court sanctions globally',
    keyStatSource: 'Multiple · 2025–2026',
    points: [
      'Auditable human decision chains required by law',
      'FDA-authorised AI requires human oversight',
      'E&O insurance requires documented HITL',
    ],
    riskFlag: 'Last stable hiring markets through 2027.',
    riskColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5',
    pyramidTiers: [
      { label: 'Sr', width: 40 },
      { label: 'Md', width: 60 },
      { label: 'Jr', width: 75 },
    ],
  },
];

const SectorSplit = () => {
  return (
    <div className="my-16 space-y-10">
      {/* Header */}
      <div className="max-w-2xl space-y-2">
        <p className="text-[10px] tracking-[0.2em] uppercase text-slate-500 font-bold">
          The Sector Split · Section 5
        </p>
        <h3 className="text-2xl font-black text-white tracking-tight">
          One disruption. Three experiences.
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          Where you work determines whether the Barbell is already here, arriving soon, or structurally delayed. The experience of a Quant Dev is not the experience of a Compliance Officer.
        </p>
      </div>

      {/* Three columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sectors.map((s) => (
          <div key={s.id} className="bg-slate-900/40 border border-slate-800/50 rounded-2xl p-6 flex flex-col hover:border-slate-700/50 transition-colors group">
            {/* Badge */}
            <div className={`self-start px-2 py-1 rounded text-[9px] font-black tracking-widest uppercase border ${s.badgeColor} mb-6`}>
              {s.badge}
            </div>

            {/* Sector title */}
            <h4 className="text-sm font-bold text-slate-200 mb-6 leading-tight group-hover:text-white transition-colors">
              {s.title}
            </h4>

            {/* Key stat */}
            <div className="mb-6">
              <div className={`text-4xl font-black tracking-tighter ${s.badgeColor.split(' ')[0]}`}>
                {s.keyStat}
              </div>
              <p className="text-[11px] text-slate-500 font-medium leading-normal mt-2">
                {s.keyStatLabel}
              </p>
              <p className="text-[9px] text-slate-700 font-bold uppercase tracking-widest mt-1">
                {s.keyStatSource}
              </p>
            </div>

            {/* Bullet points */}
            <div className="flex-1 space-y-3 mb-8">
              {s.points.map((pt, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${s.pyramidColor} opacity-40`} />
                  <p className="text-[11px] text-slate-400 leading-relaxed font-medium">{pt}</p>
                </div>
              ))}
            </div>

            {/* Risk flag */}
            <div className={`px-4 py-3 rounded-xl border italic text-[11px] leading-relaxed transition-all group-hover:scale-[1.02] ${s.riskColor}`}>
              {s.riskFlag}
            </div>

            {/* Mini pyramid */}
            <WorkforcePyramid tiers={s.pyramidTiers} colorClass={s.pyramidColor} />
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p className="text-[10px] text-slate-600 font-bold tracking-widest uppercase text-center mt-8">
        Pyramids show relative workforce shape · Sources: Section 8.3 / Project NANDA
      </p>
    </div>
  );
};

export default SectorSplit;
