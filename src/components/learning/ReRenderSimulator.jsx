import { MousePointerClick, Sparkles } from "lucide-react";
import MetricBadge from "../ui/MetricBadge.jsx";

export default function ReRenderSimulator({ example, simulation }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-soft">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-slate-100">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            <h2 className="text-base font-semibold">Re-render simulation</h2>
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            Click the trigger to compare how many components respond to one realistic user interaction.
          </p>
        </div>
        <button
          type="button"
          onClick={simulation.trigger}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-4 py-3 text-sm font-semibold text-slate-950 shadow-cyan-glow transition hover:-translate-y-0.5 hover:bg-cyan-200"
        >
          <MousePointerClick className="h-4 w-4" />
          {example.triggerLabel}
        </button>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <MetricBadge label="bad path" value={example.metrics.bad} tone="danger" />
        <MetricBadge label="good path" value={example.metrics.good} tone="success" />
        <MetricBadge label="improvement" value={example.metrics.saved} tone="warn" />
      </div>
    </div>
  );
}
