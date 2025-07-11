import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
  className?: string;
}

export const FiltersContainer = (props: FiltersContainerProps) => {
  const { className } = props;

  const {
    order,
    sort,
    search,
    type,
    onChangeOrder,
    onChangeSort,
    onChangeSearch,
    onChangeType,
  } = useArticleFilters();

  return (
    <ArticlesFilters
      className={classNames('', {}, [className])}
      order={order}
      sort={sort}
      search={search}
      type={type}
      onChangeOrder={onChangeOrder}
      onChangeSort={onChangeSort}
      onChangeSearch={onChangeSearch}
      onChangeType={onChangeType}
    />
  );
};
