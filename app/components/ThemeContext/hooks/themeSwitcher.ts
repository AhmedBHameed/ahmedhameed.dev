import { createContext, useContext } from "react";

const ThemeContext = createContext({
  theme: "light",
  setTheme: (theme: "light" | "dark") => {},
});

const useThemeSwitcher = () => useContext(ThemeContext);

export { ThemeContext, useThemeSwitcher };
