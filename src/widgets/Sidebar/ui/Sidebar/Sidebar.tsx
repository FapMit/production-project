import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { HStack } from 'shared/ui/Stack';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems)
  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  const itemsList = useMemo(() => sidebarItemsList.map(item =>
    <SidebarItem
      key={item.path}
      item={item}
      collapsed={collapsed}
    />
  ), [sidebarItemsList, collapsed]);

  const switchers = useMemo(() => {
    return (
      <>
        <LangSwitcher short={collapsed} />
        <ThemeSwitcher />
      </>
    )
  }, [collapsed])

  return (
    <menu
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button
        theme={ButtonTheme.BACKGROUND_INVERTED}
        data-testid="sidebar-toggle"
        onClick={onToggle}
        square
        size={ButtonSize.L}
        className={cls.collapseBtn}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <VStack justify='center' gap='16' className={cls.items}>
        {itemsList}
      </VStack>

      {
        collapsed ? 
          <VStack align='center' justify='center' gap='16' className={cls.switchers}>
            {switchers}
          </VStack>
          : 
          <HStack align='center' justify='center' gap='16' className={cls.switchers}>
            {switchers}
          </HStack>
      }
    </menu>
  );
});