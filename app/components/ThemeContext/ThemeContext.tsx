import { useEffect, useState } from "react";
import { ThemeContext } from "./hooks/themeSwitcher";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;

    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    const appliedTheme = storedTheme || systemTheme;
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(appliedTheme);
    setTheme(appliedTheme);
  }, []);

  const updateTheme = (newTheme: "light" | "dark") => {
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
