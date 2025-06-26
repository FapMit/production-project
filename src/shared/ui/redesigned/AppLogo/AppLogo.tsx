import AppLogoSvg from '@/shared/assets/icons/logotype.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '../Stack';
import cls from './AppLogo.module.scss';

interface AppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo = (props: AppLogoProps) => {
  const { className, size = 50 } = props;

  return (
    <HStack
      max
      justify="center"
      className={classNames(cls.appLogoWrapper, {}, [className])}
    >
      <AppLogoSvg
        className={cls.appLogo}
        style={{ maxWidth: size, maxHeight: size }}
      />
      <div className={cls.gradientBig}></div>
      <div className={cls.gradientSmall}></div>
    </HStack>
  );
};
