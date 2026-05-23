import RenderCounterCard from "./RenderCounterCard.jsx";

export default function ComponentTree({ title, items, counters, activeNames, tone }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-[11px] text-slate-400">
          component tree
        </span>
      </div>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={item.name} className="relative pl-5">
            {index > 0 && <span className="absolute left-2 top-0 h-full w-px bg-white/10" />}
            <span className="absolute left-0 top-5 h-px w-4 bg-white/10" />
            <RenderCounterCard
              name={item.name}
              status={item.status}
              count={counters[item.name] || 0}
              active={activeNames.includes(item.name)}
              tone={tone}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
