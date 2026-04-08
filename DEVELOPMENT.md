## 📊 Technical Appendix (Developer Documentation)

This project is a React-based interactive report designed for high-density data visualization and reading mode optimization.

### Data Sources & Methodology
This brief synthesises data current as of **April 4, 2026**.
- **Benchmarks**: Scale AI SEAL, epoch.ai, tbench.ai, awesomeagents.ai (GAIA), ARC Prize Foundation.
- **Labour Data**: Stanford Digital Economy Lab, Harvard Hosseini & Lichtinger, BLS Occupational Employment Statistics.
- **Corporate Analysis**: Gartner 2026 Enterprise Predictions, MIT Project NANDA (2025), AlterSquare March Survey.
- **Epistemic Data**: HEC Paris Legal Sanctions Tracker, arXiv Structured Appendices Proposal.

### Tech Stack
- **React 19 / Vite 7 / Tailwind CSS 4**
- **Visualization**: Custom SVG-based Radar, Dumbbell, and Timeline components.
- **Markdown Parsing**: Ensure the React frontend utilizes `remark-gfm` (or an equivalent plugin) to properly render GitHub Flavored Markdown alerts (e.g., `> [!CAUTION]`). Without this, the investor warnings in Section 3 will render as standard blockquotes instead of high-visibility alerts.

### Local Development
1. **Install Dependencies**: `npm install`
2. **Start Dev Server**: `npm run dev`
3. **Build**: `npm run build`
