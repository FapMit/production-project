import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { memo, useCallback } from 'react';

import CopyIcon from '@/shared/assets/icons/copyRedesigned.svg';
import { Icon } from '../Icon';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <div className={classNames(cls.CodeRedesigned, {}, [className])}>
      <div className={cls.copyBtn}>
        <Icon
          clickable
          onClick={onCopy}
          Svg={CopyIcon}
        />
      </div>
      <pre className={cls.Code}>
        <code>{text}</code>
      </pre>
    </div>
  );
});
