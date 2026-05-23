import BadGoodComparison from "../components/learning/BadGoodComparison.jsx";
import CodeBlock from "../components/ui/CodeBlock.jsx";
import InsightPanel from "../components/learning/InsightPanel.jsx";
import ReRenderSimulator from "../components/learning/ReRenderSimulator.jsx";
import TakeawayCard from "../components/ui/TakeawayCard.jsx";
import WarningCard from "../components/ui/WarningCard.jsx";
import { useRenderSimulation } from "../hooks/useRenderSimulation";

function ExtraVisualization({ example }) {
  if (example.showList) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
        <h3 className="text-sm font-semibold text-slate-100">100-row simulated list</h3>
        <div className="mt-4 grid grid-cols-10 gap-1.5">
          {Array.from({ length: 100 }, (_, index) => (
            <span
              key={index}
              className={`h-3 rounded-full ${index === 1 ? "bg-emerald-300" : "bg-red-300/70"}`}
              title={`Row ${index + 1}`}
            />
          ))}
        </div>
        <p className="mt-3 text-sm text-slate-400">
          Bad selection lights up the whole list. The good boundary limits work to the selected row.
        </p>
      </div>
    );
  }

  if (example.interactionMap) {
    return (
      <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:grid-cols-2">
        {["Search updates search area", "Modal state updates modal", "Table selection updates selected row", "Form field updates one field"].map(
          (item) => (
            <div key={item} className="rounded-xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-200">
              {item}
            </div>
          ),
        )}
      </div>
    );
  }

  if (example.healthScore) {
    return (
      <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:grid-cols-2">
        <div className="rounded-xl border border-red-400/20 bg-red-500/10 p-5">
          <p className="text-sm text-red-100">Architecture health</p>
          <p className="mt-3 text-4xl font-bold text-red-100">42</p>
          <p className="mt-2 text-sm text-red-50/70">Unclear ownership, duplicated state, tangled props.</p>
        </div>
        <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-5">
          <p className="text-sm text-emerald-100">Architecture health</p>
          <p className="mt-3 text-4xl font-bold text-emerald-100">91</p>
          <p className="mt-2 text-sm text-emerald-50/70">Clear ownership, predictable data flow, isolated changes.</p>
        </div>
      </div>
    );
  }

  return null;
}

export default function SectionPage({ example }) {
  const simulation = useRenderSimulation(example);

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
      <div className="space-y-6">
        <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-soft sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">{example.eyebrow}</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">{example.title}</h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-400">{example.explanation}</p>
        </section>

        <ReRenderSimulator example={example} simulation={simulation} />
        <BadGoodComparison example={example} simulation={simulation} />
        <ExtraVisualization example={example} />

        <section className="grid gap-5 lg:grid-cols-2">
          <CodeBlock label="Bad JSX pattern" code={example.code.bad} tone="bad" />
          <CodeBlock label="Good JSX pattern" code={example.code.good} tone="good" />
        </section>

        <div className="grid gap-4 lg:grid-cols-2">
          <WarningCard title={example.title === "Memoization Trap" ? "Memoization is not architecture" : "Boundary warning"}>
            {example.explanation}
          </WarningCard>
          <TakeawayCard>{example.takeaway}</TakeawayCard>
        </div>
      </div>

      <InsightPanel example={example} />
    </div>
  );
}
