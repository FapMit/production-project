import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  type?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    type = 'text',
    autoFocus,
    readonly,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(
    String(value)?.length || 0,
  );

  const isCaretVisible = isFocused && !readonly;

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autoFocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setCaretPosition(e.currentTarget.selectionStart || 0);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>{`${placeholder}>`}</div>
      )}

      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.Input}
          onBlur={onBlur}
          onFocus={onFocus}
          onSelect={onSelect}
          readOnly={readonly}
          {...otherProps}
        />
        {isCaretVisible && (
          <span
            className={cls.caret}
            style={{ left: `${caretPosition * 9}px` }}
          />
        )}
      </div>
    </div>
  );
});
