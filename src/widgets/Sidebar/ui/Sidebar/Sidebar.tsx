import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { memo, useMemo, useState } from 'react';

import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(
    () =>
      sidebarItemsList.map((item) => (
        <SidebarItem
          key={item.path}
          item={item}
          collapsed={collapsed}
        />
      )),
    [sidebarItemsList, collapsed],
  );

  const switchers = useMemo(() => {
    return (
      <>
        <LangSwitcher short={collapsed} />
        <ThemeSwitcher />
      </>
    );
  }, [collapsed]);

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <aside
          data-testid='sidebar'
          className={classNames(
            cls.Sidebar_Redisigned,
            { [cls.collapsed]: collapsed },
            [className],
          )}>
          <AppLogo className={cls.appLogo}/>
          {/* <Button
            theme={ButtonTheme.CLEAR}
            data-testid='sidebar-toggle'
            onClick={onToggle}
            square
            size={ButtonSize.L}
            className={cls.collapseBtn_Redisigned}>
            {collapsed ? '>' : '<'}
          </Button> */}
        </aside>
      }
      off={
        <aside
          data-testid='sidebar'
          className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
            className,
          ])}>
          <Button
            theme={ButtonTheme.BACKGROUND_INVERTED}
            data-testid='sidebar-toggle'
            onClick={onToggle}
            square
            size={ButtonSize.L}
            className={cls.collapseBtn}>
            {collapsed ? '>' : '<'}
          </Button>

          <VStack
            role='navigation'
            justify='center'
            gap='16'
            className={cls.items}>
            {itemsList}
          </VStack>

          {collapsed ? (
            <VStack
              align='center'
              justify='center'
              gap='16'
              className={cls.switchers}>
              {switchers}
            </VStack>
          ) : (
            <HStack
              align='center'
              justify='center'
              gap='16'
              className={cls.switchers}>
              {switchers}
            </HStack>
          )}
        </aside>
      }
    />
  );

  return (
    <aside
      data-testid='sidebar'
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}>
      <Button
        theme={ButtonTheme.BACKGROUND_INVERTED}
        data-testid='sidebar-toggle'
        onClick={onToggle}
        square
        size={ButtonSize.L}
        className={cls.collapseBtn}>
        {collapsed ? '>' : '<'}
      </Button>

      <VStack
        role='navigation'
        justify='center'
        gap='16'
        className={cls.items}>
        {itemsList}
      </VStack>

      {collapsed ? (
        <VStack
          align='center'
          justify='center'
          gap='16'
          className={cls.switchers}>
          {switchers}
        </VStack>
      ) : (
        <HStack
          align='center'
          justify='center'
          gap='16'
          className={cls.switchers}>
          {switchers}
        </HStack>
      )}
    </aside>
  );
});
