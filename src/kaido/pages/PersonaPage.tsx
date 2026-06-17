import { useState } from "react";
import { Monitor, Sun, Moon } from "lucide-react";
import type { AppState, Theme } from "../App";

export default function PersonaPage({ state }: { state: AppState }) {
  const [nameInput, setNameInput] = useState(state.userName);

  if (state.page === "persona-name") {
    return (
      <div className="min-h-screen bg-[#1C1C1C] text-white flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
              <span className="text-xl font-bold">K</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-center mb-2">What's your name?</h1>
          <p className="text-zinc-400 text-center text-sm mb-8">
            This is how you'll appear in KAIDO.
          </p>

          <input
            type="text"
            placeholder="Your name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            autoFocus
            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 mb-4 outline-none focus:border-zinc-500"
          />

          <button
            disabled={!nameInput.trim()}
            onClick={() => {
              state.setUserName(nameInput.trim());
              state.setPage("persona-theme");
            }}
            className="w-full bg-white text-black font-medium rounded-lg py-3 hover:bg-zinc-100 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  const themes: { id: Theme; label: string; icon: React.ReactNode }[] = [
    { id: "light", label: "Light", icon: <Sun className="w-6 h-6" /> },
    { id: "dark", label: "Dark", icon: <Moon className="w-6 h-6" /> },
    { id: "system", label: "System", icon: <Monitor className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
            <span className="text-xl font-bold">K</span>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center mb-2">Choose your theme</h1>
        <p className="text-zinc-400 text-center text-sm mb-8">
          You can change this anytime in settings.
        </p>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => state.setTheme(t.id)}
              className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                state.theme === t.id
                  ? "border-white bg-white/10"
                  : "border-zinc-800 bg-zinc-900 hover:border-zinc-600"
              }`}
            >
              <div className={state.theme === t.id ? "text-white" : "text-zinc-400"}>
                {t.icon}
              </div>
              <span className={`text-sm font-medium ${state.theme === t.id ? "text-white" : "text-zinc-400"}`}>
                {t.label}
              </span>
            </button>
          ))}
        </div>

        <button
          onClick={() => state.setPage("chat")}
          className="w-full bg-white text-black font-medium rounded-lg py-3 hover:bg-zinc-100"
        >
          Get started
        </button>
      </div>
    </div>
  );
}
