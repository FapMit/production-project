import { memo } from 'react';
import ListIcon from '@/shared/assets/icons/list.svg';
import TileIcon from '@/shared/assets/icons/tile.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/deprecated/Icon';
import cls from './ArticleViewSelector.module.scss';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { ArticleView } from '@/entities/Article';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.LIST,
    icon: ListIcon,
  },
  {
    view: ArticleView.TILE,
    icon: TileIcon,
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
    <HStack
      gap="16"
      className={classNames('', {}, [className])}
    >
      {viewTypes.map((viewType) => {
        return (
          <Button
            onClick={onClick(viewType.view)}
            key={viewType.view}
          >
            <Icon
              Svg={viewType.icon}
              className={classNames(cls.viewSvg, {
                [cls.selected]: viewType.view === view,
              })}
              width={32}
              height={32}
            />
          </Button>
        );
      })}
    </HStack>
  );
});
