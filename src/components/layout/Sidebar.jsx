import { NavLink } from "react-router-dom";
import { FlaskConical, X } from "lucide-react";
import { navSections } from "../../data/sections";

export default function Sidebar({ open, onClose }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-slate-950/70 backdrop-blur-sm transition lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-white/10 bg-slate-950/95 p-4 transition lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between gap-3 px-2 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
              <FlaskConical className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-50">React Boundary Lab</p>
              <p className="text-xs text-slate-500">Performance playground</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-white/10 lg:hidden"
            aria-label="Close navigation"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="mt-4 space-y-1 overflow-y-auto pr-1">
          {navSections.map((section) => {
            const Icon = section.icon;
            return (
              <NavLink
                key={section.path}
                to={section.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                    isActive
                      ? "border border-cyan-300/30 bg-cyan-300/10 text-cyan-100"
                      : "text-slate-400 hover:bg-white/[0.06] hover:text-slate-100"
                  }`
                }
              >
                <Icon className="h-4 w-4" />
                <span>{section.title}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
