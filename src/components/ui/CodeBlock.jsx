export default function CodeBlock({ label, code, tone = "neutral" }) {
  const toneClass =
    tone === "bad"
      ? "border-red-400/20"
      : tone === "good"
        ? "border-emerald-400/20"
        : "border-white/10";

  return (
    <div className={`overflow-hidden rounded-xl border bg-slate-950/80 ${toneClass}`}>
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          {label}
        </span>
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </div>
      </div>
      <pre className="overflow-x-auto p-4 text-[13px] leading-6 text-slate-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}
