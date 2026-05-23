import { CheckCircle2, ClipboardCheck } from "lucide-react";
import ChecklistCard from "../components/learning/ChecklistCard.jsx";
import TakeawayCard from "../components/ui/TakeawayCard.jsx";
import WarningCard from "../components/ui/WarningCard.jsx";
import { finalChecklist } from "../data/sections";

export default function FinalChecklist() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-soft sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Final checklist
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
              Review component boundaries before optimizing.
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-400">
              Use this card during feature planning, code review, and performance debugging. The best
              performance work often starts with clearer ownership.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-emerald-100">
            <ClipboardCheck className="h-5 w-5" />
            <span className="text-sm font-semibold">GitHub-ready guide</span>
          </div>
        </div>
      </section>

      <ChecklistCard items={finalChecklist} />

      <section className="grid gap-4 lg:grid-cols-2">
        <WarningCard title="Code review smell">
          If one interaction re-renders unrelated UI, trace state ownership before adding memo hooks.
        </WarningCard>
        <TakeawayCard>
          A good boundary names what it owns, limits what it receives, and changes for a reason a user can understand.
        </TakeawayCard>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-soft">
        <div className="flex items-center gap-2 text-slate-100">
          <CheckCircle2 className="h-5 w-5 text-emerald-300" />
          <h2 className="text-lg font-semibold">One-sentence rule</h2>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Components should re-render because their owned data or user interaction changed, not because
          nearby architecture made them accidental passengers.
        </p>
      </section>
    </div>
  );
}
