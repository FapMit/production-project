import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { useTranslation } from "react-i18next";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import HomeIcon from "shared/assets/icons/home.svg";
import AboutIcon from "shared/assets/icons/about.svg";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return ( 
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
    >
      <Button 
        theme = {ButtonTheme.BACKGROUND_INVERTED}
        data-testid="sidebar-toggle" 
        onClick={onToggle}
        square
        size = {ButtonSize.L}
        className={cls.collapseBtn}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={cls.items}>
        <AppLink 
          theme={AppLinkTheme.INVERTED} 
          to={RoutePath.main}
          className={cls.link}
        >
          <HomeIcon/>
          <span>{t('Главная')}</span>
        </AppLink>
        <AppLink 
          theme={AppLinkTheme.INVERTED} 
          to={RoutePath.about}
          className={cls.link}
        >
          <AboutIcon/>
          <span>{t('О нас')}</span>
        </AppLink>  
      </div>

      <div className={cls.switchers}>
        <LangSwitcher short={collapsed}/>
        <ThemeSwitcher/>
      </div>
    </div>
  );
}