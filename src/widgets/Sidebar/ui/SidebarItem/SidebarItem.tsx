import cls from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';
import {
  AppLink as AppLinkDeprecated,
  AppLinkTheme,
} from '@/shared/ui/deprecated/AppLink';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../../model/types/sidebar';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();

  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) return null;

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <AppLink
          variant="primary"
          to={item.path}
          className={classNames(cls.linkRedesigned, {
            [cls.collapsed]: collapsed,
          })}
          activeClassName={cls.linkActive}
        >
          <HStack
            justify="start"
            align="center"
            gap={'8'}
          >
            <Icon
              Svg={item.Icon}
              className={cls.svgIcon}
            />
            <span>{t(item.text)}</span>
          </HStack>
        </AppLink>
      }
      off={
        <AppLinkDeprecated
          theme={AppLinkTheme.INVERTED}
          to={item.path}
          className={classNames(cls.link, { [cls.collapsed]: collapsed })}
        >
          <HStack
            justify="center"
            align="start"
            gap="16"
          >
            <item.Icon />
            <span>{t(item.text)}</span>
          </HStack>
        </AppLinkDeprecated>
      }
    />
  );
});
