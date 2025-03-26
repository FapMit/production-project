import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Loader.module.scss";

export enum LoaderSize {
  S = 'loader__s',
  M = 'loader__m',
  L = 'loader__l',
  XL = 'loader__xl'
}

interface LoaderProps {
  className?: string;
  size?: LoaderSize;
}

export const Loader = (props: LoaderProps) => {
  const {
    className,
    size = LoaderSize.L,
  } = props;

  const mods: Record<string,boolean> = {
    [cls[size]]: true,
  }

  return ( 
    <div className={classNames(cls.Loader, mods, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}