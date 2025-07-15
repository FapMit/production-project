import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Loader.module.scss';
import { HTMLAttributes } from 'react';

export type LoaderSize = 's' | 'm' | 'l' | 'xl';

interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  size?: LoaderSize;
  centered?: boolean;
}

export const Loader = (props: LoaderProps) => {
  const { className, size = 'l', centered = false, ...otherProps } = props;

  const mods: Record<string, boolean> = {
    [cls[size]]: true,
    [cls['centered']]: centered,
  };

  return (
    <div
      className={classNames(cls.Loader, mods, [className])}
      {...otherProps}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
