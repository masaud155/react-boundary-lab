import { Activity, Box, CircleDot, Split } from "lucide-react";

export default function BoundaryDiagram() {
  const nodes = [
    { label: "Search", tone: "cyan", icon: CircleDot },
    { label: "Table", tone: "emerald", icon: Box },
    { label: "Modal", tone: "amber", icon: Split },
    { label: "Charts", tone: "violet", icon: Activity },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 shadow-soft">
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
          Boundary diagram
        </p>
        <h2 className="mt-2 text-xl font-semibold text-slate-50">
          Boundaries should follow ownership and interaction
        </h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {nodes.map((node) => {
          const Icon = node.icon;
          return (
            <div
              key={node.label}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan-300/40"
            >
              <Icon className="h-5 w-5 text-cyan-300" />
              <p className="mt-3 text-sm font-semibold text-slate-100">{node.label}Boundary</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">
                Owns local state, accepts narrow props, and only updates the feature area it controls.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
