import { CSSProperties, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  maxWidth?: string | number;
  borderRadius?: string;
  width?: string | number;
}

/**
 * @deprecated
 * Устарел, используйте новые компоненты из папки redesigned
 */

export const Skeleton = memo((props: SkeletonProps) => {
  const { className, height, maxWidth, width, borderRadius } = props;

  const styles: CSSProperties = {
    maxWidth,
    height,
    borderRadius,
    width,
  };

  return (
    <div
      className={classNames(cls.Skeleton, {}, [className])}
      style={styles}
    ></div>
  );
});
