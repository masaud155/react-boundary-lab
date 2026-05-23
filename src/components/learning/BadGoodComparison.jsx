import { ArrowRight, Flame, ShieldCheck } from "lucide-react";
import MetricBadge from "../ui/MetricBadge.jsx";
import ComponentTree from "./ComponentTree.jsx";

export default function BadGoodComparison({ example, simulation }) {
  const { counters, hasTriggered } = simulation;

  return (
    <section className="grid gap-5 xl:grid-cols-[1fr_auto_1fr]">
      <div className="rounded-2xl border border-red-400/20 bg-red-950/15 p-4 shadow-soft">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-red-300" />
            <h2 className="text-lg font-semibold text-slate-50">Bad architecture</h2>
          </div>
          <MetricBadge label="impact" value={example.metrics.bad} tone="danger" />
        </div>
        <ComponentTree
          title="Wide render surface"
          items={example.tree}
          counters={counters.bad}
          activeNames={hasTriggered ? example.badComponents : []}
          tone="bad"
        />
      </div>

      <div className="hidden items-center justify-center xl:flex">
        <div className="rounded-full border border-white/10 bg-white/[0.04] p-3 text-slate-400">
          <ArrowRight className="h-5 w-5" />
        </div>
      </div>

      <div className="rounded-2xl border border-emerald-400/20 bg-emerald-950/15 p-4 shadow-soft">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-emerald-300" />
            <h2 className="text-lg font-semibold text-slate-50">Good architecture</h2>
          </div>
          <MetricBadge label="impact" value={example.metrics.good} tone="success" />
        </div>
        <ComponentTree
          title="Narrow render surface"
          items={example.goodTree}
          counters={counters.good}
          activeNames={hasTriggered ? example.goodComponents : []}
          tone="good"
        />
      </div>
    </section>
  );
}
