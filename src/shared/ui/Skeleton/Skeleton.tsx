import { CSSProperties, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Skeleton.module.scss";

interface SkeletonProps {
  className?: string;
  height?: string | number;
  maxWidth?: string | number;
  borderRadius?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
  const { 
    className,
    height,
    maxWidth,
    borderRadius,
  } = props;

  const styles: CSSProperties = {
    maxWidth,
    height,
    borderRadius,
  }

  return (
    <div className={classNames(cls.Skeleton, {}, [className])} style={styles} >
      
    </div>
  );
});