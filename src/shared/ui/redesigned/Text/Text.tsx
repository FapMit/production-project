import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import { memo } from 'react';

export type TextVariant = 'primary' | 'error' | 'accent';

export type TextAlign = 'left' | 'right' | 'center';

export type TextSize = 's' | 'm' | 'l' | 'xl';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
  align?: TextAlign;
  size?: TextSize;
  nowrap?: boolean;
  bold?: boolean;
  'data-testid'?: string;
}

type HeaderTag = 'h1' | 'h2' | 'h3' | 'h4';

const mapSizeToHeaderTag: Record<TextSize, HeaderTag> = {
  xl: 'h1',
  l: 'h2',
  m: 'h3',
  s: 'h4',
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    variant = 'primary',
    align = 'left',
    size = 'm',
    nowrap,
    bold,
    'data-testid': dataTestId = 'Text',
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  const additionalClasses = [className, cls[variant], cls[align], cls[size]];

  return (
    <div
      className={classNames(
        cls.Text,
        { [cls.noWrap]: nowrap, [cls.bold]: bold },
        additionalClasses,
      )}
      data-testid={dataTestId}
    >
      {title && (
        <HeaderTag
          className={cls.title}
          data-testid={`${dataTestId}.Header`}
        >
          {title}
        </HeaderTag>
      )}
      {text && (
        <p
          className={cls.text}
          data-testid={`${dataTestId}.Paragraph`}
        >
          {text}
        </p>
      )}
    </div>
  );
});
