import { Lightbulb } from "lucide-react";

export default function TakeawayCard({ children }) {
  return (
    <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-4 shadow-soft">
      <div className="flex items-center gap-2 text-emerald-100">
        <Lightbulb className="h-4 w-4" />
        <h3 className="text-sm font-semibold">Practical takeaway</h3>
      </div>
      <p className="mt-2 text-sm leading-6 text-emerald-50/80">{children}</p>
    </div>
  );
}
