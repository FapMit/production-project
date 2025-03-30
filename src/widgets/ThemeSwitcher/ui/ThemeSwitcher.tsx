import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/themeLight.svg";
import DarkIcon from "shared/assets/icons/themeDark.svg";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { memo } from "react";


interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const {theme, toggleTheme} = useTheme()

  return (
    <Button 
      theme={ButtonTheme.CLEAR} 
      size={ButtonSize.L}
      square
      className={classNames(cls.ThemeProvider, {}, [className])} 
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
    </Button>
  );
});