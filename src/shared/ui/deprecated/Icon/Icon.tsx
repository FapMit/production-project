import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';
import { memo } from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

/**
 * @deprecated
 * Устарел, используйте новые компоненты из папки redesigned
 */

export const Icon = memo((props: IconProps) => {
  const { className, Svg, ...otherProps } = props;

  return (
    <Svg className={classNames(cls.Icon, {}, [className])} {...otherProps} />
  );
});
