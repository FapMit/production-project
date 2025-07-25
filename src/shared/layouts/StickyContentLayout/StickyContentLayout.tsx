import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StickyContentLayout.module.scss';
import { ReactNode } from 'react';

interface StickyContentLayoutProps {
  className?: string;
  left?: ReactNode;
  content: ReactNode;
  right?: ReactNode;
}

export const StickyContentLayout = (props: StickyContentLayoutProps) => {
  const { className, left, content, right } = props;

  return (
    <div className={classNames(cls.MainLayout, {}, [className])}>
      {left && <div className={cls.left}>{left}</div>}
      <div className={cls.content}>{content}</div>
      {right && <div className={cls.right}>{right}</div>}
    </div>
  );
};
