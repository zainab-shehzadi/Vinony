// src/theme/ThemeProvider.tsx
import * as React from "react";

type ThemeMode = "light" | "dark" | "system";
type Resolved = "light" | "dark";

type ThemeCtx = {
  mode: ThemeMode;
  resolved: Resolved;
  setMode: (m: ThemeMode) => void;
  toggle: () => void;
};

const ThemeContext = React.createContext<ThemeCtx | null>(null);
const KEY = "theme-mode";

function getSystemTheme(): Resolved {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(resolved: Resolved) {
  document.documentElement.classList.toggle("dark", resolved === "dark");
}

function readSavedMode(): ThemeMode {
  try {
    const v = localStorage.getItem(KEY) as ThemeMode | null;
    return v === "light" || v === "dark" || v === "system" ? v : "system";
  } catch {
    return "system";
  }
}

function resolveMode(mode: ThemeMode): Resolved {
  return mode === "system" ? getSystemTheme() : mode;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = React.useState<ThemeMode>(() => readSavedMode());

  const [resolved, setResolved] = React.useState<Resolved>(() =>
    typeof window === "undefined" ? "light" : resolveMode(readSavedMode())
  );

  // ✅ Apply before paint (prevents first-render light)
  React.useLayoutEffect(() => {
    const r = resolveMode(mode);
    setResolved(r);
    applyTheme(r);
  }, [mode]);

  // ✅ Watch system changes only when mode === system
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    const onChange = () => {
      if (mode !== "system") return;
      const r = getSystemTheme();
      setResolved(r);
      applyTheme(r);
    };

    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, [mode]);

  const setMode = (m: ThemeMode) => {
    setModeState(m);
    try {
      localStorage.setItem(KEY, m);
    } catch {
      // ignore
    }
  };

  const toggle = () => {
    setMode(resolved === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ mode, resolved, setMode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}