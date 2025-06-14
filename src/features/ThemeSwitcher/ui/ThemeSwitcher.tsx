import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import LightIcon from '@/shared/assets/icons/themeLight.svg';
import DarkIcon from '@/shared/assets/icons/themeDark.svg';
import PinkIcon from '@/shared/assets/icons/themePink.svg';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { memo } from 'react';
import { Icon } from '@/shared/ui/Icon';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Theme } from '@/shared/const/theme';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  let themeIcon;

  switch (theme) {
    case Theme.LIGHT:
      themeIcon = <Icon Svg={DarkIcon} />;
      break;
    case Theme.DARK:
      themeIcon = <Icon Svg={PinkIcon} />;
      break;
    case Theme.PINK:
      themeIcon = <Icon Svg={LightIcon} />;
      break;
    default:
      themeIcon = <Icon Svg={DarkIcon} />;
      break;
  }

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      size={ButtonSize.L}
      square
      className={classNames(cls.ThemeProvider, {}, [className])}
      onClick={toggleTheme}>
      {themeIcon}
    </Button>
  );
});
