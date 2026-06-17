import { Plus, Lightbulb, Send, Figma, Github, LayoutGrid, AppWindow, Component, Activity, ChevronRight } from "lucide-react";
import type { AppState } from "../App";

const templates = [
  { title: "Image Generation Playground", users: "6K", likes: "666", bg: "bg-zinc-900" },
  { title: "Brillance SaaS Landing Page", users: "13.3K", likes: "2K", bg: "bg-amber-50" },
  { title: "3D Gallery Photography Template", users: "3.1K", likes: "798", bg: "bg-zinc-950" },
  { title: "Optimus - The AI platform to build and ship", users: "4.7K", likes: "877", bg: "bg-white" },
  { title: "Grok Creative Studio", users: "925", likes: "97", bg: "bg-black" },
  { title: "Globe To Map Transform", users: "2K", likes: "600", bg: "bg-zinc-900" },
];

const categories = [
  { label: "Apps and Games", icon: AppWindow },
  { label: "Landing Pages", icon: LayoutGrid },
  { label: "Components", icon: Component },
  { label: "Dashboards", icon: Activity },
];

export default function LandingPage({ state }: { state: AppState }) {
  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5">
        <div className="text-xl font-bold tracking-tight">
          KAIDO
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <a href="#" className="hover:text-white">Community</a>
          <a href="#" className="hover:text-white">Enterprise</a>
          <a href="#" className="hover:text-white">Resources</a>
          <a href="#" className="hover:text-white">Careers</a>
          <a href="#" className="hover:text-white">Pricing</a>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => state.setPage("signin")}
            className="text-sm px-4 py-1.5 rounded-md border border-zinc-700 hover:bg-zinc-900"
          >
            Sign in
          </button>
          <button
            onClick={() => state.setPage("signup")}
            className="text-sm px-4 py-1.5 rounded-md bg-white text-black hover:bg-zinc-100 font-medium"
          >
            Get started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-32">
        <div className="absolute inset-x-0 top-32 mx-auto h-[600px] w-[1600px] rounded-[100%] bg-[radial-gradient(ellipse_at_top,_rgba(255,_255,_255,_0.25),_transparent_60%)] pointer-events-none" />
        <div className="absolute left-1/2 -translate-x-1/2 top-[380px] h-[700px] w-[1700px] rounded-full border-t-2 border-white/60 shadow-[0_-20px_80px_rgba(255,255,255,0.4)]" />

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h1 className="mt-16 text-6xl md:text-7xl font-bold tracking-tight">
            What will you <span className="italic text-white">build</span> today?
          </h1>
          <p className="mt-5 text-lg text-zinc-400">
            Create stunning apps &amp; websites by chatting with AI.
          </p>

          {/* Chat input */}
          <div className="mt-10 text-left rounded-2xl bg-zinc-900/80 border border-zinc-800 p-5 shadow-2xl backdrop-blur">
            <div className="min-h-[60px] text-zinc-400">Let's build an enterprise</div>
            <div className="flex items-center justify-between mt-4">
              <button className="w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-zinc-800">
                <Plus className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1.5 text-sm text-zinc-300 px-3 py-1.5 hover:bg-zinc-800 rounded-md">
                  <Lightbulb className="w-4 h-4" /> Plan
                </button>
                <button
                  onClick={() => state.setPage("signup")}
                  className="flex items-center gap-2 text-sm bg-white hover:bg-zinc-100 px-4 py-2 rounded-full font-medium text-black"
                >
                  Build now <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Import from */}
          <div className="mt-8 flex items-center justify-center gap-4 text-sm text-zinc-400">
            <span>or import from</span>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white">
              <Figma className="w-4 h-4" /> Figma
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white">
              <Github className="w-4 h-4" /> GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Templates section */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <h2 className="text-3xl font-bold">Start with a template</h2>
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((c) => (
              <button
                key={c.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-sm"
              >
                <c.icon className="w-4 h-4 text-zinc-400" />
                {c.label}
              </button>
            ))}
            <a href="#" className="flex items-center gap-1 text-sm font-medium hover:text-white">
              Browse all <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((t) => (
            <div key={t.title} className="group cursor-pointer">
              <div className={`aspect-video rounded-xl ${t.bg} border border-zinc-800 overflow-hidden transition-transform group-hover:-translate-y-1`} />
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white to-purple-500" />
                <div className="flex-1">
                  <div className="font-medium">{t.title}</div>
                  <div className="text-xs text-zinc-500 mt-0.5">👥 {t.users} &nbsp;•&nbsp; ♥ {t.likes}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="px-6 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-sm font-medium">
            Browse all
          </button>
        </div>
      </section>
    </div>
  );
}
