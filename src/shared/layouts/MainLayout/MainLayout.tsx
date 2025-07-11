import { classNames } from '@/shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import cls from './MainLayout.module.scss';

interface MainLayoutProps {
  className?: string;
  header: ReactNode;
  content: ReactNode;
  sidebar: ReactNode;
  toolbar?: ReactNode;
}

export const MainLayout = (props: MainLayoutProps) => {
  const { className, header, content, sidebar, toolbar } = props;

  return (
    <div className={classNames(cls.MainLayout, {}, [className])}>
      <div className={cls.sidebar}>{sidebar}</div>
      <div className={cls.content}>{content}</div>
      <div className={cls.rightbar}>
        <div className={cls.header}>{header}</div>
        <div className={cls.toolbar}>{toolbar}</div>
      </div>
    </div>
  );
};
