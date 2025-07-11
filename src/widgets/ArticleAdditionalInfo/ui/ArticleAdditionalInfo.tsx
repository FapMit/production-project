import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleAdditionalInfo.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { getUserAuthData, User } from '@/entities/User';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { Text } from '@/shared/ui/redesigned/Text';
import { useSelector } from 'react-redux';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { getRouteProfile } from '@/shared/const/router';

interface ArticleAdditionalInfoProps {
  className?: string;
  author: User;
  createdAt: string;
  views: number;
  onEdit: () => void;
}

export const ArticleAdditionalInfo = memo(
  (props: ArticleAdditionalInfoProps) => {
    const { className, author, createdAt, views, onEdit } = props;
    const { t } = useTranslation('article-details');

    const authData = useSelector(getUserAuthData);

    if (!authData) return;

    const isAuthor = author.id === authData.id;

    return (
      <VStack
        className={classNames(cls.ArticleAdditionalInfo, {}, [className])}
        gap="32"
      >
        <AppLink to={getRouteProfile(author.id)}>
          <HStack gap="8">
            <Avatar
              src={author.avatar}
              size={32}
              circle
            />
            <Text
              text={author.email}
              bold
            />
            <Text text={createdAt} />
          </HStack>
        </AppLink>
        {isAuthor && (
          <Button
            rounded
            onClick={onEdit}
          >
            {t('Редактировать')}
          </Button>
        )}
        <Text text={t('{{count}} просмотров', { count: views })} />
      </VStack>
    );
  },
);
