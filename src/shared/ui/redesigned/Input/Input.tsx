import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { InputHTMLAttributes, memo, ReactNode, useEffect, useRef } from 'react';
import { HStack } from '../Stack';
import { Text } from '../Text';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  type?: string;
  label?: string;
  placeholder?: string;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    label,
    type = 'text',
    autoFocus,
    readonly,
    addonLeft,
    addonRight,
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
    [cls.withAddonLeft]: Boolean(addonLeft),
    [cls.withAddonRight]: Boolean(addonRight),
  };

  return (
    <HStack
      className={classNames(cls.InputWrapper, {}, [className])}
      gap="8"
    >
      {label && (
        <Text
          nowrap
          text={label + ':'}
        />
      )}

      <div className={classNames(cls.InputWithIcon, mods, [])}>
        {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
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
        {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
      </div>
    </HStack>
  );
});
