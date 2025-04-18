import { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleView } from "../../model/types/Article";
import cls from "./ArticleViewSelector.module.scss";
import TileIcon from "shared/assets/icons/tile.svg"
import ListIcon from "shared/assets/icons/list.svg"
import { Button } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";

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
  }
]

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const {
    className,
    view,
    onViewClick
  } = props;

  const onClick = (newView: ArticleView) => {
    return () => {
      onViewClick?.(newView);
    }
  }

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {
        viewTypes.map((viewType) => {
          return (
            <Button 
              onClick={onClick(viewType.view)}
              key={viewType.view}
            >
              <Icon 
                Svg={viewType.icon} 
                className={classNames('',{[cls.selected]: viewType.view === view})}
              />
            </Button>
          )
        })
      }
    </div>
  );
});