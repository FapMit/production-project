import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';

export type ButtonVariant =
  | 'clear'
  | 'outline'
  | 'light'
  | 'success'
  | 'danger'
  | 'primary';

export type ButtonSize = 's' | 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
  fullWidth?: boolean;
  addonRight?: ReactNode;
  addonLeft?: ReactNode;
  rounded?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    variant = 'outline',
    square,
    size = 'm',
    disabled,
    fullWidth,
    addonRight,
    addonLeft,
    rounded,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
    [cls.withAddonLeft]: Boolean(addonLeft),
    [cls.withAddonRight]: Boolean(addonRight),
    [cls.rounded]: rounded,
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [
        className,
        cls[variant],
        cls[size],
      ])}
      disabled={disabled}
      {...otherProps}
    >
      {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
      {children}
      {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
    </button>
  );
});
