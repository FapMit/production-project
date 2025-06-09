import defaultProfileImage from "@/shared/assets/default/default.png";
import defaultArticleImage from "@/shared/assets/default/articleDefault.jpg";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import { CSSProperties, useMemo } from "react";
import { AppImage } from "../AppImage";
import { Skeleton } from "../Skeleton";
import cls from "./Avatar.module.scss";


interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
  circle?: boolean;
  isArticle?: boolean;
}

export const Avatar = (props: AvatarProps) => {
  const {
    className,
    src,
    alt,
    size,
    circle = false,
    isArticle
  } = props;

  const mods: Mods = {
    [cls.circle]: circle
  }

  const styles = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size]);

  const fallback =
    <Skeleton width={size}
      height={size}
      borderRadius="50%"
    />;

  const errorFallback =
    <img
      src={isArticle ? defaultArticleImage : defaultProfileImage}
      alt={alt}
      style={styles}
    />

  return (
    <div className={classNames(cls.Avatar, mods, [className])}>
      <AppImage
        errorFalback={errorFallback}
        fallback={fallback}
        src={src}
        alt={alt}
        style={styles} />
    </div>
  );
}