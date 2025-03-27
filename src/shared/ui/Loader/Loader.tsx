import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Loader.module.scss";
import { HTMLAttributes } from "react";

export enum LoaderSize {
  S = 'loader__s',
  M = 'loader__m',
  L = 'loader__l',
  XL = 'loader__xl'
}

interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  size?: LoaderSize;
}

export const Loader = (props: LoaderProps) => {
  const {
    className,
    size = LoaderSize.L,
    ...otherProps
  } = props;

  const mods: Record<string,boolean> = {
    [cls[size]]: true,
  }

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
}