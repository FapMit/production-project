import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import ArrowIcon from '@/shared/assets/icons/arrowDown.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDownDirection } from '@/shared/types/ui';
import { Button, ButtonTheme } from '../../../Button/Button';
import { Icon } from '../../../Icon/Icon';
import { HStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/consts';
import cls from './ListBox.module.scss';
import popupCls from "../../styles/popup.module.scss";

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean
}

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
    direction = 'bottom right',
  } = props;

  const optionsClasses = [mapDirectionClass[direction]];

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
        disabled={readonly}
        as={'div'}
        className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button
          disabled={readonly} 
          className={popupCls.trigger}
          as='div'
        >
          <Button
            theme={ButtonTheme.OUTLINE}
            disabled={readonly}
            className={cls.buttonInner}
          >
            {value ?? defaultValue}
            <Icon Svg={ArrowIcon}
              className={cls.buttonArrowIcon} />
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