import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Flex.module.scss';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export type FlexJustify = 'between' | 'around' | 'start' | 'end' | 'center';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '24' | '32';
export type FlexWrap = 'wrap' | 'nowrap';

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  end: cls.justifyEnd,
  center: cls.justifyCenter,
  between: cls.justifyBetween,
  around: cls.justifyAround,
};

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  end: cls.alignEnd,
  center: cls.alignCenter,
};

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  '4': cls.gap4,
  '8': cls.gap8,
  '16': cls.gap16,
  '24': cls.gap24,
  '32': cls.gap32,
};

const wrapClasses: Record<FlexWrap, string> = {
  wrap: cls.wrap,
  nowrap: cls.nowrap,
};

type divProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface FlexProps extends divProps {
  className?: string;
  children?: ReactNode;
  align?: FlexAlign;
  justify?: FlexJustify;
  direction: FlexDirection;
  gap?: FlexGap;
  wrap?: FlexWrap;
  max?: boolean;
}

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    align = 'center',
    justify = 'start',
    direction = 'row',
    gap,
    wrap = 'nowrap',
    max = false,
    ...otherProps
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    wrapClasses[wrap],
    gap && gapClasses[gap],
  ];

  const mods: Mods = {
    [cls.max]: max,
  };

  return (
    <div
      className={classNames(cls.Flex, mods, classes)}
      {...otherProps}
    >
      {children}
    </div>
  );
};
