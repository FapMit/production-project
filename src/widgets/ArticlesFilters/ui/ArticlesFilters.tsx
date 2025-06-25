import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { SortOrder } from '@/shared/types/sort';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { useTranslation } from 'react-i18next';
import { Input } from '@/shared/ui/redesigned/Input';
import searchIcon from '@/shared/assets/icons/search.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ArticlesFiltersProps {
  className?: string;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeSearch: (value: string) => void;
  onChangeType: (type: ArticleType) => void;
}

export const ArticlesFilters = (props: ArticlesFiltersProps) => {
  const {
    className,
    order,
    search,
    sort,
    type,
    onChangeOrder,
    onChangeSort,
    onChangeSearch,
    onChangeType,
  } = props;

  const { t } = useTranslation();

  return (
    <Card
      className={classNames(cls.ArticlesFilters, {}, [className])}
      padding="24"
    >
      <VStack gap="32">
        <Input
          placeholder={t('Найти')}
          value={search}
          onChange={onChangeSearch}
          icon={<Icon Svg={searchIcon} />}
        />
        <ArticleTypeTabs
          onChangeType={onChangeType}
          value={type}
        />
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
      </VStack>
    </Card>
  );
};
