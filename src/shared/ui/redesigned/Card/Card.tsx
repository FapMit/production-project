import { memo, HTMLAttributes, CSSProperties } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  borderRadius?: string;
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    variant = 'normal',
    padding,
    borderRadius = '18px',
    ...otherProps
  } = props;

  const styles: CSSProperties = {
    borderRadius,
    padding: `${padding}px`,
  };

  return (
    <div
      className={classNames(cls.Card, {}, [className, cls[variant]])}
      style={styles}
      {...otherProps}
    >
      {children}
    </div>
  );
});
