import { Menu, Sparkles } from "lucide-react";

export default function Header({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/75 px-4 py-3 backdrop-blur-xl sm:px-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-slate-300 lg:hidden"
            aria-label="Open navigation"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="min-w-0">
            <h1 className="truncate text-base font-semibold text-slate-50 sm:text-lg">
              React Boundary Lab
            </h1>
            <p className="truncate text-xs text-slate-500 sm:text-sm">
              Learn why React performance problems often begin with unclear component boundaries.
            </p>
          </div>
        </div>
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-300 sm:flex">
          <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
          Interactive lab
        </div>
      </div>
    </header>
  );
}
