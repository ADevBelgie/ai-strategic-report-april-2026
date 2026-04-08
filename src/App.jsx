import React, { useState, useEffect } from 'react';
import './App.css';
import {
  Activity, Brain, BarChart3, AlertTriangle, Target, Cpu, Compass, Users,
  Globe, FileText, Zap, Layers, TrendingUp, BookOpen, Database, Lightbulb,
  Network, RotateCcw, Map, ArrowRight, Download, ExternalLink, Github
} from 'lucide-react';
import { Section, StatCard, CalloutBox, SplitStatDisplay, BenchmarkCard,
  DimensionDetailCard, ScenarioCard, TabComponent, SpeculativeSection, HorizonWatch
} from './components/shared';
import RadarChart from './components/RadarChart';
import { SWEBenchChart } from './components/SWEBenchChart';
import { ReadingModeProvider, useReadingMode } from './context/ReadingModeContext';
import ReadingModeToggle from './components/ReadingModeToggle';
import EssayCrossLink from './components/EssayCrossLink';
import ProductivityParadox from './components/visuals/ProductivityParadox';
import HiringCollapse from './components/visuals/HiringCollapse';
import SectorSplit from './components/visuals/SectorSplit';
import PipelineTimeline from './components/visuals/PipelineTimeline';
import BarbellConcept from './components/visuals/BarbellConcept';
import { content, translate } from './content/reportContent';
import { scenarios } from './data/scenarios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MarkdownAlert = ({ content }) => {
  if (!content) return null;
  
  // Detect GitHub-style alerts in the markdown string
  if (content.startsWith('> [!CAUTION]')) {
    const lines = content.split('\n');
    // Remove the tag line and any leading '> ' from subsequent lines
    const markdownBody = lines
      .slice(1)
      .map(line => line.replace(/^>\s?/, ''))
      .join('\n');
    
    return (
      <div className="markdown-alert markdown-alert-caution animate-fadeIn">
        <div className="markdown-alert-title font-bold text-rose-500 mb-2 flex items-center gap-2">
          <AlertTriangle size={16} /> Caution for Investors
        </div>
        <div className="text-slate-300 text-sm leading-relaxed">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownBody}</ReactMarkdown>
        </div>
      </div>
    );
  }
  
  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>;
};

const App = () => {
  return (
    <ReadingModeProvider>
      <AppContent />
    </ReadingModeProvider>
  );
};

