import React, { useState } from 'react';
import './App.css';
import {
  Activity, Brain, BarChart3, AlertTriangle, Target, Cpu, Compass, Users,
  Globe, FileText, Zap, Layers, TrendingUp, BookOpen, Database, Lightbulb,
  Network, RotateCcw, Map, ArrowRight, Download, ExternalLink, Github
} from 'lucide-react';
import {
  Section, StatCard, CalloutBox, SplitStatDisplay, BenchmarkCard,
  DimensionDetailCard, ScenarioCard, TabComponent, SpeculativeSection, HorizonWatch
} from './components/shared';
import RadarChart from './components/RadarChart';
import { SWEBenchChart } from './components/SWEBenchChart';

const App = () => {
  const [activeEconScenario, setActiveEconScenario] = useState('B');
  const [active2027Scenario, setActive2027Scenario] = useState('base');

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
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors">
              <Globe size={20} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 space-y-8">

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* HERO / MASTHEAD                                           */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="space-y-6 py-4">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              The Bottleneck Has <span className="gradient-text">Moved</span>
            </h2>
            <p className="text-xl text-slate-400 font-light leading-relaxed">
              Capability is no longer what's holding AI back. <strong className="text-slate-200">System engineering</strong> and <strong className="text-slate-200">talent</strong> are — whether you're building, investing, hiring, or deciding what to study next.
            </p>
            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
              Updated from the November 2025 Strategic Report
            </p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 text-sm text-slate-400 leading-relaxed">
            Six months ago this report predicted the transition from emergence to deployment. The benchmarks have moved faster than forecast. The economics have moved faster still. What's changed: the hard problem is no longer whether AI can do the task — it's whether the systems, skills, and structures around it can keep up. This brief updates every major prediction and adds new dimensions the original report didn't have language for yet.
          </div>

          {/* Hero Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 stagger-children">
            <StatCard label="SWE-bench Pro (SEAL)" value="45.9%" subtext="Coding Autonomy" trend="up" color="indigo" />
            <StatCard label="Junior IT Hiring Share" value="7%" subtext="Down from 15% in 2022" trend="down" color="rose" />
            <StatCard label="ARC-AGI-2" value="77.1%" subtext="Reasoning Frontier" trend="up" color="emerald" />
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SECTION 1 — NARRATIVE LEAD                                */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <Section title="Real Progress. Wrong Ruler." icon={Brain} isOpenDefault={true} id="s1">
          <div className="space-y-4 text-slate-300 leading-relaxed mb-8">
            <p>
              AI coding capability has advanced faster in the past six months than in the three years before it. That's worth saying plainly. Models that couldn't resolve a meaningful fraction of real GitHub issues in 2023 now handle nearly half of enterprise-grade software engineering tasks under controlled, contamination-resistant conditions. That is genuine, substantial progress.
            </p>
            <p>
              The problem isn't the progress. It's that the most widely cited number — 80%+ on SWE-bench Verified — is measured on a benchmark that OpenAI's own audit found compromised. Every frontier model tested showed training data overlap with the evaluation tasks. That doesn't erase the progress underneath; it means the ruler is broken. On the contamination-resistant version of the same task, the number is 45.9%. Both are real. Only one is honest.
            </p>
          </div>

          {/* SWE-bench Dual Line Chart replacing Timeline */}
          <SWEBenchChart />

          <CalloutBox type="amber" title="The gap that matters most isn't Verified vs. Pro. It's SEAL vs. custom.">
            Three different agent systems running the same base model (Claude Opus 4.5) scored between 50.2% and 55.4% on SWE-bench Pro. (Source: morphllm.com/swe-bench-pro; Augment Code benchmark blog, Feb 2026) The SEAL standardised score for that same model is 45.9%. The 5–10 point spread comes entirely from how the agent retrieves context and manages its tool calls — not from the model. This means investing in agent architecture yields higher returns right now than switching to a marginally better base model. It's an engineering problem, not a capability problem.
          </CalloutBox>

          <CalloutBox type="insight" title="Benchmarks Are Being Replaced Faster Than Ever — That's a Good Sign">
            SWE-bench Verified saturated and was replaced by SWE-bench Pro. ARC-AGI-2 approached its ceiling in under 12 months; ARC-AGI-3 launched March 25, 2026. MMLU, GPQA, HumanEval — all retired. The ~8-month benchmark half-life this report predicted in November 2025 is holding, and possibly shortening. A field that replaces its measuring sticks this fast is a field where the underlying capability is genuinely moving. The saturation isn't the story. The replacement is.
          </CalloutBox>
        </Section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SECTION 2 — THE RELIABILITY PARADOX                       */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <Section title="The Reasoning Tradeoff" icon={AlertTriangle} isOpenDefault={true} id="s2">
          <div className="space-y-4 text-slate-300 leading-relaxed mb-6">
            <p>
              The models best at complex reasoning are, by a measurable margin, the most likely to hallucinate on simple grounded tasks. This isn't a coincidence — it's a documented structural pattern, and understanding it is more useful than being alarmed by it.
            </p>
            <p>
              Vectara's open hallucination leaderboard — 7,700 articles, controlled conditions, enterprise-relevant domains — found that non-reasoning models now dominate the top spots: Gemini-2.0-Flash leads at 0.7%, with several models achieving sub-1% on grounded summarisation. Most major reasoning models — GPT-5 with extended thinking, Claude with extended thinking, DeepSeek-R1 — exceeded 10% on the same task. The hypothesis is mechanically sound: reasoning models invest compute into generating internal deliberation, and that deliberation sometimes leads them to deviate from the source material rather than simply restating it.
            </p>
            <p>
              The important caveat: this isn't a universal law of reasoning. OpenAI's o3-mini achieved 0.8% on the same benchmark — showing that tightly-constrained reasoning on structured tasks can actually <strong className="text-white font-medium italic">improve</strong> grounding. The failure mode belongs to extended, open-ended chain-of-thought on retrieval tasks, not to reasoning as a category.
            </p>
            <p className="text-indigo-400 font-medium">
              This is called the Reliability Tradeoff: for grounded tasks without proper architecture, the capability curve and the reliability curve are pulling in opposite directions. The fix is architectural, not a reason to avoid reasoning models.
            </p>
          </div>

          <SplitStatDisplay
            left={{ value: "Sub-1%", label: "Non-reasoning models + o3-mini on grounded tasks", source: "Vectara HHEM Leaderboard, 7,700-article dataset" }}
            right={{ value: "10%+", label: "Extended reasoning models on the same task", source: "Same benchmark, same conditions" }}
          />

          <CalloutBox type="blue" title="The Paradox Has a Solution — But Not a Free One">
            Self-Reflective RAG in clinical settings reduces hallucination from 64% to 5.8%. Multi-agent verification systems bring enterprise rates below 2%. These systems exist. They work. The barrier is architecture, not capability. And as inference costs collapse — down 1,000x in three years — the architecture that was frontier-tier expensive in 2024 costs what a raw API call cost in 2023. <strong>The paradox is temporary. The engineering gap is the real constraint.</strong>
          </CalloutBox>
        </Section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SECTION 3 — BENCHMARKS                                    */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <Section title="The Technical Landscape: What's Live, What's Dead" icon={BarChart3} isOpenDefault={true} id="s3">
          <p className="text-sm text-slate-400 mb-6">
            Not all benchmarks are created equal. Not all scores mean what they appear to mean. Here is the current map.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
            <BenchmarkCard status="active" name="Terminal-Bench 2.0" score="78.4%" model="Gemini 3.1 Pro + Forge Code agent"
              description="89 realistic terminal tasks — software engineering, security, data science, system administration. Tests whole-system agent performance in real shell environments. Top 5 entries within 3.7pp. Scaffolding contributes 2–6 points over model alone." source="tbench.ai" />
            <BenchmarkCard status="active" name="SWE-bench Pro" score="45.9%" model="Claude Opus 4.5 (SEAL-standardised)"
              description="The honest measure of coding autonomy. Evaluated on private codebases, controlled scaffold." source="Scale AI SEAL Leaderboard" />
            <BenchmarkCard status="ceiling" name="ARC-AGI-2" score="77.1%" model="Gemini 3.1 Pro (official, semi-private)"
              description="Approaching saturation — launched March 2025, near ceiling by February 2026. With refinement harnesses: 95%+. ARC-AGI-3 now active." source="ARC Prize Foundation" />
            <BenchmarkCard status="active" name="ARC-AGI-3" score="<1% Frontier" model="Interactive environments — no instructions"
              description="LLMs score below 1%. Humans score 100%. Best result (12.58%) used CNN + RL, not a language model." source="ARC Prize, March 2026" />
            <BenchmarkCard status="contaminated" name="SWE-bench Verified" score="80.9%" model="Contamination confirmed by OpenAI audit"
              description="Every frontier model showed training data overlap. OpenAI has stopped reporting this score." source="OpenAI internal audit, 2026" />
            <BenchmarkCard status="active" name="GAIA (All Levels)" score="74.6%" model="Claude Sonnet 4.5 + HAL framework, Feb 2026"
              description="The 30-point gap between base model (44.8%, Mar 2026) and agent system on the same benchmark is the clearest demonstration of the engineering opportunity." source="awesomeagents.ai (Feb 2026); hal.cs.princeton.edu" />
            <BenchmarkCard status="retired" name="MMLU / GPQA / HumanEval"
              description="Saturated. No meaningful signal remaining. A 27-character answer-length heuristic achieves 93%+ on HaluEval without reading the question." />
          </div>

          <CalloutBox type="insight" title="Key Insight">
            The most important benchmark development of early 2026: <strong>ARC-AGI-3's launch with frontier LLMs at under 1%</strong> is not evidence that AI progress has stalled. It's evidence that the half-life thesis holds — every benchmark measuring crystallised intelligence gets saturated; the field responds by designing a harder one. <em>Predicted: 30–50% scores by end of 2026 via RL-based approaches, not LLMs.</em>
          </CalloutBox>
        </Section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SECTION 4 — CAPABILITY RADAR                              */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <Section title="Six Dimensions. Two Realities." icon={Target} isOpenDefault={true} id="s4">
          <div className="space-y-4 text-slate-300 leading-relaxed mb-6">
            <p>
              The original report tracked six capability dimensions. V1's radar measured individual model benchmarks. This one tracks what AI services actually deliver to users — regardless of whether the result comes from a base model, a RAG pipeline, or an agent harness. Six dimensions. Six things that matter to anyone relying on AI output: <strong className="text-white">Reasoning. Execution. Memory. Self-Awareness. Coherence. Reliability.</strong>
            </p>
            <p className="text-sm text-slate-400">
              The radar below shows two polygons deliberately. The inner shape is what a standard deployment delivers today — the 95% that MIT found seeing no measurable ROI. The outer shape is what the top 5% achieve with deliberate systems design. The gap between them is the engineering opportunity.
            </p>
          </div>

          <RadarChart />

          {/* Dimension Detail Cards */}
          <div className="mt-8 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">Dimension Deep Dives</h4>

            <DimensionDetailCard title="Execution" subtitle="From patch generation to end-to-end completion">
              <p>Execution measures whether an AI agent can complete real software engineering work end-to-end — not just generate a patch, but explore an environment, run commands, recover from errors, and finish the job.</p>
              <p>Two benchmarks now capture this at the system level. On SWE-bench Pro (contamination-resistant, multi-language): the best agent systems reach 57% with custom scaffolding; SEAL-standardised (fair comparison) sits at 45.9%.</p>
              <p>Terminal-Bench 2.0 measures the same capability from a different angle: 89 real terminal tasks across software engineering, security, and data science, each running in a Docker container with automated verification. There's no patch generation here — the agent must explore an unknown environment, run commands, and recover from errors autonomously. Top agent systems reach 78.4% (Gemini 3.1 Pro + Forge Code) and 74.7% (Claude Opus 4.6 + Terminus-KIRA). The same scaffolding-matters finding holds: the same model scores 2–6 points differently depending purely on agent architecture. The 65% 'Best System Today' figure for Execution blends both benchmarks across real software task types.</p>
              <p>The dominant failure mode on SWE-bench Pro is context overflow (35.6% of top-model failures) — the exact problem RL-trained search agents like WarpGrep directly address. That's why the 2027 trajectory is aggressive: the bottleneck is addressable and being addressed now.</p>
              <p className="text-xs text-slate-500 mt-2">Typical: 46 | Best System Today: 65 | 2027: 82 · Sources: Scale AI SEAL; tbench.ai leaderboard (Mar 2026); morphllm.com/terminal-bench-2</p>
            </DimensionDetailCard>

            <DimensionDetailCard title="Memory" subtitle="The fastest-moving dimension — and the most underrated">
              <p>Six months ago, memory was effectively zero for most AI services. Every session started fresh. The MIT GenAI Divide report identifies this as the #1 root cause of AI deployment failure: "systems do not retain feedback, adapt to context, or improve over time."</p>
              <p>By December 2025, Vectorize Hindsight crossed 91.4% on LongMemEval. By February 2026, Mastra's Observational Memory reports 95%+. On LOCOMO, Mem0 achieves 66.9% — 26% above OpenAI's native memory.</p>
              <p>The inner/outer track gap on Memory is the widest of any dimension, and it closes faster than any other. This is not incremental improvement — it is a capability that <strong className="text-white">didn't meaningfully exist six months ago</strong> and now has clear architectural solutions.</p>
              <p className="text-xs text-slate-500 mt-2">Standard: 47 | Well-Engineered: 89 | 2027: 95 · Sources: LongMemEval, LOCOMO, Mem0 Research, Vectorize Hindsight</p>
            </DimensionDetailCard>

            <DimensionDetailCard title="Self-Awareness" subtitle="Does the AI know what it doesn't know?">
              <p>Self-awareness (metacognition) is the ability to accurately signal uncertainty. Research distinguishes two components: <strong className="text-white">calibration</strong> (does confidence match accuracy?) and <strong className="text-white">sensitivity</strong> (can the model discriminate its correct answers from incorrect ones?).</p>
              <p>GPT-4.1 mini achieves an AUC of 0.83 on metacognitive sensitivity — an 83% chance that a correct answer is rated higher-confidence than an incorrect one. Human baseline: ~0.90–0.95. The gap matters: over-reliance on AI (an OWASP top LLM vulnerability) is directly a self-awareness problem.</p>
              <p>The harder problem: current models are systematically reluctant to express uncertainty. Training objectives reward confident guessing over calibrated abstention — models learn to bluff (Kalai & Nachum, OpenAI, arXiv:2509.04664).</p>
              <p className="text-xs text-slate-500 mt-2">Standard: 62 | Well-Engineered: 77 | 2027: 85 · Sources: Steyvers et al. 2025 (Nature Machine Intelligence); arXiv:2510.05126</p>
            </DimensionDetailCard>

            <DimensionDetailCard title="Coherence" subtitle="Maintaining the thread across a long task">
              <p>Coherence asks whether an AI sustains consistent, non-contradictory reasoning across a long agentic task — not just whether it can recall facts.</p>
              <p>The clearest whole-system measure: Claude Sonnet 4.5 achieves 74.6% overall on GAIA inside the HAL Generalist Agent framework  — the benchmark designed to test whether AI systems can handle the kind of messy, multi-step tasks that humans do every day. The gap to the 44.8% base-model score on the same benchmark is the coherence engineering dividend.</p>
              <p>At the architecture level, GAM (Global Agent Memory) exceeded 90% on RULER, the long-range state tracking benchmark, where standard RAG collapsed. But RULER is a research architecture; GAIA is the practical production measure.</p>
              <p>The 'lost in the middle' phenomenon remains real: a model claiming 200k usable tokens typically degrades around 130k, with middle-positioned content dropping to 76–82% accuracy versus 85–95% at the edges. The 2027 trajectory points toward 90% as MCP standardises tool integration and long-context handling matures.</p>
              <p className="text-xs text-slate-500 mt-2">Typical: 45 | Best System Today: 75 | 2027: 90 · Sources: awesomeagents.ai GAIA; RULER/GAM; MIT GenAI Divide</p>
            </DimensionDetailCard>

            <DimensionDetailCard title="Reliability" subtitle="Can you trust the output?">
              <p>Reliability is the dimension where the standard/well-engineered gap is most consequential. Without mitigation: 10%+ hallucination for reasoning models, 64% in medical, 69–88% in legal. With RAG and verification: sub-1% on grounded summarisation, 5.8% in clinical settings.</p>
              <p>The mechanistic cause is now understood: Knowledge FFNs inside transformers overemphasise parametric memory while Copying Heads fail to integrate retrieved context (ReDeEP, ICLR 2025 Spotlight). This is <strong className="text-white">fixable at the architecture level</strong>.</p>
              <p>With tools and search: near-perfect on SimpleQA across all frontier models. Without tools: enormous variance (Gemini 3 Pro 72.1% vs GPT-5.2 ~38%). The delta is the systems design signal.</p>
              <p className="text-xs text-slate-500 mt-2">Standard: 35 | Well-Engineered: 82 | 2027: 92 · Sources: Vectara HHEM; ReDeEP ICLR 2025; SimpleQA Verified</p>
            </DimensionDetailCard>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SECTION 5 — ECONOMIC SCENARIOS                            */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <Section title="The Barbell Economy: Confirmed. Accelerating. Compounding." icon={TrendingUp} isOpenDefault={true} id="s5">
          {/* Probability Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <ScenarioCard emoji="🐢" title="The Plateau" probability="<10%" isActive={activeEconScenario === 'A'} onClick={() => setActiveEconScenario('A')}>
              Inference costs stall. Reliability engineering harder than expected. AI stays a super-tool, not an autonomous agent. Junior hiring stabilises.
            </ScenarioCard>
            <ScenarioCard emoji="📊" title="The Barbell" probability="60%" isActive={activeEconScenario === 'B'} onClick={() => setActiveEconScenario('B')}>
              Agentic costs collapse. Junior roles decimated. Senior Orchestrators in extreme demand. Framework RAG commoditises. The engineering gap becomes the competitive moat. Revised up from 55% in V1.
            </ScenarioCard>
            <ScenarioCard emoji="⚡" title="Frictionless" probability="30%" isActive={activeEconScenario === 'C'} onClick={() => setActiveEconScenario('C')}>
              Self-correction and metacognition advances faster than expected. Architectural solutions ship in production APIs. Reliability convergence ahead of schedule. Structural unemployment across all cognitive tiers.
            </ScenarioCard>
          </div>

          {/* Scenario-dependent content */}
          <div className="mb-8 bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 transition-all">
            {activeEconScenario === 'A' && (
              <div className="space-y-3 text-sm text-slate-300 leading-relaxed animate-fade-in">
                <h5 className="text-amber-400 font-bold text-xs uppercase tracking-wider">If the Plateau holds</h5>
                <p>AI remains a productivity multiplier — not an autonomous replacement. Hiring patterns stabilise. Junior pipelines survive in most sectors. The gap between AI-native and AI-resistant organisations grows slowly rather than exponentially.</p>
                <p className="text-slate-500 text-xs">Key signal: inference costs flatten, ARC-AGI-3 remains below 15% by EOY 2026, multiple Klarna-style reversals.</p>
              </div>
            )}
            {activeEconScenario === 'B' && (
              <div className="space-y-3 text-sm text-slate-300 leading-relaxed animate-fade-in">
                <h5 className="text-indigo-400 font-bold text-xs uppercase tracking-wider">The Barbell in practice</h5>
                <p>Junior share of IT hiring: <strong className="text-white">15% → 7%</strong> in three years. Senior AI-role salaries: <strong className="text-white">+40%</strong>. Entry-level developer postings: <strong className="text-white">–67%</strong> since 2022. Salesforce: zero new engineering hires 2025. Block: workforce cut from 10,000 to under 6,000.</p>
                <p>Google's DORA 2024 report found roughly <strong className="text-white">2% productivity increase</strong> for every 25% increase in AI adoption — a gap of ~12× between executive expectation and measured engineering outcome.</p>
                <p className="text-slate-500 text-xs">Confidence: 60%, revised upward from 55% in V1. Every pillar confirmed by independent data sources.</p>
              </div>
            )}
            {activeEconScenario === 'C' && (
              <div className="space-y-3 text-sm text-slate-300 leading-relaxed animate-fade-in">
                <h5 className="text-rose-400 font-bold text-xs uppercase tracking-wider">If Frictionless arrives</h5>
                <p>Self-correcting agent architectures make hallucination largely irrelevant for structured tasks. Reliability converges with capability. Displacement extends beyond junior roles into mid-level knowledge work.</p>
                <p>This scenario requires an architectural breakthrough addressing the Knowledge FFN hallucination mechanism — no published result yet demonstrates this at scale.</p>
                <p className="text-slate-500 text-xs">Key signal: SWE-bench Pro exceeds 70%, ARC-AGI-3 50%+ by EOY 2026, published reliability breakthrough.</p>
              </div>
            )}
          </div>

          {/* Stat Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 stagger-children">
            <StatCard label="US Programmer Employment" value="–27.5%" subtext="2023–2025, BLS" trend="down" color="rose" />
            <StatCard label="Junior Share of IT Hiring" value="7%" subtext="Down from 15% in 2022" trend="down" color="amber" />
            <StatCard label="AI Postings in Insurance" value="+74%" subtext="Sector-specific surge" trend="up" color="emerald" />
          </div>

          {/* Hollow Middle Visualisation */}
          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 mb-6">
            <div className="text-center text-xs text-slate-500 mb-4 font-mono uppercase tracking-wider">Polarisation of Labour Demand</div>
            <div className="flex items-center mb-4 h-36">
              <div className="h-full flex items-center justify-center w-8">
                <span className="text-[10px] text-slate-500 font-mono -rotate-90 whitespace-nowrap tracking-widest">REL. DEMAND</span>
              </div>
              <div className="flex-1 flex items-end justify-center gap-6 h-full border-l border-b border-slate-700 pl-4 pb-2">
                <div className="flex-1 max-w-[80px] bg-emerald-500/15 border border-emerald-500/40 h-full flex flex-col justify-end p-3 text-center rounded-t-lg">
                  <span className="text-xs font-bold text-emerald-400">HIGH</span>
                  <span className="text-[10px] text-emerald-300/70 mt-1">Senior<br/>Orchestrators</span>
                </div>
                <div className="flex-1 max-w-[80px] bg-rose-500/10 border border-rose-500/20 h-[20%] flex flex-col justify-end p-2 text-center rounded-t-lg">
                  <span className="text-[10px] font-bold text-rose-400">HOLLOWED</span>
                  <span className="text-[9px] text-rose-300/70 mt-0.5">Junior / Middle</span>
                </div>
                <div className="flex-1 max-w-[80px] bg-blue-500/15 border border-blue-500/40 h-[70%] flex flex-col justify-end p-3 text-center rounded-t-lg">
                  <span className="text-xs font-bold text-blue-400">STABLE</span>
                  <span className="text-[10px] text-blue-300/70 mt-1">Physical /<br/>Compliance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Klarna Cycle Callout */}
          <CalloutBox type="amber" title="The Klarna Cycle — What Overcorrection Looks Like">
            Klarna stopped all hiring in 2023, slashed headcount from 5,500 to 3,400, and celebrated $10M in savings. By mid-2025 they were scrambling to rehire after customer satisfaction collapsed and engineers were pulled from product work to cover service. This is not evidence AI can't replace roles. <strong>It's the predictable outcome of treating AI as binary replacement rather than productivity layer.</strong> The organisations that maintained junior pipelines through 2024–2026 will have a structural talent advantage by 2028–2030. Harvard research across 62 million workers and 285,000 firms names this pattern: "seniority-biased technological change."
          </CalloutBox>

          {/* Pipeline Problem */}
          <CalloutBox type="blue" title="The Pipeline Problem">
            CS enrolment dropped 8.1% in 2025–2026 — the steepest decline of any field (National Student Clearinghouse). CS specifically fell 11.2%. 62% of computing departments report declining enrolment (CRA CERP, 133 departments). If this persists 3–4 years, the senior engineer shortage lands 2033–2037 — precisely when enterprise AI orchestration demand is projected to peak. The organisations cutting junior hiring today are trading short-term savings for a <strong>compounding strategic liability</strong>.
          </CalloutBox>

          {/* Sector Split Table */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold text-xs uppercase tracking-wider">Sector</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold text-xs uppercase tracking-wider">Junior Hiring</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold text-xs uppercase tracking-wider">Senior Demand</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold text-xs uppercase tracking-wider">Rationale</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4 text-white font-medium">Enterprise<br/><span className="text-xs text-slate-500">Finance / Insurance / Healthcare</span></td>
                  <td className="py-3 px-4 text-emerald-400">Still hiring</td>
                  <td className="py-3 px-4 text-amber-400">+40% salaries</td>
                  <td className="py-3 px-4 text-slate-400 text-xs">AI-related postings +74% YoY. Hybrid human+AI roles</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4 text-white font-medium">Startups / Tech-native</td>
                  <td className="py-3 px-4 text-rose-400">Effectively zero</td>
                  <td className="py-3 px-4 text-emerald-400">Extreme demand</td>
                  <td className="py-3 px-4 text-slate-400 text-xs">54% stopped hiring juniors because of AI (AlterSquare, March 2026)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-white font-medium">Regulated<br/><span className="text-xs text-slate-500">Legal / Healthcare / Finance</span></td>
                  <td className="py-3 px-4 text-blue-400">Maintaining pipelines</td>
                  <td className="py-3 px-4 text-amber-400">Growing</td>
                  <td className="py-3 px-4 text-slate-400 text-xs">Regulatory accountability requires auditable human decision chains at every level</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SECTION 6 — MECHANISMS & TIMELINE                         */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <Section title="How We Get From Here to 2027" icon={Cpu} isOpenDefault={true} id="s6">
          {/* Vertical Timeline */}
          <div className="relative border-l-2 border-slate-700 pl-8 space-y-10 mb-10">
            {[
              { year: 'Late 2025', status: 'Realised', color: 'bg-emerald-500', desc: 'The Agentic Era. Reasoning tokens standard. Document AI solved. The bottleneck moved from capability to deployment.' },
              { year: '2026', status: 'Now', color: 'bg-indigo-500', desc: 'The Engineering Year. Framework RAG commoditises. SWE-bench Pro becomes the honest coding measure. ARC-AGI-3 defines the new reasoning frontier. The "Hollow Middle" crystallises in labour data.' },
              { year: 'EOY 2026', status: 'Projected — Base Case', color: 'bg-amber-500', desc: 'Coding autonomy crosses 70% on contamination-resistant benchmarks. ARC-AGI-3 reaches 30–50% via RL approaches. Memory and context coherence become table-stakes enterprise features. First AI preceptorship programmes announced publicly.' },
              { year: '2027', status: 'Scenario-Dependent', color: 'bg-rose-500', desc: 'Outcomes diverge based on whether the engineering gap closes, widens, or becomes irrelevant. Conservative: moats harden. Base case: system engineering becomes the differentiator. Accelerated: reliability converges ahead of schedule.' },
            ].map((node, i) => (
              <div key={i} className="relative">
                <div className={`absolute -left-[41px] top-1 h-5 w-5 rounded-full ${node.color} border-4 border-slate-950 shadow-lg`} />
                <div className="flex items-baseline gap-3 mb-1">
                  <h4 className="text-white font-bold text-lg">{node.year}</h4>
                  <span className="text-xs text-slate-500 font-mono uppercase">{node.status}</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{node.desc}</p>
              </div>
            ))}
          </div>

          {/* Scaling Law Cards */}
          <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">The Convergence Mechanisms</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: Zap, color: 'text-amber-400', title: 'Inference Cost Collapse', desc: 'Inference costs have fallen ~280× between November 2022 and October 2024 (Stanford AI Index). The cost of running 5 verification passes today equals the cost of 1 pass 18 months ago. Two-thirds of all AI compute is now inference, up from one-third in 2023.' },
              { icon: RotateCcw, color: 'text-emerald-400', title: 'Synthetic Data Verification', desc: 'The data wall is permeable. Models that verify their own outputs — the DeepSeek-R1 / ARC refinement loop pattern — generate synthetic training signal without human annotation. DeepSeek-R1 trained for $294K using RL on synthetic data — frontier capability at <5% of proprietary cost.' },
              { icon: Layers, color: 'text-indigo-400', title: 'Multimodal / Document AI', desc: 'Enterprise document workflows broadly unlocked. Multimodal parsing effectively solved for standard formats. Entire categories of knowledge-worker tasks are economically automatable today — the barrier is implementation, not capability.' },
              { icon: Database, color: 'text-blue-400', title: 'Memory as Infrastructure', desc: 'Graph memory in AI agents moved from experimental to production in early 2026. The Model Context Protocol (MCP), adopted by OpenAI, Google, Microsoft, and donated to the Linux Foundation in January 2026, is becoming the USB-C of AI agent integration — one protocol, works everywhere. The practical effect: Claude Sonnet 4.5 achieves 74.6% on GAIA overall inside the HAL framework, versus 44.8% for the same benchmark run with minimal tooling. Memory architecture is now the gap between typical and best deployment — not model capability.' },
              { icon: Globe, color: 'text-rose-400', title: 'Open-Source Parity', desc: 'NEW — not in V1. MiniMax M2.5: 80.2% SWE-bench Verified (#4 globally). 434 open-source vs 217 closed-source API models (Dec 2025). DeepSeek-V3 at $0.27/M tokens. Self-hosted RAG pipelines with open models are now cost-competitive with proprietary APIs.' },
            ].map((card, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 hover:border-slate-600/50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg bg-slate-900/50 ${card.color}`}>
                    <card.icon size={18} />
                  </div>
                  <h5 className="text-white font-bold">{card.title}</h5>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SECTION 7 — 2027 SCENARIOS                                */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <Section title="Where This Goes Next" icon={Compass} isOpenDefault={true} id="s7">
          <p className="text-sm text-slate-400 mb-6 leading-relaxed">
            Three scenarios for how AI deployment evolves from here. These aren't predictions — they're structured possibilities, each grounded in current data and trajectories. The base case is what the evidence currently points to; the other two map what happens if key assumptions break.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <ScenarioCard emoji="🐢" title="Conservative" probability="~25%" horizon="EOY 2027" headline="Progress slows. The gap between typical and best systems widens rather than narrows."
              isActive={active2027Scenario === 'conservative'} onClick={() => setActive2027Scenario('conservative')}>
              SWE-bench Pro stalls below 60%. ARC-AGI-3 proves harder than ARC-AGI-2's trajectory implies — interactive environments require architectural innovation, not just more compute. Reliability engineering slower to commoditise than projected. Junior hiring stabilises at 7% share. The engineering gap becomes a permanent moat rather than a temporary transition.
            </ScenarioCard>
            <ScenarioCard emoji="📈" title="Base Case" probability="~55%" horizon="Q2 2027" headline="System engineering becomes the primary competitive differentiator in AI deployment."
              isActive={active2027Scenario === 'base'} onClick={() => setActive2027Scenario('base')}>
              SWE-bench Pro reaches 60–70% with best agent systems. ARC-AGI-3 approaches 30–50% by Q1 2027 via RL/CNN approaches. Memory and coherence become table-stakes enterprise features as MCP and framework RAG mature. Junior share falls to 3–5%. System engineering becomes the primary competitive differentiator. Parametric factuality hits 75–80% for top models.
            </ScenarioCard>
            <ScenarioCard emoji="🚀" title="Accelerated" probability="~20%" horizon="EOY 2026 → 2027" headline="Reliability convergence ahead of schedule. Regulated sectors unlock at scale."
              isActive={active2027Scenario === 'accelerated'} onClick={() => setActive2027Scenario('accelerated')}>
              SWE-bench Pro exceeds 70% by Q3 2026. ARC-AGI-3 cracks 50%+ by EOY 2026. Architectural reliability solutions (AARF-class) ship in production APIs. Junior developer roles largely automated in tech-native firms. CS enrolment collapse triggers policy response. Inference cost-per-task falls below $0.10 at frontier quality.
            </ScenarioCard>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SECTION 8 — IMPLICATIONS BY ACTOR                         */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <Section title="8 · What This Means for You" icon={Users} isOpenDefault={true} id="s8">
          <p className="text-sm text-slate-400 mb-6 leading-relaxed italic">
            The actor-specific actions below apply under the Base Case scenario. The final section of this report looks further out — at the structural shift that sits beyond the scenarios.
          </p>
          <TabComponent tabs={[
            {
              label: 'Enterprise',
              title: 'Enterprise Leaders',
              content: (
                <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                  <div>
                    <h5 className="text-indigo-400 font-bold text-xs uppercase tracking-wider mb-2">Reading the current moment</h5>
                    <p>Your AI deployment ROI problem is not a model problem. It's an architecture problem. 95% of 2025 enterprise GenAI projects saw no measurable ROI (MIT). The organisations getting results are running engineered systems — RAG, verification loops, memory infrastructure — not raw API calls.</p>
                  </div>
                  <div>
                    <h5 className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">Next quarter</h5>
                    <p>Audit your existing AI deployments against the Base vs. System-Level gap. Identify which workflows are running raw model calls where they should be running grounded, verified pipelines. The cost to fix this has fallen 10x in 18 months.</p>
                  </div>
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
                    <p>The benchmark contamination story is the most important thing to understand for competitive positioning. Companies still using SWE-bench Verified scores to evaluate coding capability are making decisions on a compromised signal. SWE-bench Pro is the honest measure.</p>
                  </div>
                  <div>
                    <h5 className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">Next quarter</h5>
                    <p>Add metacognition and context coherence to your AI vendor evaluation criteria. A model that knows what it doesn't know is worth more to an enterprise deployment than a model that scores 5% higher on a saturated benchmark.</p>
                  </div>
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
                    <p>The junior role compression is real, structural, and accelerating. The junior share of IT hiring fell from 15% to 7% in three years. But the organisations cutting junior hiring are creating a compounding talent shortage they will pay for in 2028–2030.</p>
                  </div>
                  <div>
                    <h5 className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">Next quarter</h5>
                    <p>Position around orchestration, not execution. The AI-native junior of 2026 needs the system-design understanding of a 2020 mid-level engineer. The skills that matter: knowing when to distrust AI output, managing multi-agent workflows, and understanding enough about memory and retrieval architecture to specify what a system should do.</p>
                  </div>
                </div>
              )
            },
            {
              label: 'Education',
              title: 'Educators & Policymakers',
              content: (
                <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                  <div>
                    <h5 className="text-indigo-400 font-bold text-xs uppercase tracking-wider mb-2">Reading the current moment</h5>
                    <p>CS enrolment dropped 8.1% in 2025–2026 — the steepest decline of any field of study (National Student Clearinghouse). 62% of computing departments report declining enrolment. This is the compounding risk nobody is pricing. A generation that doesn't learn to code produces no senior engineers in 2032.</p>
                  </div>
                  <div>
                    <h5 className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">Next quarter</h5>
                    <p>The framing for CS education needs to shift from "will AI replace developers" to "what does a developer do when AI writes the code." The answer — system design, verification, orchestration, trust calibration — is harder to teach than syntax, and more valuable.</p>
                  </div>
                </div>
              )
            },
          ]} />
        </Section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SECTION 9 — THE EPISTEMIC FLOOD                           */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <SpeculativeSection title="9 · The Epistemic Flood" tag="Speculative Analysis" id="s9">
          <p className="text-xl text-slate-200 font-light leading-relaxed mb-8 max-w-4xl">
            The industry has largely misunderstood the end-state of the inference cost collapse. The popular "Dead Internet" framing assumed a future choked by low-quality synthetic spam. The data from 2025–2026 points toward something structurally different: a web saturated by <strong className="text-white">high-quality</strong>, hyper-abundant synthetic intelligence.
          </p>
          <p className="text-xl text-slate-200 font-light leading-relaxed mb-8 max-w-4xl">
            When the cost of a multi-pass RAG verification loop drops to near-zero and tools like MCP standardise agentic memory, the bottleneck in human progress is no longer production. It is consumption and verification.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-indigo-400 uppercase mb-4 block">Already Visible</span>
              <h3 className="text-xl font-bold text-white mb-4">What the leading edge looks like</h3>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>Scientific journals are receiving AI-assisted research at volumes that have prompted formal policy responses from Nature, Science, and IEEE — not because the papers are obviously bad, but because peer review infrastructure was built for human-scale throughput.</p>
                <p>Legal workflows are beginning to encounter AI-generated filings and arguments at a pace that outstrips case preparation timelines designed for human researchers.</p>
                <p>Enterprise knowledge workers increasingly find themselves in an auditing role rather than a production role. The output rate of well-engineered AI systems is now structurally mismatched with the processing rate of human institutions built to review them.</p>
                <p className="text-indigo-400 font-medium italic">The bottleneck has moved. It moved quietly, and most organisations have not yet noticed.</p>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-rose-400 uppercase mb-4 block">The Longer Horizon</span>
              <h3 className="text-xl font-bold text-white mb-4">Where the trajectory leads</h3>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>The longer-horizon implication — and this is speculative, not forecast — is that the ultimate resolution to the Barbell Economy may not be humans orchestrating AI. It may be the emergence of agent-to-agent verification layers: systems that generate, review, and challenge output before it reaches human attention at all.</p>
                <p>MCP provides a technical substrate for exactly this kind of chained agent interaction. It is already doing so at small scale.</p>
                <p>The human role at the top of the barbell then shifts. Not to read the output. To set the parameters — and to decide which outputs ever reach a human at all.</p>
              </div>
            </div>
          </div>

          <HorizonWatch 
            title="HORIZON WATCH — Signals to Track"
            subtitle="Rather than a probability timeline, these are the empirical signals that indicate whether this trajectory is accelerating, stalling, or reversing."
            columns={[
              {
                label: "↑ Accelerating",
                color: "green",
                items: [
                  "Journal submission policies shift from volume caps to mandatory AI disclosure requirements",
                  "First major appellate ruling on legal weight of AI-generated evidence or filings",
                  "MCP adoption crosses majority of frontier model providers (already true, Q1 2026)",
                  "First enterprise publicly announces an agent-to-agent review layer in a regulated workflow"
                ]
              },
              {
                label: "→ Stalling",
                color: "amber",
                items: [
                  "Hallucination rates in agent-to-agent chains prove harder to control than single-model grounded tasks",
                  "Regulatory intervention mandates human sign-off on AI-generated scientific or legal output",
                  "Context coherence failures in multi-agent pipelines emerge as the dominant bottleneck",
                  "MCP fragmentation — competing standards slow interoperability"
                ]
              },
              {
                label: "↓ Reversing",
                color: "red",
                items: [
                  "Evidence that human verification is faster or more accurate than agent verification at meaningful scale",
                  "Open-source AI-content detection achieves reliable detection rates across domains",
                  "Major institutional failures attributed directly to agent-to-agent output cause regulatory retrenchment"
                ]
              }
            ]}
          />

          <div className="mt-20 mb-12 text-center max-w-2xl mx-auto space-y-4">
            <p className="text-lg text-slate-300 italic leading-relaxed">
              This section does not carry probability estimates. The mechanisms described are emergent; the timeline and scale are genuinely uncertain. The signals above are what to watch — not what to predict.
            </p>
            <p className="text-lg text-slate-300 italic leading-relaxed">
              The rest of this report is grounded in data. This section is grounded in the direction the data is pointing.
            </p>
          </div>

          <div className="pt-8 border-t border-slate-800 text-[10px] text-slate-500 font-mono space-y-1">
            <p>Related reading: Nature editorial policies on AI-assisted submissions (2025); IEEE guidelines on generative AI disclosure;</p>
            <p>Linux Foundation MCP specification (Jan 2026); Sphere Inc. "The Year of Context / The Year of Coherence" enterprise analysis (2025–2026).</p>
          </div>
        </SpeculativeSection>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* FOOTER — METHODOLOGY & SOURCES                            */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-sm text-slate-400 leading-relaxed mb-6">
            This brief synthesises publicly available benchmark data, peer-reviewed research, and labour market statistics current as of April 4, 2026. Full data sources, corrected figures from the November 2025 report, and extended analysis of each section are available in the supporting data document.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-500/10 border border-indigo-500/30 rounded-xl text-sm text-indigo-400 hover:bg-indigo-500/20 transition-colors">
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
