import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleImageBlock } from '../../model/types/Article';
import cls from './ArticleImageBlockComponent.module.scss';
import {
  Text as TextDeprecated,
  TextAlign,
  TextSize,
} from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
  (props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <VStack
            className={classNames('', {}, [className])}
            justify="center"
            align="center"
            gap="8"
          >
            <img
              src={block.src}
              alt={block.title}
            />
            {block.title && (
              <Text
                title={block.title}
                size="m"
                align={'center'}
              />
            )}
          </VStack>
        }
        off={
          <div
            className={classNames(cls.ArticleImageBlockComponent, {}, [
              className,
            ])}
          >
            <img
              src={block.src}
              className={cls.img}
              alt={block.title}
            />
            {block.title && (
              <TextDeprecated
                title={block.title}
                size={TextSize.M}
                align={TextAlign.CENTER}
                className={cls.title}
              />
            )}
          </div>
        }
      />
    );
  },
);
