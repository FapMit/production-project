import { memo } from 'react';
import ListIconDeprecated from '@/shared/assets/icons/list.svg';
import TileIconDeprecated from '@/shared/assets/icons/tile.svg';
import ListIcon from '@/shared/assets/icons/burger.svg';
import TileIcon from '@/shared/assets/icons/tileNew.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import cls from './ArticleViewSelector.module.scss';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { ArticleView } from '@/entities/Article';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.LIST,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => ListIcon,
      off: () => ListIconDeprecated,
    }),
  },
  {
    view: ArticleView.TILE,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => TileIcon,
      off: () => TileIconDeprecated,
    }),
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleView) => {
    return () => {
      onViewClick?.(newView);
    };
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <HStack
          className={classNames(cls.ArticleViewSelectorRedesigned, {}, [
            className,
          ])}
        >
          {viewTypes.map((viewType) => {
            return (
              <Icon
                className={classNames(cls.viewSvg, {
                  [cls.selected]: viewType.view === view,
                })}
                key={viewType.view}
                Svg={viewType.icon}
                width={52}
                height={52}
                clickable
                onClick={onClick(viewType.view)}
              />
            );
          })}
        </HStack>
      }
      off={
        <HStack
          gap="16"
          className={classNames('', {}, [className])}
        >
          {viewTypes.map((viewType) => {
            return (
              <ButtonDeprecated
                onClick={onClick(viewType.view)}
                key={viewType.view}
              >
                <IconDeprecated
                  Svg={viewType.icon}
                  className={classNames(cls.viewSvg, {
                    [cls.selected]: viewType.view === view,
                  })}
                  width={32}
                  height={32}
                />
              </ButtonDeprecated>
            );
          })}
        </HStack>
      }
    />
  );
});
