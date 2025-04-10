import { useContext } from "react";
import { LOCAL_STORAGE_KEY, Theme, ThemeContext } from "./ThemeContext";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  document.body.className = theme || Theme.LIGHT;

  const toggleTheme = (): void => {
    let newTheme: Theme;

    switch (theme) {
    case Theme.LIGHT:
      newTheme = Theme.DARK;
      break;
    case Theme.DARK:
      newTheme = Theme.PINK;
      break;
    case Theme.PINK:
      newTheme = Theme.LIGHT;
      break;
    default:
      newTheme = Theme.LIGHT;
    }

    setTheme?.(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_KEY, newTheme)
  }

  return { theme: theme || Theme.LIGHT, toggleTheme }
}