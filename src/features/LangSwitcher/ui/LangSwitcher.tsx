import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { memo } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Button
          className={classNames(cls.LangSwitcherRedesigned, {}, [className])}
          variant="clear"
          onClick={toggle}
        >
          {t('Язык')}
        </Button>
      }
      off={
        <ButtonDeprecated
          className={classNames(cls.LangSwitcher, {}, [className])}
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={toggle}
        >
          {t(short ? 'Короткий язык' : 'Полный язык')}
        </ButtonDeprecated>
      }
    />
  );
});
