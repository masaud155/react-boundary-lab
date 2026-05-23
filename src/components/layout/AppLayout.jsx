import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";

export default function AppLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.1),transparent_28%)]" />
      <div className="flex">
        <Sidebar open={open} onClose={() => setOpen(false)} />
        <div className="min-w-0 flex-1">
          <Header onMenuClick={() => setOpen(true)} />
          <main className="mx-auto w-full max-w-[1500px] px-4 py-6 sm:px-6 lg:py-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
