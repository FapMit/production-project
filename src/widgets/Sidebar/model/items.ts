import { SVGProps, VFC } from "react";
import HomeIcon from "shared/assets/icons/home.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: VFC<SVGProps<SVGSVGElement>>;
  authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: "/",
    text: "Главная",
    Icon: HomeIcon,
  },
  {
    path: "/about",
    text: "О нас",
    Icon: AboutIcon,
  },
  {
    path: "/profile",
    text: "Профиль",
    Icon: ProfileIcon,
    authOnly: true
  },
]