const AppContent = () => {
  const { mode, setMode } = useReadingMode();
  const [activeEconScenario, setActiveEconScenario] = useState('B');
  const [active2027Scenario, setActive2027Scenario] = useState('base');
  const [isFading, setIsFading] = useState(false);
  const [displayMode, setDisplayMode] = useState(mode);

  // Handle subtle fade transition when mode changes
  useEffect(() => {
    if (mode !== displayMode) {
      setIsFading(true);
      setTimeout(() => {
        setDisplayMode(mode);
        setIsFading(false);
      }, 150);
    }
  }, [mode, displayMode]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">

      {/* ─── STICKY HEADER ─── */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 bg-indigo-500 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Activity className="text-white" size={18} />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white tracking-tight">The AI Revolution: 2026 Strategic Brief</h1>
              <div className="flex flex-col sm:flex-row sm:gap-4 text-[10px] text-slate-400 font-semibold uppercase tracking-widest">
                <span>April 4, 2026</span>
                <span className="hidden sm:inline">•</span>
                <span className="text-indigo-400">By Arthur Devresse & Claude Sonnet 4.6 & Gemini 3.1 Pro</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ReadingModeToggle />
            <div className="h-6 w-px bg-slate-800 mx-2 hidden md:block"></div>
            <button className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors">
              <Globe size={20} />
            </button>
          </div>
        </div>
      </header>

      <main className={`max-w-5xl mx-auto px-6 py-8 space-y-8 content-fade ${isFading ? 'opacity-0' : 'opacity-100'}`}>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* HERO / MASTHEAD                                           */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="space-y-6 py-4">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              The Bottleneck Has <span className="gradient-text">Moved</span>
            </h2>
            <p className="text-xl text-slate-400 font-light leading-relaxed">
              {translate(content.heroSubheading[displayMode], displayMode)}
            </p>
            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
              Updated from the November 2025 Strategic Report
            </p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 text-sm text-slate-400 leading-relaxed">
            {displayMode === 'expert' 
              ? "Six months ago this report predicted the transition from emergence to deployment. The benchmarks have moved faster than forecast. The economics have moved faster still. What's changed: the hard problem is no longer whether AI can do the task — it's whether the systems, skills, and structures around it can keep up. This brief updates every major prediction and adds new dimensions the original report didn't have language for yet."
              : "AI can do the work. That's no longer the question. The question is whether the people and systems around it are good enough to keep up — and right now, most aren't. This update covers what's changed in the last six months and what to expect next."
            }
          </div>

          {displayMode === 'expert' && (
            <div className="flex items-center gap-2 text-xs font-semibold px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full w-fit animate-in fade-in slide-in-from-top-4 duration-1000">
              <span className="text-white">New to AI benchmarks?</span>
              <button 
                onClick={() => setMode('essentials')}
                className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors cursor-pointer"
              >
                Start with the Essentials version
              </button>
            </div>
          )}

          {/* Hero Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 stagger-children">
            <StatCard label="SWE-bench Pro (SEAL)" value="45.9%" subtext="Coding Autonomy" trend="up" color="indigo" />
            <StatCard label="Junior IT Hiring Share" value="7%" subtext="Down from 15% in 2022" trend="down" color="rose" />
            <StatCard label="ARC-AGI-2" value="77.1%" subtext="Reasoning Frontier" trend="up" color="amber" />
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SECTION 1 — NARRATIVE LEAD                                */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <Section title="Real Progress. Wrong Ruler." icon={Brain} isOpenDefault={true} id="s1">
          <div className="space-y-4 text-slate-300 leading-relaxed mb-8">
            <p>
              {translate(content.s1IntroP1[displayMode], displayMode)}
            </p>
            <p>
              {translate(content.s1IntroP2[displayMode], displayMode)}
            </p>
          </div>

          {/* SWE-bench Dual Line Chart replacing Timeline */}
          <SWEBenchChart />

          <CalloutBox type="amber" title={displayMode === 'expert' ? "The gap that matters most isn't Verified vs. Pro. It's SEAL vs. custom." : "Engineering vs. AI"}>
            {translate(content.s1Callout1[displayMode], displayMode)}
          </CalloutBox>

          <CalloutBox type="insight" title="Benchmarks Are Being Replaced Faster Ever — That's a Good Sign">
            {translate(content.s1TestContext[displayMode], displayMode)}
          </CalloutBox>
        </Section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SECTION 2 — THE RELIABILITY PARADOX                       */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <Section title="The Reasoning Tradeoff" icon={AlertTriangle} isOpenDefault={true} id="s2">
          <div className="space-y-4 text-slate-300 leading-relaxed mb-6">
            <p>
              {translate(content.s2Intro[displayMode], displayMode)}
            </p>
          </div>

          {displayMode === 'essentials' && (
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Error rate — how often the AI confidently gives a wrong answer:
            </p>
          )}
          <SplitStatDisplay
            left={{ value: "Sub-1%", label: "Non-reasoning models + o3-mini on grounded tasks", source: "Vectara HHEM Leaderboard, 7,700-article dataset" }}
            right={{ value: "10%+", label: "Extended reasoning models on the same task", source: "Same benchmark, same conditions" }}
          />

          <CalloutBox type="blue" title={displayMode === 'expert' ? "The Paradox Has a Solution — But Not a Free One" : "The Solution"}>
            {translate(content.s2Fix[displayMode], displayMode)}
          </CalloutBox>
        </Section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SECTION 3 — BENCHMARKS                                    */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <Section title={translate(content.s3Title[displayMode], displayMode)} icon={BarChart3} isOpenDefault={true} id="s3">
          <p className="text-sm text-slate-400 mb-6">
            {translate(content.s3Context[displayMode], displayMode)}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
            <BenchmarkCard status="active" name="SWE-bench Pro" score="45.9%" model="Claude Opus 4.5 (SEAL Standardised)"
              description="Current honest measure. Evaluated on private codebases, controlled agentic environment." source="Scale AI SEAL Leaderboard" />
            <BenchmarkCard status="active" name="SWE-bench Pro" score="56.8%" model="GPT-5.3-Codex (Custom Agentic System)"
              description="Not comparable to SEAL. Best performing agentic system recorded." source="BenchLM.ai (Mar 2026)" />
            <BenchmarkCard status="active" name="Terminal-Bench 2.0" score="78.4%" model="Gemini 3.1 Pro (Forge Code Agent)"
              description="Real-world execution tasks. Tests whole-system agent performance in real shell environments." source="tbench.ai" />
            <BenchmarkCard status="saturation" name="ARC-AGI-2" score="77.1%" model="Gemini 3.1 Pro (Official verified)"
              description="Approaching saturation; contamination flagged." source="ARC Prize Foundation" />
            <BenchmarkCard status="new-frontier" name="ARC-AGI-3" 
              score={content.s3Agi3Entry[displayMode].score} 
              model="Frontier LLMs"
              description={content.s3Agi3Entry[displayMode].desc} 
              source="ARC Prize, March 2026" />
            <BenchmarkCard status="active" name="GAIA (All Levels)" score="74.6%" model="Claude Sonnet 4.5 (HAL Generalist Agent)"
              description="Base models sit at ~44.8%. The 30-point engineering dividend." source="awesomeagents.ai (Feb 2026)" />
            <BenchmarkCard status="deprecated" name="SWE-bench Verified" score="80.9%" model="Claude Opus 4.5"
              description="OpenAI confirmed training contamination." source="OpenAI internal audit, 2026" />
            <BenchmarkCard status="retired" name="GPQA / MMLU" score="94.3%+" model="Gemini 3.1 Pro (GPQA)"
              description="Structurally saturated; signal lost." />
          </div>


          <CalloutBox type="insight" title="Key Insight">
            {translate("The most important benchmark development of early 2026: ARC-AGI-3's launch with frontier LLMs at under 1% is not evidence that AI progress has stalled. It's evidence that the half-life thesis holds — every benchmark measuring crystallised intelligence gets saturated; the field responds by designing a harder one.", displayMode)} <em>{translate("Predicted: 30–50% scores by end of 2026 via RL-based approaches, not LLMs.", displayMode)}</em>
          </CalloutBox>
        </Section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SECTION 4 — CAPABILITY RADAR                              */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <Section title="Six Dimensions. Two Realities." icon={Target} isOpenDefault={true} id="s4">
          <div className="space-y-4 text-slate-300 leading-relaxed mb-6">
            <p>
              {content.s4Opening[displayMode]}
            </p>
            {displayMode === 'essentials' && (
              <p className="text-sm font-medium text-indigo-400 bg-indigo-500/5 p-4 rounded-lg border border-indigo-500/20">
                {content.s4ContextLine[displayMode]}
              </p>
            )}
            <p className="text-sm text-slate-400">
              The radar below shows two polygons deliberately. The inner shape is what a standard deployment delivers today — the 95% that MIT found seeing no measurable P&L impact. (MIT NANDA Initiative, "The GenAI Divide: State of AI in Business 2025", July 2025 — based on 300+ publicly disclosed initiative reviews; the bar is rapid revenue acceleration.) The outer shape is what the top 5% achieve with deliberate systems design. <strong>Key Meta-Insight:</strong> The gap is not a model problem — it's a design problem. 95% of enterprise projects fail ROI because they run base models instead of engineered agentic systems.
            </p>
          </div>

          {displayMode === 'essentials' && (
            <p className="text-sm italic text-slate-400 mb-6 px-4 border-l-2 border-indigo-500/30">
              Each axis is scored 0–100. Higher is better. The inner shape is what most companies run today. The outer shape is what the best-engineered 5% achieve.
            </p>
          )}
          <RadarChart />

          <ProductivityParadox />

          {/* Dimension Detail Cards */}
          <div className="mt-8 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">Dimension Deep Dives</h4>

            <DimensionDetailCard title="Execution" subtitle="From patch generation to end-to-end completion">
              <p>{translate(content.s4Dimensions.execution[displayMode].p1, displayMode)}</p>
              <p>{translate(content.s4Dimensions.execution[displayMode].p2, displayMode)}</p>
              <p>{translate(content.s4Dimensions.execution[displayMode].p3, displayMode)}</p>
              {displayMode === 'expert' && <p>{translate(content.s4Dimensions.execution[displayMode].p4, displayMode)}</p>}
              <p className="text-xs text-slate-500 mt-2">Typical: 46 | Best System Today: 65 | 2027: 82 · Sources: Scale AI SEAL; tbench.ai leaderboard (Mar 2026); morphllm.com/terminal-bench-2</p>
            </DimensionDetailCard>

            <DimensionDetailCard title="Memory" subtitle="The fastest-moving dimension — and the most underrated">
              <p>{translate(content.s4Dimensions.memory[displayMode].p1, displayMode)}</p>
              <p>{translate(content.s4Dimensions.memory[displayMode].p2, displayMode)}</p>
              <p>{translate(content.s4Dimensions.memory[displayMode].p3, displayMode)}</p>
              <p className="text-xs text-slate-500 mt-2">Standard: 47 | Well-Engineered: 89 | 2027: 95 · Sources: LongMemEval, LOCOMO, Mem0 Research, Vectorize Hindsight</p>
            </DimensionDetailCard>

            <DimensionDetailCard title="Confidence Calibration" subtitle="Does the AI know what it doesn't know?">
              <p>{translate(content.s4Dimensions.confidence[displayMode].p1, displayMode)}</p>
              <p>{translate(content.s4Dimensions.confidence[displayMode].p2, displayMode)}</p>
              {displayMode === 'expert' && <p>{translate(content.s4Dimensions.confidence[displayMode].p3, displayMode)}</p>}
              <p className="text-xs text-slate-500 mt-2">Standard: 62 | Well-Engineered: 77 | 2027: 85 · Sources: Steyvers et al. 2025 (Nature Machine Intelligence); arXiv:2510.05126</p>
            </DimensionDetailCard>

            <DimensionDetailCard title="Coherence" subtitle="Maintaining the thread across a long task">
              <p>{translate(content.s4Dimensions.coherence[displayMode].p1, displayMode)}</p>
              <p>{translate(content.s4Dimensions.coherence[displayMode].p2, displayMode)}</p>
              <p>{translate(content.s4Dimensions.coherence[displayMode].p3, displayMode)}</p>
              <p className="text-xs text-slate-500 mt-2">Typical: 45 | Best System Today: 75 | 2027: 90 · Sources: awesomeagents.ai GAIA; RULER/GAM; MIT GenAI Divide</p>
            </DimensionDetailCard>

            <DimensionDetailCard title="Reliability" subtitle="Can you trust the output?">
              <p>{translate(content.s4Dimensions.reliability[displayMode].p1, displayMode)}</p>
              <p>{translate(content.s4Dimensions.reliability[displayMode].p2, displayMode)}</p>
              <p>{translate(content.s4Dimensions.reliability[displayMode].p3, displayMode)}</p>
              <p className="text-xs text-slate-500 mt-2 italic font-medium">
                {content.s4Footnote[displayMode]}
              </p>
              <p className="text-xs text-slate-500 mt-1">Typical: 35 | Best System Today: 82 | 2027: 92 · Sources: Vectara HHEM; ReDeEP ICLR 2025; SimpleQA Verified</p>
            </DimensionDetailCard>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SECTION 5 — ECONOMIC SCENARIOS                            */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <Section title="The Barbell Economy: Confirmed. Accelerating. Compounding." icon={TrendingUp} isOpenDefault={true} id="s5">
          <p className="text-slate-300 leading-relaxed mb-8">
            {translate(content.s5BarbellIntro[displayMode], displayMode)}
          </p>
          <BarbellConcept />
          <HiringCollapse />
          {/* Probability Badges */}
          <div className="mb-4 text-center">
            <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold">Labor Market Scenarios: The Barbell Effect</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {scenarios.map((scenario, index) => (
              <ScenarioCard 
                key={index}
                emoji={scenario.emoji} 
                title={scenario.name} 
                probability={scenario.probability} 
                isActive={activeEconScenario === String.fromCharCode(65 + index)} 
                onClick={() => setActiveEconScenario(String.fromCharCode(65 + index))}
              >
                {scenario.description}
              </ScenarioCard>
            ))}
          </div>

          {/* Scenario-dependent content */}
          <div className="mb-8 bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 transition-all">
            {activeEconScenario === 'A' && (
              <div className="space-y-3 text-sm text-slate-300 leading-relaxed animate-fade-in">
                <h5 className="text-amber-400 font-bold text-xs uppercase tracking-wider">{scenarios[0].name} Scenario</h5>
                <p>{scenarios[0].description}</p>
                <p className="text-slate-500 text-xs">Trigger: {scenarios[0].trigger}</p>
              </div>
            )}
            {activeEconScenario === 'B' && (
              <div className="space-y-3 text-sm text-slate-300 leading-relaxed animate-fade-in">
                <h5 className="text-indigo-400 font-bold text-xs uppercase tracking-wider">{scenarios[1].name} Scenario</h5>
                <p>{scenarios[1].description}</p>
                <p className="text-slate-500 text-xs">Trigger: {scenarios[1].trigger}</p>
              </div>
            )}
            {activeEconScenario === 'C' && (
              <div className="space-y-3 text-sm text-slate-300 leading-relaxed animate-fade-in">
                <h5 className="text-rose-400 font-bold text-xs uppercase tracking-wider">{scenarios[2].name} Scenario</h5>
                <p>{scenarios[2].description}</p>
                <p className="text-slate-500 text-xs">Trigger: {scenarios[2].trigger}</p>
              </div>
            )}
          </div>
          <SectorSplit />
        </Section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SECTION 6 — MECHANISMS & TIMELINE                         */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <Section title="How We Get From Here to 2027" icon={Cpu} isOpenDefault={true} id="s6">
          {/* Vertical Timeline */}
          <div className="space-y-10 mb-10">
            {content.s6Timeline[displayMode].map((node, i) => {
              const isLast = i === content.s6Timeline[displayMode].length - 1;
              return (
                <div key={i} className="relative pl-10">
                  {/* Vertical Line Segment */}
                  {!isLast && (
                    <div className="absolute left-[9px] top-[14px] w-[2px] h-[calc(100%+40px)] bg-slate-700" />
                  )}
                  {/* Dot */}
                  <div className={`absolute left-0 top-1 h-5 w-5 rounded-full z-10 ${node.color} border-4 border-slate-950 shadow-lg`} />
                  <div className="flex items-baseline gap-3 mb-1">
                    <h4 className="text-white font-bold text-lg">{node.year}</h4>
                    <span className="text-xs text-slate-500 font-mono uppercase">{node.status}</span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{node.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Scaling Law Cards */}
          <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">
            {translate(content.s6Intro[displayMode], displayMode)}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: Zap, color: 'text-amber-400', title: 'Inference Cost Collapse', desc: content.s6Mechanisms.costCollapse[displayMode] },
              { icon: RotateCcw, color: 'text-emerald-400', title: 'Synthetic Data Verification', desc: content.s6Mechanisms.syntheticData[displayMode] },
              { icon: Layers, color: 'text-indigo-400', title: 'Multimodal / Document AI', desc: content.s6Mechanisms.multimodal[displayMode] },
              { icon: Database, color: 'text-blue-400', title: 'Memory as Infrastructure', desc: content.s6Mechanisms.memory[displayMode] },
              { icon: Globe, color: 'text-rose-400', title: 'Open-Source Parity', desc: content.s6Mechanisms.openSource[displayMode] },
            ].map((card, i) => (
              <div key={i} className={`bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 hover:border-slate-600/50 transition-colors ${i === 4 ? 'md:col-span-2' : ''}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg bg-slate-900/50 ${card.color}`}>
                    <card.icon size={18} />
                  </div>
                  <h5 className="text-white font-bold">{card.title}</h5>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{translate(card.desc, displayMode)}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SECTION 7 — 2027 SCENARIOS                                */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <Section title="Where This Goes Next" icon={Compass} isOpenDefault={true} id="s7">
          <p className="text-sm text-slate-400 mb-6 leading-relaxed">
            Three scenarios for how AI deployment evolves from here. These aren't predictions — they're structured possibilities, each grounded in current data and trajectories.
          </p>
          <div className="mb-6">
            <MarkdownAlert content={content.s7Methodology[displayMode]} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {scenarios.map((scenario, index) => (
              <ScenarioCard 
                key={index}
                emoji={scenario.emoji} 
                title={scenario.name} 
                probability={scenario.probability} 
                horizon={scenario.horizon} 
                headline={scenario.implication}
                isActive={active2027Scenario === scenario.name.toLowerCase().replace(' ', '')} 
                onClick={() => setActive2027Scenario(scenario.name.toLowerCase().replace(' ', ''))}
              >
                {scenario.trigger}
              </ScenarioCard>
            ))}
          </div>

          <details className="mt-4 mb-8 group">
            <summary className="text-[10px] text-slate-500 cursor-pointer hover:text-slate-400 transition-colors select-none list-none flex items-center gap-1.5">
              <span className="group-open:rotate-90 transition-transform duration-200 inline-block">›</span>
              Methodology note
            </summary>
            <div className="mt-3 pl-4 border-l border-slate-700/50 text-[11px] text-slate-500 leading-relaxed max-w-2xl">
              <p className="mb-2 text-slate-400">Probability weights are informed estimates derived from six independent data inputs — not outputs of a formal forecasting model.</p>
              <p>Inputs: ARC-AGI-3 progress rates; inference cost curve (Stanford AI Index); BLS / Stanford / Harvard labour market data; open-source capability trajectory; LangChain practitioner survey (57% production deployment rate); Gartner / Databricks enterprise adoption signals. Full methodology in the supporting data document.</p>
            </div>
          </details>

          <PipelineTimeline />

          <p className="text-slate-400 text-sm mt-12 mb-4 leading-relaxed">
            {translate(content.s7Transition[displayMode], displayMode)}
          </p>
        </Section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SECTION 8 — THE EPISTEMIC FLOOD                           */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <SpeculativeSection title="8 · The Epistemic Flood" tag="Structural Horizon" id="s8">
          <p className="text-xl text-slate-200 font-light leading-relaxed mb-4 max-w-4xl">
            {translate("The industry has largely misunderstood the end-state of the inference cost collapse. It is the frame the rest of this report is sitting inside.", displayMode)}
          </p>

          <div className="space-y-12 mt-12">
            {/* 8.1 — The Flood Is Already Here */}
            <div>
              <h3 className="text-lg text-indigo-400 font-bold uppercase tracking-wider mb-6 flex items-center gap-3">
                <span className="w-12 h-px bg-indigo-500/50"></span> 8.1 — The Flood Is Already Here
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-slate-400 leading-relaxed mb-6">
                <p>
                  {translate(content.s8_8_1[displayMode].p1, displayMode)}
                </p>
                <p>
                  {translate(content.s8_8_1[displayMode].p2, displayMode)}
                </p>
              </div>
              <CalloutBox type="insight" title={displayMode === 'expert' ? "The Capacity Paradox" : "The Problem is Volume"}>
                {translate("The two domains most visibly breaking — scientific publishing and legal practice — share a structural feature: both were built around the assumption that production is the hard part. Those assumptions are gone. The flood is not coming. It arrived.", displayMode)}
              </CalloutBox>
            </div>

            {/* 8.2 — The Structural Paradox */}
            <div>
              <h3 className="text-lg text-emerald-400 font-bold uppercase tracking-wider mb-6 flex items-center gap-3">
                <span className="w-12 h-px bg-emerald-500/50"></span> 8.2 — The Structural Paradox
              </h3>
              <div className="text-slate-200 font-light text-lg leading-relaxed max-w-4xl mb-6">
                {translate("This is not primarily a reliability problem.", displayMode)}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-slate-400 leading-relaxed mb-6">
                <p>
                  {translate(content.s8_8_2[displayMode].p1, displayMode)}
                </p>
                <p>
                  {translate(content.s8_8_2[displayMode].p2, displayMode)}
                </p>
              </div>
              <CalloutBox type="amber" title={displayMode === 'expert' ? "Institutional Design Challenge" : "A New Kind of Challenge"}>
                {translate("The reliability problem is a systems engineering challenge. The flood problem is an institutional design challenge. No amount of RAG improvement solves a peer review system designed for 11,000 papers receiving 20,000.", displayMode)}
              </CalloutBox>
            </div>

            {/* 8.3 — The Verification Layer */}
            <div>
              <h3 className="text-lg text-blue-400 font-bold uppercase tracking-wider mb-6 flex items-center gap-3">
                <span className="w-12 h-px bg-blue-500/50"></span> 8.3 — The Verification Layer: What Comes Next
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-slate-400 leading-relaxed mb-6">
                <p>
                  {translate(content.s8_8_3[displayMode].p1, displayMode)}
                </p>
                <p>
                  {translate(content.s8_8_3[displayMode].p2, displayMode)}
                </p>
              </div>
              <div className="mt-8 p-6 bg-indigo-500/5 border border-dashed border-indigo-500/30 rounded-xl">
                <h4 className="text-indigo-400 font-bold text-sm mb-2 flex items-center gap-2">
                  <span>💡</span> THE LONG HORIZON
                </h4>
                <div className="text-slate-300 text-sm leading-relaxed">
                  If both production and verification become automated, the human role moves upstream—from "producer/verifier" to <strong className="text-white font-semibold">parameter setter</strong>: deciding what questions are worth asking, which outputs ever reach human attention, and what standards the verification layer is trained to enforce. This is the 2030+ structural question being determined by 2026 decisions.
                </div>
              </div>
            </div>

            {/* 8.4 — Signals to Track */}
            <div>
              <h3 className="text-lg text-rose-400 font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-rose-500/50"></span> 8.4 — Horizon Watch: Signals to Track
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {translate(content.s8HorizonWatchFraming[displayMode], displayMode)}
              </p>
              <HorizonWatch 
                title="STRUCTURAL HORIZON SIGNALS"
                subtitle="Empirical indicators determining whether institutional adaptation or structural failure dominates."
                columns={[
                  {
                    label: "↑ Accelerating",
                    color: "green",
                    items: content.s8HorizonWatch.accelerating[displayMode]
                  },
                  {
                    label: "→ Stalling",
                    color: "amber",
                    items: content.s8HorizonWatch.stalling[displayMode]
                  },
                  {
                    label: "↓ Reversing",
                    color: "red",
                    items: content.s8HorizonWatch.reversing[displayMode]
                  }
                ]}
              />
              <p className="mt-8 text-sm text-slate-500 italic text-center max-w-2xl mx-auto">
                {translate('Note: The "Reversing" scenario is grounded in patterns like the Klarna correction (Section 3)—where human judgment proved irreplaceable in context-dependent domains.', displayMode)}
              </p>
            </div>
          </div>
        </SpeculativeSection>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SECTION 9 — IMPLICATIONS BY ACTOR                         */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <Section title="9 · What This Means for You" icon={Users} isOpenDefault={true} id="s9">
          <p className="text-sm text-slate-400 mb-6 leading-relaxed italic">
            The actor-specific actions below apply under the Base Case scenario.
          </p>
          <TabComponent tabs={[
            {
              label: 'Enterprise',
              title: 'Enterprise Leaders',
              content: (
                <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                  <div>
                    <h5 className="text-indigo-400 font-bold text-xs uppercase tracking-wider mb-2">Reading the current moment</h5>
                    <p>{translate(content.s9Enterprise.moment[displayMode], displayMode)}</p>
                  </div>
                  <div>
                    <h5 className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">Next quarter</h5>
                    <p>{translate(content.s9Enterprise.next[displayMode], displayMode)}</p>
                  </div>
                  {content.s9Enterprise.architectureDividend && (
                    <div>
                      <h5 className="text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">ROI Driver</h5>
                      <p>{translate(content.s9Enterprise.architectureDividend[displayMode], displayMode)}</p>
                    </div>
                  )}
                  {content.s9Enterprise.epistemicFlood && (
                    <div>
                      <h5 className="text-rose-400 font-bold text-xs uppercase tracking-wider mb-2">The Epistemic Flood</h5>
                      <p>{translate(content.s9Enterprise.epistemicFlood[displayMode], displayMode)}</p>
                    </div>
                  )}
                </div>
              )
            },
            {
              label: 'Investors',
              title: 'Strategists & Investors',
              content: (
                <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                  <div>
                    <h5 className="text-indigo-400 font-bold text-xs uppercase tracking-wider mb-2">Reading the current moment</h5>
                    <p>{translate(content.s9Investors.moment[displayMode], displayMode)}</p>
                  </div>
                  <div className="my-4">
                    <MarkdownAlert content={content.s9Caution[displayMode]} />
                  </div>
                  <div>
                    <h5 className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">Next quarter</h5>
                    <p>{translate(content.s9Investors.next[displayMode], displayMode)}</p>
                  </div>
                  {content.s9Investors.actionMoat && (
                    <div>
                      <h5 className="text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">Strategic Shift</h5>
                      <p>{translate(content.s9Investors.actionMoat[displayMode], displayMode)}</p>
                    </div>
                  )}
                </div>
              )
            },
            {
              label: 'Careers',
              title: 'Tech Professionals & Career Entrants',
              content: (
                <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                  <div>
                    <h5 className="text-indigo-400 font-bold text-xs uppercase tracking-wider mb-2">Reading the current moment</h5>
                    <p>{translate(content.s9Careers.moment[displayMode], displayMode)}</p>
                  </div>
                  <div>
                    <h5 className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">Next quarter</h5>
                    <p>{translate(content.s9Careers.next[displayMode], displayMode)}</p>
                  </div>
                  {content.s9Careers.resilience && (
                    <div>
                      <h5 className="text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">Long-term Resilience</h5>
                      <p>{translate(content.s9Careers.resilience[displayMode], displayMode)}</p>
                    </div>
                  )}
                </div>
              )
            },
            {
              label: 'Education',
              title: 'Educational Institutions',
              content: (
                <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                  <div>
                    <h5 className="text-indigo-400 font-bold text-xs uppercase tracking-wider mb-2">Reading the current moment</h5>
                    <p>{translate(content.s9Education.moment[displayMode], displayMode)}</p>
                  </div>
                  <div>
                    <h5 className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">Next quarter</h5>
                    <p>{translate(content.s9Education.next[displayMode], displayMode)}</p>
                  </div>
                  {content.s9Education.verification && (
                    <div>
                      <h5 className="text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">Curriculum Focus</h5>
                      <p>{translate(content.s9Education.verification[displayMode], displayMode)}</p>
                    </div>
                  )}
                </div>
              )
            },
          ]} />
        </Section>

        <EssayCrossLink />

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* FOOTER — METHODOLOGY & SOURCES                            */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-sm text-slate-400 leading-relaxed mb-6">
            {translate("This brief synthesises publicly available benchmark data, peer-reviewed research, and labour market statistics current as of April 4, 2026. Full data sources, corrected figures from the November 2025 report, and extended analysis of each section are available in the supporting data document.", displayMode)}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <a href="/AI-Strategic-Brief-V2-Data.docx" download className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-500/10 border border-indigo-500/30 rounded-xl text-sm text-indigo-400 hover:bg-indigo-500/20 transition-colors">
              <Download size={16} /> Download full V2 data document
            </a>
            <a href="https://ai-strategic-report.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-slate-300 hover:bg-slate-700 transition-colors">
              <ExternalLink size={16} /> View V1 original report
            </a>
            <a href="https://github.com/ADevBelgie/ai-strategic-report-april-2026" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-slate-300 hover:bg-slate-700 transition-colors">
              <Github size={16} /> Source code
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-slate-900/50 p-6 rounded-xl border border-slate-800">
            <div>
              <h5 className="text-indigo-400 mb-3 font-semibold text-xs uppercase tracking-wider">Base Benchmarks</h5>
              <ul className="space-y-1.5 text-xs text-slate-500">
                <li>Scale AI SEAL (labs.scale.com)</li>
                <li>Epoch AI (epoch.ai/benchmarks)</li>
                <li>SWE-rebench (swe-rebench.com)</li>
                <li>SWE-bench Pro (Scale AI SEAL)</li>
                <li>ARC Prize (arcprize.org)</li>
              </ul>
            </div>
            <div>
              <h5 className="text-sky-400 mb-3 font-semibold text-xs uppercase tracking-wider">Agentic Systems Benchmarks</h5>
              <ul className="space-y-1.5 text-xs text-slate-500">
                <li>Terminal-Bench 2.0 (tbench.ai/leaderboard/terminal-bench/2.0)</li>
                <li>Terminal-Bench Hard (artificialanalysis.ai)</li>
                <li>GAIA Agentic (awesomeagents.ai)</li>
                <li>HAL GAIA (hal.cs.princeton.edu/gaia)</li>
              </ul>
            </div>
            <div>
              <h5 className="text-emerald-400 mb-3 font-semibold text-xs uppercase tracking-wider">Memory & Metacognition</h5>
              <ul className="space-y-1.5 text-xs text-slate-500">
                <li>Mem0 Research (mem0.ai/research)</li>
                <li>LongMemEval</li>
                <li>Steyvers et al. 2025 (Nature Machine Intelligence)</li>
                <li>Google DORA 2024</li>
                <li>AA-Omniscience (artificialanalysis.ai)</li>
              </ul>
            </div>
            <div>
              <h5 className="text-amber-400 mb-3 font-semibold text-xs uppercase tracking-wider">Reliability</h5>
              <ul className="space-y-1.5 text-xs text-slate-500">
                <li>Vectara HHEM Leaderboard</li>
                <li>SimpleQA Verified (arxiv.org/abs/2509.07968)</li>
                <li>ReDeEP ICLR 2025</li>
              </ul>
            </div>
            <div>
              <h5 className="text-rose-400 mb-3 font-semibold text-xs uppercase tracking-wider">Labour Market & Economics</h5>
              <ul className="space-y-1.5 text-xs text-slate-500">
                <li>BLS Occupational Employment Statistics</li>
                <li>Stanford Digital Economy Lab (Brynjolfsson et al.)</li>
                <li>Harvard Hosseini & Lichtinger</li>
                <li>Epoch AI Inference Price Trends</li>
                <li>AlterSquare (March 2026)</li>
                <li>National Student Clearinghouse (2025–2026)</li>
                <li>CRA CERP Pulse Survey (Fall 2025)</li>
              </ul>
            </div>
            <div>
              <h5 className="text-indigo-400 mb-3 font-semibold text-xs uppercase tracking-wider">Epistemic Infrastructure</h5>
              <ul className="space-y-1.5 text-xs text-slate-500">
                <li>Nature — ICLR AI Study (2025)</li>
                <li>HEC Paris / NPR — Legal Sanctions Tracker</li>
                <li>FindLaw — DOJ Fabrication Case (2026)</li>
                <li>arXiv — Structured Appendices Proposal</li>
                <li>National Law Review — Hyperlink Rule</li>
              </ul>
            </div>
          </div>
        </div>

        <footer className="py-8 text-center text-slate-600 text-xs">
          <p>AI Strategic Report V2 · April 4, 2026 · By Arthur Devresse & Claude Sonnet 4.6 & Gemini 3.1 Pro</p>
        </footer>

      </main>
    </div>
  );
};

export default App;
