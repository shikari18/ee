import { useState } from "react";
import type { AppState } from "../App";

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
      <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );
}

export default function AuthPage({ state }: { state: AppState }) {
  const isSignup = state.page === "signup";
  const [email, setEmail] = useState("");

  const handleGoogle = () => {
    state.setPage("persona-name");
  };

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white flex flex-col">
      {/* Top nav */}
      <div className="flex items-center justify-between px-6 py-4">
        <button onClick={() => state.setPage("landing")} className="text-xl font-bold tracking-tight">
          KAIDO
        </button>
        <button
          onClick={() => state.setPage(isSignup ? "signin" : "signup")}
          className="text-sm px-4 py-1.5 rounded-md border border-zinc-700 hover:bg-zinc-900"
        >
          {isSignup ? "Sign In" : "Sign Up"}
        </button>
      </div>

      {/* Auth card */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
              <span className="text-xl font-bold tracking-tight">K</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-center mb-6">
            {isSignup ? "Sign up for KAIDO" : "Sign in to KAIDO"}
          </h1>

          {/* Email */}
          <input
            type="email"
            placeholder="name@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 mb-3 outline-none focus:border-zinc-500"
          />
          <button className="w-full bg-white text-black font-medium rounded-lg py-3 mb-6 hover:bg-zinc-100">
            Continue with Email
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-zinc-800" />
            <span className="text-xs text-zinc-500">OR</span>
            <div className="flex-1 h-px bg-zinc-800" />
          </div>

          {/* Social buttons */}
          <div className="space-y-3">
            <button
              onClick={handleGoogle}
              className="w-full flex items-center justify-center gap-3 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white font-medium rounded-lg py-3"
            >
              <GoogleIcon />
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white font-medium rounded-lg py-3">
              <GithubIcon />
              Continue with GitHub
            </button>
            <button className="w-full flex items-center justify-center gap-3 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white font-medium rounded-lg py-3">
              <AppleIcon />
              Continue with Apple
            </button>
          </div>

          <button className="w-full text-center text-sm text-zinc-400 mt-5 hover:text-white">
            Show other options
          </button>

          <p className="text-center text-sm text-zinc-500 mt-4">
            {isSignup ? (
              <>Already have an account? <button onClick={() => state.setPage("signin")} className="text-white hover:underline">Sign In</button></>
            ) : (
              <>Don't have an account? <button onClick={() => state.setPage("signup")} className="text-white hover:underline">Sign Up</button></>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
