import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Country } from "../../model/types/country";
import { ListBox } from "shared/ui/Popups";

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (country: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.Kazahstan, content: Country.Kazahstan },
  { value: Country.Armenia, content: Country.Armenia },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    className,
    value,
    onChange,
    readonly
  } = props;

  const { t } = useTranslation('profile')

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange])

  return (
    <ListBox
      className={classNames("", {}, [className])}
      items={options}
      value={value}
      onChange={onChangeHandler}
      label={t("Страна")}
      defaultValue={t("Выберите страну")}
      readonly={readonly}
      direction='top right'
    />
  )
});