export const content = {
  // HERO
  heroSubheading: {
    expert: "Capability is no longer what's holding AI back. System engineering and talent are — whether you're building, investing, hiring, or deciding what to study next.",
    essentials: "AI can do the work. That's no longer the question. The question is whether the people and systems around it are good enough to keep up — and right now, most aren't."
  },

  // SECTION 1
  s1IntroP1: {
    expert: "AI coding capability has advanced faster in the past six months than in the three years before it. Models now handle nearly half of enterprise-grade software engineering tasks under contamination-resistant conditions.",
    essentials: "AI can now complete close to half of real-world software development tasks without a human — and it got there faster in the last six months than in the three years before that."
  },
  s1IntroP2: {
    expert: "The most widely cited number — 80.9% on SWE-bench Verified — is measured on a benchmark that OpenAI's own audit found contaminated. On the contamination-resistant version (SWE-bench Pro), the number is 45.9%. Both are real. Only one is honest.",
    essentials: "The headline number most companies quote — 80.9% — comes from a test that's been compromised by the AI companies themselves training on it. The clean, independent measure is 45.9%. Both numbers are real. Only one is useful for making decisions."
  },
  s1Callout1: {
    expert: "The gap that matters most isn't Verified vs. Pro. It's SEAL vs. custom. Three different agent systems running the same base model (Claude Opus 4.5) scored between 50.2% and 55.4% on SWE-bench Pro. The 5–10 point spread comes entirely from agent architecture — not the model.",
    essentials: "The same underlying AI, wrapped three different ways, scored between 50.2% and 55.4% on the same test. The difference isn't the AI — it's the system built around it."
  },

  // SECTION 2
  s2Intro: {
    expert: "Models best at complex reasoning are, by a measurable margin, the most likely to hallucinate on grounded tasks. Gemini-2.0-Flash leads at 0.7% hallucination; most reasoning models exceed 10% on the same task (Vectara HHEM). Exception: o3-mini at 0.8% shows constrained reasoning can improve grounding.",
    essentials: "The AI models best at complex thinking are also the most likely to confidently make things up when answering basic factual questions. More powerful doesn't mean more honest."
  },
  s2Fix: {
    expert: "The fix is architectural. Self-Reflective RAG reduces hallucination from 64% to 5.8%. Multi-agent verification brings enterprise rates below 2%. Inference costs have collapsed 1,000×.",
    essentials: "The fix isn't a better AI model — it's a better system design. The right architecture can reduce errors from 64% down to under 6%. Running costs for AI have also fallen dramatically — roughly 1,000 times cheaper than three years ago."
  },

  // SECTION 3
  s3Title: {
    expert: "The Technical Landscape: What's Live, What's Dead",
    essentials: "Where AI Actually Stands"
  },
  s3Context: {
    expert: "Not all benchmarks are created equal. Not all scores mean what they appear to mean. Here is the current map.",
    essentials: "Not every AI test score you'll see quoted this year is worth trusting. Here's the current map — what's live, what's broken, and what's been retired. Green = actively measuring the frontier. Red = compromised — don't use for decisions."
  },

  // SECTION 4
  s4ContextLine: {
    expert: "",
    essentials: "'Typical' is what most companies are actually running today. 'Best System Today' is what the top 5% of well-engineered deployments achieve. The gap between them is not a model problem — it's a design and architecture problem."
  },
  s4Footnote: {
    expert: "*Reliability is domain-dependent. Legal floors at 12%, while Medical RAG achieves 57% Best System today.*",
    essentials: "*Reliability varies heavily by industry. Legal AI is the least reliable (12% floor); medical AI with the right setup reaches 57%.*"
  },

  // SECTION 5
  s5ScenarioPlateau: {
    expert: "Inference costs stall. Outlier given 57% production rate (LangChain).",
    essentials: "AI progress slows and costs stop falling. Unlikely given current data."
  },
  s5ScenarioBarbell: {
    expert: "Agentic costs collapse. Confirmed by 2026 adoption data.",
    essentials: "AI takes over routine work; senior roles become more valuable. Already happening."
  },
  s5ScenarioFrictionless: {
    expert: "Self-correction advances. Blocked by quality barriers (32%).",
    essentials: "AI handles almost everything end-to-end. Possible but blocked by reliability problems."
  },
  s5ScenarioDetails: {
    A: {
      expert: {
        title: "If the Plateau holds",
        p1: "AI remains a productivity multiplier — not an autonomous replacement. Hiring patterns stabilise. Junior pipelines survive in most sectors. The gap between AI-native and AI-resistant organisations grows slowly rather than exponentially.",
        signal: "Key signal: inference costs flatten, ARC-AGI-3 remains below 15% by EOY 2026, multiple Klarna-style reversals."
      },
      essentials: {
        title: "If progress slows",
        p1: "AI stays as a helper tool rather than a replacement for workers. Companies keep hiring juniors, and the shift to AI happens much more slowly. The difference between companies that use AI and those that don't doesn't grow as fast.",
        signal: "Key signal: AI costs stop falling and new capability tests show little improvement."
      }
    },
    B: {
      expert: {
        title: "The Barbell in practice",
        p1: "Junior share of IT hiring: 15% → 7% in three years. Senior AI-role salaries: +40%. Entry-level developer postings: –67% since 2022. Salesforce: zero new engineering hires 2025. Block: workforce cut from 10,000 to under 6,000.",
        p2: "Google's DORA 2024 report found roughly 2% productivity increase for every 25% increase in AI adoption — a gap of ~12× between executive expectation and measured engineering outcome.",
        signal: "Confidence: 60%, revised upward from 55% in V1. Every pillar confirmed by independent data sources."
      },
      essentials: {
        title: "How the 'Barbell' works",
        p1: "The share of junior hiring has halved in three years, while senior salaries are up 40%. Large tech companies like Salesforce have stopped hiring new engineers entirely for periods. The middle is being hollowed out.",
        p2: "Current data shows a massive gap between how much executives expect AI to help and how much it actually improves productivity in real-world teams.",
        signal: "This is the most likely scenario based on all current industry data."
      }
    },
    C: {
      expert: {
        title: "If Frictionless arrives",
        p1: "Self-correcting agent architectures make hallucination largely irrelevant for structured tasks. Reliability converges with capability. Displacement extends beyond junior roles into mid-level knowledge work.",
        p2: "This scenario requires an architectural breakthrough addressing the Knowledge FFN hallucination mechanism — no published result yet demonstrates this at scale.",
        signal: "Key signal: SWE-bench Pro exceeds 70%, ARC-AGI-3 50%+ by EOY 2026, published reliability breakthrough."
      },
      essentials: {
        title: "If AI becomes seamless",
        p1: "Systems that can check their own work solve most reliability problems. AI becomes as reliable as it is capable. This starts affecting not just juniors but experienced middle-management roles too.",
        p2: "This would require a major technical breakthrough in how AI handles facts, which hasn't happened at scale quite yet.",
        signal: "Key signal: AI starts passing the hardest technical and reasoning tests with very high scores."
      }
    }
  },
  s5Pipeline: {
    expert: "The Pipeline Problem: CS enrolment dropped 8.1% in 2025–2026 — the steepest decline of any field. If this persists, senior engineer shortage lands 2033–2037.",
    essentials: "A second problem is building quietly: fewer students are choosing to study computer science — the steepest drop of any field. If that continues, there won't be enough senior engineers to meet demand by the mid-2030s."
  },
  s5Klarna: {
    expert: "Klarna stopped all hiring in 2023, slashed headcount from 5,500 to 3,400, and celebrated $10M in savings. By mid-2025 they were scrambling to rehire after customer satisfaction collapsed and engineers were pulled from product work to cover service. This is not evidence AI can't replace roles. It's the predictable outcome of treating AI as binary replacement rather than productivity layer. The organisations that maintained junior pipelines through 2024–2026 will have a structural talent advantage by 2028–2030. Harvard research across 62 million workers and 285,000 firms names this pattern: \"seniority-biased technological change.\"",
    essentials: "The most famous case of over-reliance on AI is Klarna. They stopped all hiring and cut their team drastically, only to have to scramble to rehire when customer satisfaction fell and their remaining engineers were overwhelmed. This happens when companies treat AI as a complete replacement for people rather than a tool to make teams better. The companies that kept hiring and training junior staff through 2025 will be the ones with the best talent in 2028."
  },

  // SECTION 6
  s6Intro: {
    expert: "The Convergence Mechanisms:",
    essentials: "Five things driving this forward:"
  },
  s6Mechanisms: {
    costCollapse: {
      expert: "Inference Cost Collapse — 280× drop since Nov 2022",
      essentials: "Running AI has become 280 times cheaper since 2022. More passes, more verification, same cost."
    },
    syntheticData: {
      expert: "Synthetic Data Verification — DeepSeek-R1 trained for $294K",
      essentials: "New AI models can now be trained for the cost of a senior engineer's annual salary ($294K)."
    },
    multimodal: {
      expert: "Multimodal / Document AI — Enterprise workflows broadly unlocked",
      essentials: "AI can now read, process and act on documents, images and data — not just text prompts."
    },
    memory: {
      expert: "Memory as Infrastructure — MCP adopted by OpenAI, Google, Microsoft; Claude Sonnet 4.5 achieves 74.6% on GAIA via HAL framework vs 44.8% base model",
      essentials: "AI now has persistent memory across sessions. The difference this makes is large: the same AI goes from 44.8% to 74.6% accuracy when it can remember and plan across steps."
    },
    openSource: {
      expert: "Open-Source Parity & The Action Moat — The Data Moat is dead; competitive advantage has shifted to \"Action Moats\" (integrations, tools, and MCP ecosystems). 434 open-source vs 217 closed-source API models.",
      essentials: "Free, open AI models now match paid ones on almost every test. The competitive edge shifts to integrations and workflows built around the AI — not the AI itself."
    }
  },

  // SECTION 7
  s7Methodology: {
    expert: "The 60% Base Case weight reflects that both the capability trajectory (SWE-bench Pro doubling in 12 months) and the adoption signals (57% of practitioners with agents in production, Gartner's 40% enterprise prediction for EOY 2026) are on track, while the known structural friction — quality as the persistent production blocker — prevents this from being the Accelerated scenario.",
    essentials: "The most likely outcome gets 60% because the capability improvements and real-world adoption are both on track — but persistent reliability problems in production prevent this from being the fastest scenario."
  },
  s7Triggers: {
    conservative: {
      expert: "Capability plateau below 45% on SWE-bench Pro SEAL.",
      essentials: "AI stops meaningfully improving on independent tests."
    },
    base: {
      expert: "SWE-bench Pro 60–70%. Gartner 40% enterprise adoption.",
      essentials: "AI handles 60–70% of software tasks. 4 in 10 large companies actively using AI agents."
    },
    accelerated: {
      expert: "32% Quality barrier resolved. ARC-AGI-3 cracks 30%+.",
      essentials: "Reliability problems get solved. AI cracks the next generation of reasoning tests."
    }
  },

  s4Dimensions: {
    execution: {
      expert: {
        p1: "Execution measures whether an AI agent can complete real software engineering work end-to-end — not just generate a patch, but explore an environment, run commands, recover from errors, and finish the job.",
        p2: "Two benchmarks now capture this at the system level. On SWE-bench Pro (contamination-resistant, multi-language): the best agent systems reach 57% with custom scaffolding; SEAL-standardised (fair comparison) sits at 45.9%.",
        p3: "Terminal-Bench 2.0 measures the same capability from a different angle: 89 real terminal tasks across software engineering, security, and data science, each running in a Docker container with automated verification. There's no patch generation here — the agent must explore an unknown environment, run commands, and recover from errors autonomously. Top agent systems reach 78.4% (Gemini 3.1 Pro + Forge Code) and 74.7% (Claude Opus 4.6 + Terminus-KIRA).",
        p4: "The dominant failure mode on SWE-bench Pro is context overflow (35.6% of top-model failures) — the exact problem RL-trained search agents like WarpGrep directly address. That's why the 2027 trajectory is aggressive: the bottleneck is addressable and being addressed now."
      },
      essentials: {
        p1: "Execution measures whether an AI can actually finish the job — not just suggest a fix, but jump into the environment, run the necessary commands, and verify it worked.",
        p2: "Today's best systems can handle about 46% to 65% of these tasks autonomously. The difference isn't the AI model itself, but the tools built around it. When the system is well-designed, the same AI performs significantly better.",
        p3: "The main reason AI currently fails on large projects is that it 'loses the thread' when there's too much information to process at once. New types of search tools are already solving this, which is why we expect this capability to grow rapidly in 2027."
      }
    },
    memory: {
      expert: {
        p1: "Six months ago, memory was effectively zero for most AI services. Every session started fresh. The MIT GenAI Divide report identifies this as the #1 root cause of AI deployment failure: \"systems do not retain feedback, adapt to context, or improve over time.\"",
        p2: "By December 2025, Vectorize Hindsight crossed 91.4% on LongMemEval. By February 2026, Mastra's Observational Memory reports 95%+. On LOCOMO, Mem0 achieves 66.9% — 26% above OpenAI's native memory.",
        p3: "The inner/outer track gap on Memory is the widest of any dimension, and it closes faster than any other. This is not incremental improvement — it is a capability that didn't meaningfully exist six months ago and now has clear architectural solutions."
      },
      essentials: {
        p1: "Six months ago, AI forgot everything between sessions. This was the number one reason companies struggled to use it for real work: the systems didn't learn from feedback or adapt to how you work.",
        p2: "By December 2025, the best memory systems crossed 91% accuracy on independent long-term memory tests. This capability went from essentially zero to near-solved in under six months.",
        p3: "This isn't just a small step forward — it's a completely new capability that finally allows AI to remember your preferences and your data across different tasks."
      }
    },
    confidence: {
      expert: {
        p1: "Confidence calibration (metacognition) is the ability to accurately signal uncertainty. Research distinguishes two components: calibration (does confidence match accuracy?) and sensitivity (can the model discriminate its correct answers from incorrect ones?).",
        p2: "GPT-4.1 mini achieves an AUC of 0.83 on metacognitive sensitivity — an 83% chance that a correct answer is rated higher-confidence than an incorrect one. Human baseline: ~0.90–0.95. The gap matters: over-reliance on AI (an OWASP top LLM vulnerability) is directly a self-awareness problem.",
        p3: "The harder problem: current models are systematically reluctant to express uncertainty. Training objectives reward confident guessing over calibrated abstention — models learn to bluff (Kalai & Nachum, OpenAI, arXiv:2509.04664)."
      },
      essentials: {
        p1: "Does the AI know when it's wrong? Most models learn to sound confident regardless of accuracy — a habit baked in by how they're trained. They're often rewarded for guessing rather than admitting they don't know.",
        p2: "The best-engineered deployments can correct for this, helping the AI signal when it's unsure so humans know when to double-check. Closing this gap is critical for safety and reliability."
      }
    },
    coherence: {
      expert: {
        p1: "Coherence asks whether an AI sustains consistent, non-contradictory reasoning across a long agentic task — not just whether it can recall facts.",
        p2: "The clearest whole-system measure: Claude Sonnet 4.5 achieves 74.6% overall on GAIA inside the HAL Generalist Agent framework — the benchmark designed to test whether AI systems can handle the kind of messy, multi-step tasks that humans do every day. The gap to the 44.8% base-model score on the same benchmark is the coherence engineering dividend.",
        p3: "The 'lost in the middle' phenomenon remains real: a model claiming 200k usable tokens typically degrades around 130k, with middle-positioned content dropping to 76–82% accuracy versus 85–95% at the edges. The 2027 trajectory points toward 90% as MCP standardises tool integration and long-context handling matures."
      },
      essentials: {
        p1: "Coherence is about whether an AI can stay on track throughout a long, complex project without contradicting itself or getting confused.",
        p2: "Performance starts to degrade on very long tasks — the AI loses the thread the further it gets from where it started. Today's best setups use specialized frameworks to help the AI 'stay in character' and remember the plan, raising accuracy from 44% to over 74%.",
        p3: "As tools for managing these long tasks become standard, we expect AI to handle massive projects with the same consistency humans expect from a senior colleague."
      }
    },
    reliability: {
      expert: {
        p1: "Reliability is the dimension where the standard/well-engineered gap is most consequential. Without mitigation: 10%+ hallucination for reasoning models, 64% in medical, 69–88% in legal. With RAG and verification: sub-1% on grounded summarisation, 5.8% in clinical settings.",
        p2: "The mechanistic cause is now understood: Knowledge FFNs inside transformers overemphasise parametric memory while Copying Heads fail to integrate retrieved context (ReDeEP, ICLR 2025 Spotlight). This is fixable at the architecture level.",
        p3: "With tools and search: near-perfect on SimpleQA across all frontier models. Without tools: enormous variance (Gemini 3 Pro 72.1% vs GPT-5.2 ~38%). The delta is the systems design signal."
      },
      essentials: {
        p1: "Reliability is where engineering makes the biggest difference. Without the right setup, AI can be 'confidently wrong' up to 64% of the time in fields like medicine or law.",
        p2: "By connecting the AI to real-time information and adding a second AI to check its work, these error rates can be cut to under 1%. This isn't a problem with the AI itself — it's a problem with how it's being used.",
        p3: "The goal for 2027 is 'near-perfect' reliability for most business tasks, achieved by moving from simple chat boxes to sophisticated, self-checking systems."
      }
    }
  },

  // SECTION 8 (THE EPISTEMIC FLOOD)
  s8_8_1: {
    expert: {
      p1: "The signals are no longer emerging. They are measurable, institutional, and accelerating. In scientific publishing, NeurIPS received 21,575 submissions in 2025—more than double its 2020 volume. ICLR 2026 reported a 70% year-on-year increase in submissions, nearly 20,000 papers. When 21% of ICLR's peer reviews were found to be fully AI-generated, arXiv changed its endorsement policy to stem what it explicitly called a \"flood of low-quality submissions.\"",
      p2: "In legal practice, a researcher at HEC Paris tracking AI-related court sanctions globally counts more than 1,200 cases. By late 2025, the rate had reached two to three cases per day. In March 2026, a DOJ attorney's brief was found to contain fabricated quotes and misstated case law—identified not by opposing counsel, but by a retired Air Force colonel who knew the regulatory text didn't \"read right.\""
    },
    essentials: {
      p1: "The problem isn't theoretical. Scientific journals are receiving twice the papers they did five years ago, with one in five conference peer reviews now written by AI.",
      p2: "Courts are processing a wave of legal filings containing fabricated citations — a problem that went from 2 cases a week to 2–3 cases a day in late 2025. In one case, a DOJ attorney filed a brief with invented case law. The person who caught it wasn't a judge or opposing lawyer — it was the plaintiff, a retired military colonel, who simply knew the language didn't read right."
    }
  },
  s8_8_2: {
    expert: {
      p1: "the standard framing treats the Epistemic Flood as a consequence of AI generating bad content. Fix the reliability, fix the flood. But well-architected deployments are already approaching very low hallucination rates (Section 4). The paradox is that a flood of reliable synthetic content breaks institutions just as surely as unreliable content.",
      p2: "Every institution built on the assumption of human-scale content production has implicit throughput limits baked into its design—\"load-bearing walls.\" Remove them, and the structure responds the same way. The scarcity of expert attention is fixed regardless of content quality. When volume scales 10x, the verification burden on humans increases absolutely."
    },
    essentials: {
      p1: "The intuitive fix — make AI more reliable — doesn't solve this. Even perfectly accurate AI breaks institutions that were built around human-scale production.",
      p2: "Peer review wasn't designed for 20,000 papers. Courts weren't designed for AI-speed legal drafting. Volume overwhelms the system regardless of quality. Expert attention is fixed. Content is not."
    }
  },
  s8_8_3: {
    expert: {
      p1: "If production is automated, verification must follow. We see this in legal \"Hyperlink Rules\"—requiring litigants to hyperlink every citation to an authoritative source at the point of filing. A hallucinated case cannot be hyperlinked because it does not exist. This is human-enforced verification designed in response to machine-generated production.",
      p2: "In scientific publishing, researchers are proposing machine-readable \"structured appendices\" that transform manuscripts into queryable, executable research environments—making computational claims directly verifiable by automated systems rather than trusting human reviewers to catch errors in prose."
    },
    essentials: {
      p1: "The response emerging across industries is the same: if AI produces, something must verify. Courts are proposing rules that force lawyers to link every citation to a real, checkable source before filing.",
      p2: "Scientific publishing is moving toward machine-readable papers that automated systems can directly verify. In enterprise AI, automated production forces automated verification. The human role shifts to setting the rules."
    }
  },
  s8HorizonWatch: {
    accelerating: {
      expert: [
        "AI-disclosure mandates adopted in major journals (Nature/Science 2026)",
        "Appellate rulings treating AI-generated filings as 'per se sanctionable'",
        "Enterprise agent-to-agent verification layers reaching production at scale",
        "Institutional submission caps imposed in response to volume"
      ],
      essentials: [
        "Journals start requiring AI disclosure.",
        "Courts issue binding rulings on AI filings.",
        "Companies deploy AI-checks-AI systems at scale.",
        "Institutions cap submission volumes."
      ]
    },
    stalling: {
      expert: [
        "Multi-agent verification proves harder to scale than anticipated",
        "Regulatory mandates require human sign-off at every production step",
        "MCP ecosystem fragmentation creates incompatible verification standards",
        "Context coherence failures emerge as the dominant multi-agent bottleneck"
      ],
      essentials: [
        "AI verification systems prove hard to scale.",
        "Regulators require a human in the loop at every step.",
        "Tool ecosystems fragment.",
        "The system struggles to keep track of complex, multi-step tasks."
      ]
    },
    reversing: {
      expert: [
        "Human verification proves faster and more accurate than automated alternatives",
        "Reliable AI-content detection matures across specific domains",
        "Institutions adapt throughput capacity rather than changing verification architecture",
        "Documented 'reversals' (e.g. Klarna Section 3) where human judgment is re-instated"
      ],
      essentials: [
        "Human review turns out to be faster and better than automated alternatives.",
        "Reliable AI-content detection matures for specific areas.",
        "Institutions adapt their capacity instead of changing their systems.",
        "Human judgment is re-instated in complex domains (like the Klarna example)."
      ]
    }
  },

  // SECTION 9
  s9Enterprise: {
    moment: {
      expert: "Your AI deployment ROI problem is not a model problem. It's an architecture problem. 95% of 2025 enterprise GenAI projects saw no measurable ROI (MIT). The organisations getting results are running engineered systems — RAG, verification loops, memory infrastructure — not raw API calls.",
      essentials: "Your AI returns problem isn't about which AI you chose. It's about how the system around it was built. 95% of company AI projects in 2025 showed no measurable financial impact (MIT)."
    },
    next: {
      expert: "Audit your existing AI deployments against the Base vs. System-Level gap. Identify which workflows are running raw model calls where they should be running grounded, verified pipelines. The cost to fix this has fallen 10x in 18 months.",
      essentials: "Look at your current AI projects and find where you're using simple AI prompts that should be replaced with better-engineered systems. The cost of building these systems has fallen dramatically."
    }
  },
  s9Investors: {
    moment: {
      expert: "The benchmark contamination story is the most important thing to understand for competitive positioning. Companies still using SWE-bench Verified scores to evaluate coding capability are making decisions on a compromised signal. SWE-bench Pro is the honest measure.",
      essentials: "If a company is benchmarking AI using the contaminated standard test (SWE-bench Verified), their AI investment decisions are based on misleading numbers."
    },
    next: {
      expert: "Add metacognition and context coherence to your AI vendor evaluation criteria. A model that knows what it doesn't know is worth more to an enterprise deployment than a model that scores 5% higher on a saturated benchmark.",
      essentials: "Look for AI that can admit when it's unsure. An AI that knows its limits is more valuable than one that scores slightly higher on a compromised test."
    }
  },
  s9Careers: {
    moment: {
      expert: "Position around orchestration, not execution. The AI-native junior needs system-design understanding. The people who will be valuable are those who understand how to design the environments AI operates inside.",
      essentials: "Build skills around directing and managing AI systems — not just using them. The valuable professional in 2027 isn't the one who can write the best code. It's the one who knows how to set up, oversee, and course-correct a system where AI is doing most of the work."
    },
    next: {
      expert: "Master agent frameworks (HAL, Mastra) and the Model Context Protocol (MCP). The 'Junior 2027' profile is an orchestrator who manages a fleet of agents, not a coder who writes individual patches.",
      essentials: "Look for ways to orchestrate a team of AI tools. Your focus should shift from writing the work yourself to setting the parameters, checking the outputs, and ensuring the whole system hangs together."
    }
  },
  s9Education: {
    moment: {
      expert: "CS education must shift from \"will AI replace developers\" to \"what does a developer do when AI writes the code.\" The throughput limit is no longer generation; it is verification and coherence management.",
      essentials: "The question universities need to answer isn't whether AI replaces developers. It's what a developer actually does when AI writes the code."
    },
    next: {
      expert: "Shift curriculum from syntax and patterns to system-level debugging, automated verification, and prompt-less engineering. The goal is to produce humans who can set the parameters for automated production.",
      essentials: "Colleges should focus less on teaching coding syntax and more on how to verify and manage AI-generated work. The goal is to train people to direct the machines."
    }
  }
};

