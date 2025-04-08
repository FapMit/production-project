import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from "./Avatar.module.scss";
import defaultImage from "./default.png"

export enum AvatarSize {
  S = "avatar__s",
  M = "avatar__m",
  L = "avatar__l",
  XL = "avatar__xl"
}

interface AvatarProps {
  className?: string;
  src?: string;
  name?: string;
  size?: AvatarSize;
  circle?: boolean;
}

export const Avatar = (props: AvatarProps) => {
  const {
    className,
    src,
    name = "Avatar",
    size = AvatarSize.M,
    circle = false
  } = props;

  const mods: Mods = {
    [cls[size]]: true,
    [cls.circle]: circle
  }

  return ( 
    <div className={classNames(cls.Avatar, mods, [className])}>
      <img src={src == '' ? defaultImage : src} alt={name} />
    </div>
  );
}