export const scenarios = [
  {
    emoji: "🐢",
    name: "Conservative Scenario: The Productivity Plateau",
    probability: "Low (Tail Risk)", // Replaced percentage with Trajectory Weight
    horizon: "EOY 2027",
    trigger: "* **Trigger Conditions:** Capability plateaus below 45% on SWE-bench Pro SEAL. Multi-agent scaling hits a hard ceiling of context overflow that RL cannot solve.",
    description: "AI remains a productivity multiplier, not an autonomous replacement. Junior pipelines survive in most sectors. The gap between AI-native and AI-resistant organizations grows slowly.",
    implication: "AI remains a productivity multiplier, not an autonomous replacement. Junior pipelines survive in most sectors. The gap between AI-native and AI-resistant organizations grows slowly."
  },
  {
    emoji: "📈",
    name: "Base Case Scenario: The Deployment Era",
    probability: "High (Dominant)", // Replaced percentage with Trajectory Weight
    horizon: "Q2 2027",
    trigger: "* **Trigger Conditions:** AI cleanly handles 60–70% of software tasks. Enterprise adoption crosses 40% as organizations shift budget from shadow API wrappers to agentic CapEx.",
    description: "Engineering differentiation moves entirely to systems architecture. The Action Moat (compliance/integration) becomes the primary barrier to entry.",
    implication: "Engineering differentiation moves entirely to systems architecture. The Action Moat (compliance/integration) becomes the primary barrier to entry."
  },
  {
    emoji: "🚀",
    name: "Accelerated Scenario: The Reliability Breakthrough",
    probability: "Moderate (Emerging)", // Replaced percentage with Trajectory Weight
    horizon: "EOY 2026 → 2027",
    trigger: "* **Trigger Conditions:** The 32% quality barrier is resolved. ARC-AGI-3 definitively breaks the reinforcement learning bottleneck, crossing 50–65% by EOY 2026. Hallucination drops below 1% for unstructured tasks.",
    description: "AI handles most end-to-end tasks. Reliability converges with capability, triggering the rapid phase of the Barbell Economy contraction.",
    implication: "AI handles most end-to-end tasks. Reliability converges with capability, triggering the rapid phase of the Barbell Economy contraction."
  }
];