export const terminology = {
  expertTerms: [
    "hallucinate", "hallucination", "contaminated", "agentic", "agent", 
    "RAG", "Retrieval-Augmented Generation", "inference cost", "base model",
    "scaffold", "scaffolding", "benchmark", "parametric", "orchestration", 
    "SWE-bench Pro (SEAL)", "MCP ecosystem", "open-source", "frontier model", 
    "multi-agent verification"
  ],
  essentialsTerms: [
    "make things up", "confidently wrong", "compromised", "AI system", "AI that takes actions",
    "AI with access to real-time information", "AI with access to real-time information", "cost of running AI", "underlying AI model",
    "the system built around the AI", "the system built around the AI", "test", "built into the model itself", "managing and directing AI systems",
    "independent coding test", "AI integration layer", "free and publicly available", "leading AI model",
    "AI-checks-AI system"
  ]
};

export const translate = (text, mode) => {
  if (mode === 'expert' || !text) return text;
  
  let translated = text;
  terminology.expertTerms.forEach((term, index) => {
    const replacement = terminology.essentialsTerms[index];
    // Simple case-insensitive replacement for now. 
    // In a real app we might want more complex regex to avoid sub-word matches.
    const regex = new RegExp(`\\b${term}\\b`, 'gi');
    translated = translated.replace(regex, replacement);
  });
  return translated;
};
