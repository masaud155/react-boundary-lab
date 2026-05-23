import { BookOpen, CheckCircle2, Gauge, Zap } from "lucide-react";

export default function InsightPanel({ example }) {
  return (
    <aside className="space-y-4 xl:sticky xl:top-24">
      <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-soft">
        <div className="flex items-center gap-2 text-slate-100">
          <BookOpen className="h-4 w-4 text-cyan-300" />
          <h2 className="text-sm font-semibold">Insight</h2>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-400">{example.insight}</p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-soft">
        <div className="flex items-center gap-2 text-slate-100">
          <Gauge className="h-4 w-4 text-emerald-300" />
          <h2 className="text-sm font-semibold">Render outcome</h2>
        </div>
        <div className="mt-4 space-y-3 text-sm">
          <p className="flex items-center justify-between text-slate-400">
            Bad path <span className="font-semibold text-red-200">{example.metrics.bad}</span>
          </p>
          <p className="flex items-center justify-between text-slate-400">
            Good path <span className="font-semibold text-emerald-200">{example.metrics.good}</span>
          </p>
          <p className="flex items-center justify-between text-slate-400">
            Change <span className="font-semibold text-amber-200">{example.metrics.saved}</span>
          </p>
        </div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-soft">
        <div className="flex items-center gap-2 text-slate-100">
          <CheckCircle2 className="h-4 w-4 text-emerald-300" />
          <h2 className="text-sm font-semibold">Checklist item</h2>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-400">{example.checklist}</p>
      </div>
      <div className="rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-5 shadow-soft">
        <div className="flex items-center gap-2 text-cyan-100">
          <Zap className="h-4 w-4" />
          <h2 className="text-sm font-semibold">Lab habit</h2>
        </div>
        <p className="mt-3 text-sm leading-6 text-cyan-50/80">
          Before adding memoization, ask which component should have been allowed to change.
        </p>
      </div>
    </aside>
  );
}
