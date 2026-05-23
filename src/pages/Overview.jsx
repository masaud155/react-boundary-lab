import { ArrowRight, Brain, GitCompareArrows, Gauge } from "lucide-react";
import { Link } from "react-router-dom";
import BoundaryDiagram from "../components/learning/BoundaryDiagram.jsx";
import CodeBlock from "../components/ui/CodeBlock.jsx";

export default function Overview() {
  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-soft">
        <div className="grid gap-8 p-6 lg:grid-cols-[1.15fr_0.85fr] lg:p-8">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-300">
              Interactive React performance playground
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
              React performance problems usually start before optimization.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              They start when component boundaries are unclear. This lab shows how architecture choices
              change render behavior using real UI examples, counters, code, and before/after patterns.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/big-components"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-cyan-glow transition hover:-translate-y-0.5 hover:bg-cyan-200"
              >
                Start Learning Boundaries
                <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200">
                <Gauge className="h-4 w-4 text-emerald-300" />
                Render counters included
              </div>
            </div>
          </div>
          <BoundaryDiagram />
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        {[
          {
            icon: Brain,
            title: "Bad mental model",
            text: "Make one smart parent and let every child depend on it.",
          },
          {
            icon: GitCompareArrows,
            title: "Good mental model",
            text: "Create owned areas that change independently with narrow data flow.",
          },
          {
            icon: Gauge,
            title: "What you will measure",
            text: "Which components re-render, why they render, and which boundaries reduce the blast radius.",
          },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-soft">
              <Icon className="h-5 w-5 text-cyan-300" />
              <h2 className="mt-4 text-lg font-semibold text-slate-50">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
            </article>
          );
        })}
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <CodeBlock
          label="Bad mental model"
          tone="bad"
          code={`function Page() {
  const [everything, setEverything] = useState({});
  return <Dashboard state={everything} setState={setEverything} />;
}`}
        />
        <CodeBlock
          label="Good mental model"
          tone="good"
          code={`function Page() {
  return (
    <DashboardLayout>
      <SearchBoundary />
      <TableBoundary />
      <ModalBoundary />
    </DashboardLayout>
  );
}`}
        />
      </section>
    </div>
  );
}
