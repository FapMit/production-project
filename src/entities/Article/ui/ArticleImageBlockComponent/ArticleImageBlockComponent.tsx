import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleImageBlock } from "../../model/types/Article";
import cls from "./ArticleImageBlockComponent.module.scss";
import { Text, TextAlign, TextSize } from "shared/ui/Text/Text";

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
  const { className, block } = props;

  return (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
      <img 
        src={block.src} 
        className={cls.img} 
        alt={block.title} 
      />
      {block.title && (
        <Text 
          title={block.title} 
          size={TextSize.M} 
          align={TextAlign.CENTER} 
          className={cls.title}
        />
      )}
    </div>
  );
});