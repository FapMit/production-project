import { memo, useMemo } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from "./Select.module.scss";

interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  readonly?: boolean;
  onChange?: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {

  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly
  } = props;

  const mods: Mods = {};

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value)
  }

  const optionsList = useMemo(() => {
    return options?.map(opt => (
      <option
        className={cls.Option}
        value={opt.value}
        key={opt.value}
      >
        {opt.content}
      </option>
    ))
  }, [options]);

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {
        label && (
          <span className={cls.Label}>
            {label + '>'}
          </span>
        )
      }
      <select
        className={cls.Select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {
          optionsList
        }
      </select>
    </div>
  );
});