import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ViewSelectorContainer.module.scss';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { Card } from '@/shared/ui/redesigned/Card';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ViewSelectorContainerProps {
  className?: string;
}

export const ViewSelectorContainer = (props: ViewSelectorContainerProps) => {
  const { className } = props;
  const { view, onChangeView } = useArticleFilters();
  return (
    <Card
      className={classNames(cls.ViewSelectorContainer, {}, [className])}
      variant="outlinedInverted"
      padding="0"
      borderRadius="32px"
    >
      <ArticleViewSelector
        view={view}
        onViewClick={onChangeView}
      />
    </Card>
  );
};
