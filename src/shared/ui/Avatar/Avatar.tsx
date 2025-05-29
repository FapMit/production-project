import { CSSProperties, useMemo } from "react";
import defaultImage from "@/shared/assets/default/default.png";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import cls from "./Avatar.module.scss";


interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
  circle?: boolean;
}

export const Avatar = (props: AvatarProps) => {
  const {
    className,
    src,
    alt,
    size,
    circle = false
  } = props;

  const mods: Mods = {
    [cls.circle]: circle
  }

  const styles = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size]);

  return (
    <div className={classNames(cls.Avatar, mods, [className])}>
      <img src={!src ? defaultImage : src} alt={alt} style={styles} />
    </div>
  );
}