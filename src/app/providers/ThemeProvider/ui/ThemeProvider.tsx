import { ReactNode, useMemo, useState } from "react";
import { ThemeContext } from "../../../../shared/lib/context/ThemeContext";
import { LOCAL_STORAGE_KEY } from "@/shared/const/localstorage";
import { Theme } from "@/shared/const/theme";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {

  const {
    children,
    initialTheme
  } = props;

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(()=>({    
    theme: theme,
    setTheme: setTheme,
  }),[theme])

  return ( 
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider> 
  );
}

export default ThemeProvider;