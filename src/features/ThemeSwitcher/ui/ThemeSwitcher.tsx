import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import LightIcon from '@/shared/assets/icons/themeLight.svg';
import DarkIcon from '@/shared/assets/icons/themeDark.svg';
import PinkIcon from '@/shared/assets/icons/themePink.svg';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { memo, useCallback } from 'react';
import { Icon } from '@/shared/ui/Icon';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Theme } from '@/shared/const/theme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const toggleThemeHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      console.log('тема поменялась на ' + newTheme);
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [dispatch, toggleTheme]);

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
      onClick={toggleThemeHandler}>
      {themeIcon}
    </Button>
  );
});
