import { useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { HStack } from '../Stack';

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  readonly?: boolean;
  onChange?: (value: T) => void;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, label, options, value, onChange, readonly } = props;

  const mods: Mods = {};

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  const optionsList = useMemo(() => {
    return options?.map((opt) => (
      <option
        className={cls.Option}
        value={opt.value}
        key={opt.value}
      >
        {opt.content}
      </option>
    ));
  }, [options]);

  return (
    <HStack
      className={classNames(cls.Wrapper, mods, [className])}
      gap="8"
    >
      {label && <span className={cls.Label}>{label + ':'}</span>}
      <div className={cls.SelectWrapper}>
        <select
          className={cls.Select}
          value={value}
          onChange={onChangeHandler}
          disabled={readonly}
        >
          {optionsList}
        </select>
      </div>
    </HStack>
  );
};
