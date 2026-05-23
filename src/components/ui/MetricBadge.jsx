export default function MetricBadge({ label, value, tone = "neutral" }) {
  const tones = {
    neutral: "border-white/10 bg-white/[0.06] text-slate-200",
    danger: "border-red-400/30 bg-red-500/10 text-red-100",
    success: "border-emerald-400/30 bg-emerald-500/10 text-emerald-100",
    warn: "border-amber-400/30 bg-amber-500/10 text-amber-100",
  };

  return (
    <div className={`rounded-lg border px-3 py-2 ${tones[tone]}`}>
      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-semibold">{value}</p>
    </div>
  );
}
