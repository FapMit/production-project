import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import AppLogoSvg from '@/shared/assets/icons/logotype.svg';
import { HStack } from '../Stack';

interface AppLogoProps {
  className?: string;
}

export const AppLogo = (props: AppLogoProps) => {
  const { className } = props;

  return (
    <HStack
      max
      justify='center'
      className={classNames(cls.appLogoWrapper, {}, [className])}>
      <div className={cls.gradientBig}></div>
      <div className={cls.gradientSmall}></div>
      <AppLogoSvg className={cls.appLogo} />
    </HStack>
  );
};
