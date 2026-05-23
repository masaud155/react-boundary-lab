export default function RenderCounterCard({
  name,
  status,
  count = 0,
  active = false,
  tone = "neutral",
}) {
  const tones = {
    bad: active
      ? "border-red-400/70 bg-red-500/15 shadow-red-glow"
      : "border-white/10 bg-white/[0.04]",
    good: active
      ? "border-emerald-400/70 bg-emerald-500/15 shadow-green-glow"
      : "border-white/10 bg-white/[0.04]",
    neutral: "border-white/10 bg-white/[0.04]",
  };

  const badge =
    tone === "bad"
      ? "bg-red-500/15 text-red-100 border-red-400/30"
      : tone === "good"
        ? "bg-emerald-500/15 text-emerald-100 border-emerald-400/30"
        : "bg-white/10 text-slate-200 border-white/10";

  return (
    <div
      className={`relative rounded-xl border p-3 transition duration-300 ${tones[tone]} ${
        active ? "animate-renderPulse" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-100">{name}</p>
          <p className="mt-1 text-xs text-slate-400">{status}</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-slate-950/70 px-2 py-1 text-right">
          <p className="text-[10px] uppercase tracking-[0.14em] text-slate-500">renders</p>
          <p className="text-sm font-bold text-slate-100">{count}</p>
        </div>
      </div>
      {active && (
        <span className={`mt-3 inline-flex rounded-full border px-2 py-1 text-[11px] font-medium ${badge}`}>
          {tone === "bad" ? "Unnecessary render" : "Re-rendered"}
        </span>
      )}
    </div>
  );
}
