import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import LightIcon from '@/shared/assets/icons/themeLight.svg';
import DarkIcon from '@/shared/assets/icons/themeDark.svg';
import PinkIcon from '@/shared/assets/icons/themePink.svg';
import NewThemeIcon from '@/shared/assets/icons/theme.svg';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { memo, useCallback } from 'react';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Theme } from '@/shared/const/theme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const toggleThemeHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [dispatch, toggleTheme]);

  let ThemeIcon;

  switch (theme) {
    case Theme.LIGHT:
      ThemeIcon = (
        <IconDeprecated
          Svg={DarkIcon}
          width={32}
          height={32}
        />
      );
      break;
    case Theme.DARK:
      ThemeIcon = (
        <IconDeprecated
          Svg={PinkIcon}
          width={32}
          height={32}
        />
      );
      break;
    case Theme.PINK:
      ThemeIcon = (
        <IconDeprecated
          Svg={LightIcon}
          width={32}
          height={32}
        />
      );
      break;
    default:
      ThemeIcon = (
        <IconDeprecated
          Svg={DarkIcon}
          width={32}
          height={32}
        />
      );
      break;
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Icon
          Svg={NewThemeIcon}
          clickable
          onClick={toggleThemeHandler}
          className={classNames(cls.ThemeProvider, {}, [className])}
        />
      }
      off={
        <Button
          theme={ButtonTheme.CLEAR}
          size={ButtonSize.L}
          square
          className={classNames(cls.ThemeProvider, {}, [className])}
          onClick={toggleThemeHandler}
        >
          {ThemeIcon}
        </Button>
      }
    />
  );
});
