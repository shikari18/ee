import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import PersonaPage from "./pages/PersonaPage";
import ChatPage from "./pages/ChatPage";

export type Page = "landing" | "signup" | "signin" | "persona-name" | "persona-theme" | "chat";
export type Theme = "light" | "dark" | "system";

export interface AppState {
  page: Page;
  userName: string;
  userEmail: string;
  theme: Theme;
  setPage: (p: Page) => void;
  setUserName: (n: string) => void;
  setUserEmail: (e: string) => void;
  setTheme: (t: Theme) => void;
}

export default function App() {
  const [page, setPage] = useState<Page>("landing");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [theme, setTheme] = useState<Theme>("dark");

  const state: AppState = { page, userName, userEmail, theme, setPage, setUserName, setUserEmail, setTheme };

  const isDark = theme === "dark" || (theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <div className={isDark ? "dark" : ""} style={{ minHeight: "100vh" }}>
      {page === "landing" && <LandingPage state={state} />}
      {(page === "signup" || page === "signin") && <AuthPage state={state} />}
      {(page === "persona-name" || page === "persona-theme") && <PersonaPage state={state} />}
      {page === "chat" && <ChatPage state={state} />}
    </div>
  );
}
