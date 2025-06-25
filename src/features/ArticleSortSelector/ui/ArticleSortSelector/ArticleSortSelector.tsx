import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleSortSelector.module.scss';
import { useTranslation } from 'react-i18next';
import {
  Select as SelectDeprecated,
  SelectOption,
} from '@/shared/ui/deprecated/Select';
import { memo, useMemo } from 'react';
import { SortOrder } from '@/shared/types/sort';
import { ArticleSortField } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { className, sort, order, onChangeOrder, onChangeSort } = props;
  const { t } = useTranslation('articles');

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: 'asc',
        content: t('возрастанию'),
      },
      {
        value: 'desc',
        content: t('убыванию'),
      },
    ],
    [t],
  );

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t('дате создания'),
      },
      {
        value: ArticleSortField.TITLE,
        content: t('названию'),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t('просмотрам'),
      },
    ],
    [t],
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <VStack
          className={classNames(cls.ArticleSortSelectorRedesigned, {}, [
            className,
          ])}
          gap="8"
        >
          <Text text={t('Сортировать по:')} />
          <ListBox
            items={sortFieldOptions}
            value={sort}
            onChange={onChangeSort}
          />
          <ListBox
            items={orderOptions}
            value={order}
            onChange={onChangeOrder}
          />
        </VStack>
      }
      off={
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
          <SelectDeprecated
            label={t('Сортировка по')}
            options={sortFieldOptions}
            value={sort}
            onChange={onChangeSort}
          />
          <SelectDeprecated
            label={t('по')}
            options={orderOptions}
            value={order}
            onChange={onChangeOrder}
          />
        </div>
      }
    />
  );
});
