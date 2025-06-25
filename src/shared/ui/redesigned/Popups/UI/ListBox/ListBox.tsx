import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode, useMemo } from 'react';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDownDirection } from '@/shared/types/ui';
import { Icon } from '../../../Icon/Icon';
import { HStack } from '../../../../redesigned/Stack';
import { mapDirectionClass } from '../../styles/consts';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { Button } from '../../../Button';

export interface ListBoxItem<T extends string> {
  value: T;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps<T extends string> {
  className?: string;
  items: ListBoxItem<T>[];
  value?: T;
  defaultValue?: string;
  onChange: (value: T) => void;
  label?: string;
  readonly?: boolean;
  direction?: DropDownDirection;
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    label,
    readonly,
    direction = 'bottom right',
  } = props;

  const optionsClasses = [mapDirectionClass[direction], popupCls.menu];

  const selectedItem = useMemo(() => {
    return items.find((item) => item.value === value);
  }, [items, value]);

  return (
    <HStack
      gap="8"
      className={classNames(cls.ListBox, {}, [])}
    >
      {label && <span className={cls.Label}>{label + ':'}</span>}
      <HListBox
        disabled={readonly}
        as={'div'}
        className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button
          className={popupCls.trigger}
          as="div"
        >
          <Button
            variant="light"
            disabled={readonly}
            className={cls.buttonInner}
            fullWidth
            addonRight={
              <Icon
                Svg={ArrowIcon}
                className={cls.buttonArrowIcon}
              />
            }
          >
            {selectedItem?.content ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options
          className={classNames(cls.options, {}, optionsClasses)}
        >
          {items.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, {
                    [cls.selected]: selected,
                    [cls.active]: active,
                    [cls.disabled]: item.disabled,
                  })}
                >
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
};
