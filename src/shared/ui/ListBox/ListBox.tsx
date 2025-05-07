import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './ListBox.module.scss';
import { HStack } from '../Stack';
import { Icon } from '../Icon/Icon';
import ArrowIcon from 'shared/assets/icons/arrowDown.svg';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean
}

type DropDownDirection = 'bottom' | 'top';

interface ListBoxProps {
  className?: string;
  items: ListBoxItem[];
  value?: string;
  defaultValue?: string;
  onChange: <T extends string>(value: T) => void;
  label?: string;
  readonly?: boolean;
  direction?: DropDownDirection;
}

export const ListBox = (props: ListBoxProps) => {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    label,
    readonly,
    direction = 'bottom'
  } = props

  const optionsClasses = [cls[direction]]

  return (
    <HStack gap='8'>
      {
        label && (
          <span className={cls.Label}>
            {label + '>'}
          </span>
        )
      }
      <HListBox
        as={'div'}
        className={classNames(cls.ListBox, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button className={cls.trigger}>
          <Button
            theme={ButtonTheme.OUTLINE}
            disabled={readonly}
            className={cls.buttonInner}
          >
            {value ?? defaultValue}
            <Icon Svg={ArrowIcon} className={cls.buttonArrowIcon} />
          </Button>
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
          {items.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={
                    classNames(cls.item, {
                      [cls.selected]: selected,
                      [cls.active]: active,
                      [cls.disabled]: item.disabled
                    })
                  }
                >
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>

  )
};