import { memo, HTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Card.module.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    ...otherProps
  } = props

  return (
    <div 
      className={classNames(cls.Card, {}, [className])}
      {...otherProps}
    >
      {children}
    </div>
  );
});