import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { InputHTMLAttributes, memo, ReactNode, useEffect, useRef } from 'react';
import { HStack } from '../Stack';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  type?: string;
  supportText?: string;
  placeholder?: string;
  icon?: ReactNode;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    supportText,
    icon,
    type = 'text',
    autoFocus,
    readonly,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) {
      ref.current?.focus();
    }
  }, [autoFocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  return (
    <HStack
      className={classNames(cls.InputWrapper, mods, [className])}
      gap="8"
    >
      {supportText && (
        <div className={cls.supportText}>{`${supportText}:`}</div>
      )}

      <div className={cls.InputWithIcon}>
        {icon && <div className={cls.icon}>{icon}</div>}
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.Input}
          readOnly={readonly}
          placeholder={placeholder}
          {...otherProps}
        />
      </div>
    </HStack>
  );
});
