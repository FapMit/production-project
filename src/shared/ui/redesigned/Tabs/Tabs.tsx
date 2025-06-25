import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '../Card/Card';
import cls from './Tabs.module.scss';
import { Button } from '../Button';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
  direction?: FlexDirection;
}

export const Tabs = memo((props: TabsProps) => {
  const { className, tabs, value, onTabClick, direction = 'row' } = props;

  const onClickHandle = useCallback(
    (tab: TabItem) => {
      return () => {
        onTabClick(tab);
      };
    },
    [onTabClick],
  );

  return (
    <Flex
      direction={direction}
      max
      gap="8"
      className={classNames('', {}, [className])}
    >
      {tabs.map((tab) => (
        <Card
          variant={tab.value === value ? 'light' : 'normal'}
          key={tab.value}
          onClick={onClickHandle(tab)}
          max
          padding="0"
        >
          <Button
            variant="clear"
            fullWidth
            className={cls.tab}
          >
            {tab.content}
          </Button>
        </Card>
      ))}
    </Flex>
  );
});
