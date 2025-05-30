import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entities/User";
import AboutIcon from "@/shared/assets/icons/about.svg";
import ArticlesIcon from "@/shared/assets/icons/articles.svg";
import HomeIcon from "@/shared/assets/icons/home.svg";
import ProfileIcon from "@/shared/assets/icons/profile.svg";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import { SidebarItemType } from "../types/sidebar";


export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        text: "Главная",
        Icon: HomeIcon,
      },
      {
        path: RoutePath.about,
        text: "О нас",
        Icon: AboutIcon,
      },
    ];

    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePath.profile + userData.id,
          text: "Профиль",
          Icon: ProfileIcon,
          authOnly: true
        },
        {
          path: RoutePath.articles,
          text: "Статьи",
          Icon: ArticlesIcon,
          authOnly: true
        }
      )
    }

    return sidebarItemsList;
  }
)