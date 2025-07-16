import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { memo, useMemo, useState } from 'react';

import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { useSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { Flex } from '@/shared/ui/redesigned/Stack/Flex/Flex';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSidebarItems();
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
    return toggleFeatures({
      name: 'isAppRedesigned',
      on: () => (
        <>
          <ThemeSwitcher />
          <LangSwitcher />
        </>
      ),
      off: () => (
        <>
          <ThemeSwitcher />
          <LangSwitcher short={collapsed} />
        </>
      ),
    });
  }, [collapsed]);

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <aside
          data-testid="sidebar"
          className={classNames(
            cls.SidebarRedesigned,
            { [cls.collapsedRedesigned]: collapsed },
            [className],
          )}
        >
          <AppLogo
            className={cls.appLogo}
            size={collapsed ? 30 : 50}
          />
          <VStack
            role="navigation"
            justify="center"
            align={collapsed ? 'center' : undefined}
            gap="16"
            className={cls.items}
          >
            {itemsList}
          </VStack>
          <div className={cls.collapseBtnWrapper}>
            <Icon
              data-testid="sidebar-toggle"
              clickable
              onClick={onToggle}
              className={classNames(cls.collapseBtn, {}, [className])}
              Svg={ArrowIcon}
            />
          </div>
          <Flex
            align="center"
            justify="center"
            gap="16"
            direction={collapsed ? 'column' : 'row'}
            className={cls.switchers}
          >
            {switchers}
          </Flex>
        </aside>
      }
      off={
        <aside
          data-testid="sidebar"
          className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
            className,
          ])}
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

          <VStack
            role="navigation"
            justify="center"
            gap="16"
            className={cls.items}
          >
            {itemsList}
          </VStack>

          {collapsed ? (
            <VStack
              align="center"
              justify="center"
              gap="16"
              className={cls.switchers}
            >
              {switchers}
            </VStack>
          ) : (
            <HStack
              align="center"
              justify="center"
              gap="16"
              className={cls.switchers}
            >
              {switchers}
            </HStack>
          )}
        </aside>
      }
    />
  );

  return (
    <aside
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
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

      <VStack
        role="navigation"
        justify="center"
        gap="16"
        className={cls.items}
      >
        {itemsList}
      </VStack>

      {collapsed ? (
        <VStack
          align="center"
          justify="center"
          gap="16"
          className={cls.switchers}
        >
          {switchers}
        </VStack>
      ) : (
        <HStack
          align="center"
          justify="center"
          gap="16"
          className={cls.switchers}
        >
          {switchers}
        </HStack>
      )}
    </aside>
  );
});
