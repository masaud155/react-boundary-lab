import { CheckCircle2, Download, Square } from "lucide-react";

export default function ChecklistCard({ items }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-soft">
      <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Project checklist
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-50">Boundary review card</h2>
        </div>
        <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-slate-100">
          <Download className="h-4 w-4" />
          Save checklist
        </button>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {items.map((item, index) => (
          <div key={item} className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4">
            {index < 3 ? (
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
            ) : (
              <Square className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />
            )}
            <p className="text-sm leading-6 text-slate-200">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
