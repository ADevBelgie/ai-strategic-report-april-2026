import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const Section = ({ title, icon: Icon, children, isOpenDefault = false, actionElement = null, id }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);
  return (
    <div id={id} className="mb-6 glass-card rounded-xl overflow-hidden">
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 bg-slate-800/30 gap-4 sm:gap-0">
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-3 flex-1 text-left w-full sm:w-auto group">
          <div className="p-2.5 bg-indigo-500/10 rounded-lg text-indigo-400 shrink-0 group-hover:bg-indigo-500/20 transition-colors">
            <Icon size={20} />
          </div>
          <h2 className="text-xl font-bold text-slate-100 tracking-tight">{title}</h2>
        </button>
        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
          {actionElement}
          <button onClick={() => setIsOpen(!isOpen)} className="p-1.5 hover:bg-slate-700/50 rounded-lg transition-colors">
            {isOpen ? <ChevronUp size={18} className="text-slate-400" /> : <ChevronDown size={18} className="text-slate-400" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="p-6 border-t border-slate-700/50 section-content">
          {children}
        </div>
      )}
    </div>
  );
};

export const StatCard = ({ label, value, subtext, trend, color = "indigo" }) => {
  const colorMap = {
    indigo: { text: 'text-indigo-400', glow: 'bg-indigo-500/5' },
    emerald: { text: 'text-emerald-400', glow: 'bg-emerald-500/5' },
    rose: { text: 'text-rose-400', glow: 'bg-rose-500/5' },
    amber: { text: 'text-amber-400', glow: 'bg-amber-500/5' },
    blue: { text: 'text-blue-400', glow: 'bg-blue-500/5' },
  };
  const c = colorMap[color] || colorMap.indigo;
  return (
    <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/50 relative overflow-hidden hover:border-slate-600/50 transition-colors">
      <div className="flex justify-between items-start mb-2 relative z-10">
        <span className="text-slate-400 text-sm font-medium">{label}</span>
        {trend && (
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${trend === 'up' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
            {trend === 'up' ? '↑ Rising' : '↓ Falling'}
          </span>
        )}
      </div>
      <div className={`text-3xl font-bold ${c.text} mb-1 relative z-10`}>{value}</div>
      <div className="text-slate-500 text-xs relative z-10">{subtext}</div>
      <div className={`absolute -bottom-6 -right-6 w-28 h-28 ${c.glow} rounded-full blur-2xl pointer-events-none animate-pulseGlow`} />
    </div>
  );
};

export const CalloutBox = ({ type = 'amber', title, children }) => {
  const styles = {
    amber: { border: 'border-amber-500/50', bg: 'bg-amber-500/5', titleColor: 'text-amber-400', icon: '⚠️' },
    blue: { border: 'border-blue-500/50', bg: 'bg-blue-500/5', titleColor: 'text-blue-400', icon: '💡' },
    insight: { border: 'border-indigo-500/50', bg: 'bg-indigo-500/5', titleColor: 'text-indigo-400', icon: '🔑' },
  };
  const s = styles[type] || styles.amber;
  return (
    <div className={`${s.bg} ${s.border} border rounded-xl p-5 mt-6`}>
      <h4 className={`${s.titleColor} font-bold text-sm mb-2 flex items-center gap-2`}>
        <span>{s.icon}</span> {title}
      </h4>
      <div className="text-slate-300 text-sm leading-relaxed">{children}</div>
    </div>
  );
};

export const SplitStatDisplay = ({ left, right }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <div className="bg-emerald-500/5 border border-emerald-500/30 rounded-xl p-5 text-center">
      <div className="text-3xl font-bold text-emerald-400 mb-2">{left.value}</div>
      <div className="text-sm text-slate-300 mb-1">{left.label}</div>
      <div className="text-xs text-slate-500">{left.source}</div>
    </div>
    <div className="bg-rose-500/5 border border-rose-500/30 rounded-xl p-5 text-center">
      <div className="text-3xl font-bold text-rose-400 mb-2">{right.value}</div>
      <div className="text-sm text-slate-300 mb-1">{right.label}</div>
      <div className="text-xs text-slate-500">{right.source}</div>
    </div>
  </div>
);

export const BenchmarkCard = ({ status, name, score, model, description, source }) => {
  const statusStyles = {
    active: { icon: '🟢', label: 'Active', border: 'border-emerald-500/30', labelColor: 'text-emerald-400' },
    ceiling: { icon: '🟢', label: 'Approaching Saturation', border: 'border-emerald-500/30', labelColor: 'text-emerald-400' },
    contaminated: { icon: '🔴', label: 'Contaminated', border: 'border-rose-500/30', labelColor: 'text-rose-400' },
    retired: { icon: '⬛', label: 'Retired', border: 'border-slate-600/30', labelColor: 'text-slate-500' },
  };
  const s = statusStyles[status] || statusStyles.active;
  return (
    <div className={`bg-slate-800/60 ${s.border} border rounded-xl p-5 hover:bg-slate-800/80 transition-colors`}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-lg font-bold text-white">{name}</span>
        <span className={`text-xs px-2 py-1 rounded-full ${s.labelColor} bg-slate-900/50 font-medium`}>
          {s.icon} {s.label}
        </span>
      </div>
      {score && <div className="text-2xl font-bold text-indigo-400 mb-1">{score}</div>}
      {model && <div className="text-xs text-slate-400 mb-3">{model}</div>}
      <p className="text-sm text-slate-400 leading-relaxed italic">"{description}"</p>
      {source && <div className="text-xs text-slate-600 mt-3">Source: {source}</div>}
    </div>
  );
};

export const DimensionDetailCard = ({ title, subtitle, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-700/50 rounded-xl overflow-hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-4 bg-slate-800/30 hover:bg-slate-800/50 transition-colors text-left">
        <div>
          <h4 className="text-white font-semibold">{title}</h4>
          <p className="text-xs text-slate-500">{subtitle}</p>
        </div>
        {isOpen ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
      </button>
      {isOpen && (
        <div className="p-5 border-t border-slate-700/30 section-content text-sm text-slate-300 leading-relaxed space-y-3">
          {children}
        </div>
      )}
    </div>
  );
};

export const ScenarioCard = ({ emoji, title, probability, horizon, headline, children, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer p-5 rounded-xl border transition-all duration-300 relative overflow-hidden ${isActive
      ? 'bg-indigo-900/20 border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.15)]'
      : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
    }`}
  >
    <div className="flex justify-between items-center mb-2">
      <h3 className={`font-bold flex items-center gap-2 ${isActive ? 'text-white' : 'text-slate-300'}`}>
        <span>{emoji}</span> {title}
      </h3>
      <span className={`text-xs font-mono px-2.5 py-1 rounded-lg ${isActive ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-400'}`}>
        {probability}
      </span>
    </div>
    {horizon && (
      <div className="mb-2">
        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${isActive ? 'bg-amber-500/20 text-amber-300' : 'bg-slate-700/50 text-slate-500'}`}>
          ⏱ {horizon}
        </span>
      </div>
    )}
    <div className="text-sm text-slate-400 leading-relaxed mb-2">{children}</div>
    {headline && <p className="text-xs text-indigo-400 font-medium italic mt-3">→ {headline}</p>}
    {isActive && <div className="absolute bottom-0 left-0 h-1 bg-indigo-500 w-full animate-pulse" />}
  </div>
);

export const TabComponent = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div className="flex flex-wrap gap-1 bg-slate-900/50 p-1 rounded-xl border border-slate-700/50 mb-6">
        {tabs.map((tab, i) => (
          <button key={i} onClick={() => setActiveTab(i)}
            className={`flex-1 min-w-[120px] px-4 py-2.5 text-sm rounded-lg transition-all font-medium ${i === activeTab ? 'bg-indigo-500 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="animate-fadeIn">
        <h3 className="text-white font-bold text-lg mb-2">{tabs[activeTab].title}</h3>
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export const SpeculativeSection = ({ title, tag, children, id }) => {
  return (
    <div id={id} className="mb-12 glass-card rounded-xl overflow-hidden border-indigo-500/20 shadow-2xl">
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 bg-slate-800/40 border-b border-slate-700/50">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-black text-white tracking-[0.2em] uppercase">{title}</h2>
          <span className="text-[10px] font-bold tracking-[0.2em] px-2 py-1 bg-slate-800 text-slate-400 border border-slate-700 rounded uppercase">
            {tag}
          </span>
        </div>
      </div>
      <div className="p-8 section-content">
        {children}
      </div>
    </div>
  );
};

export const HorizonWatch = ({ title, subtitle, columns }) => {
  const borderColors = {
    green: 'border-emerald-500',
    amber: 'border-amber-500',
    red: 'border-rose-500'
  };

  const textColors = {
    green: 'text-emerald-400',
    amber: 'text-amber-400',
    red: 'text-rose-400'
  };

  return (
    <div className="bg-slate-950/80 border border-slate-800 rounded-2xl overflow-hidden mt-12 mb-8 shadow-inner">
      <div className="p-6 border-b border-slate-800/50">
        <h4 className="text-white font-bold tracking-tight uppercase text-sm mb-1">{title}</h4>
        <p className="text-xs text-slate-500 italic">{subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800/50">
        {columns.map((col, i) => (
          <div key={i} className={`p-6 border-l-4 ${borderColors[col.color] || 'border-slate-500'}`}>
            <h5 className={`text-[10px] font-black tracking-widest mb-4 uppercase ${textColors[col.color] || 'text-slate-400'}`}>
              {col.label}
            </h5>
            <ul className="space-y-3">
              {col.items?.map((item, j) => (
                <li key={j} className="text-sm text-slate-400 flex gap-2 leading-relaxed">
                  <span className="text-slate-700 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
