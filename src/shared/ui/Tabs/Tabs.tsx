import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '../Card/Card';
import cls from './Tabs.module.scss';
import { HStack } from '../Stack';

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
  const { className, tabs, value, onTabClick } = props;

  const onClickHandle = useCallback(
    (tab: TabItem) => {
      return () => {
        onTabClick(tab);
      };
    },
    [onTabClick],
  );

  return (
    <HStack
      max
      gap='8'
      className={classNames('', {}, [className])}>
      {tabs.map((tab) => (
        <Card
          className={cls.tab}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          key={tab.value}
          onClick={onClickHandle(tab)}>
          {tab.content}
        </Card>
      ))}
    </HStack>
  );
});
