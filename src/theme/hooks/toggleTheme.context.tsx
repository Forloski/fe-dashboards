import { createContext, ReactNode, useContext } from "react";
import { PaletteMode } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import createThemeWithMode from "../createThemeWithMode";
import { useTheme } from "next-themes";
import { useState } from "react";
import { useEffect } from "react";

type ThemeProviderContextType = {
  themeMode: PaletteMode;
  toggleTheme: () => void;
};

const ThemeProviderContext = createContext<ThemeProviderContextType | null>(
  null
);

const ToggleThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <ThemeProviderContext.Provider
      value={{ themeMode: resolvedTheme as PaletteMode, toggleTheme }}
    >
      <ThemeProvider theme={createThemeWithMode(theme as PaletteMode)}>
        {children}
      </ThemeProvider>
    </ThemeProviderContext.Provider>
  );
};

const useToggleTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === null) {
    throw new Error("UseToggleThemeMode should be used inside ThemeProvider");
  }

  return context;
};

export { ToggleThemeProvider, useToggleTheme };
