import { AlertTriangle } from "lucide-react";

export default function WarningCard({ title = "Performance warning", children }) {
  return (
    <div className="rounded-xl border border-amber-400/25 bg-amber-500/10 p-4 shadow-soft">
      <div className="flex items-center gap-2 text-amber-100">
        <AlertTriangle className="h-4 w-4" />
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-sm leading-6 text-amber-50/80">{children}</p>
    </div>
  );
}
