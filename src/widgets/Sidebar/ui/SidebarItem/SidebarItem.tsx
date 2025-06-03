import cls from "./SidebarItem.module.scss";
import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink";
import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { SidebarItemType } from "../../model/types/sidebar";
import { HStack } from "@/shared/ui/Stack";



interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation()

  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) return null;

  return (
    <AppLink
      theme={AppLinkTheme.INVERTED}
      to={item.path}
      className={classNames(cls.link, { [cls.collapsed]: collapsed })}
    >
      <HStack justify="center"
        align="start"
        gap="16">
        <item.Icon />
        <span>{t(item.text)}</span>
      </HStack>
    </AppLink>
  );
});