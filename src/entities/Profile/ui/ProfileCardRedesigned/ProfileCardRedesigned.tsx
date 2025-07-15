import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Input } from '@/shared/ui/redesigned/Input';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

export const ProfileCardRedesignedLoader = () => {
  return (
    <Card
      max
      padding="24"
    >
      <VStack
        max
        gap="16"
        align="center"
      >
        <Skeleton
          borderRadius={'50%'}
          maxWidth={128}
          height={128}
        />
        <HStack
          gap="32"
          max
        >
          <VStack
            gap="16"
            max
          >
            <Skeleton
              width={'100%'}
              height={38}
            />
            <Skeleton
              width={'100%'}
              height={38}
            />
            <Skeleton
              width={'100%'}
              height={38}
            />
            <Skeleton
              width={'100%'}
              height={38}
            />
          </VStack>
          <VStack
            gap="16"
            max
          >
            <Skeleton
              width={'100%'}
              height={38}
            />
            <Skeleton
              width={'100%'}
              height={38}
            />
            <Skeleton
              width={'100%'}
              height={38}
            />
            <Skeleton
              width={'100%'}
              height={38}
            />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  );
};

export const ProfileCardRedesignedError = () => {
  const { t } = useTranslation('profile');
  return (
    <HStack
      max
      gap="8"
      justify="center"
    >
      <Text
        text={t('Попробуйте обновить страницу')}
        title={t('Произошла ошибка при загрузке профиля')}
        variant="error"
        align="center"
      />
    </HStack>
  );
};

export const ProfileCardRedesigned = (props: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  const {
    className,
    data,
    readonly = true,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeEmail,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  return (
    <Card
      max
      padding="24"
      style={{ overflow: 'visible' }}
    >
      <VStack
        max
        gap="16"
        className={classNames('', {}, [className])}
        align="center"
      >
        <Avatar
          src={data?.avatar}
          size={128}
          circle
          alt={data?.firstname}
        />
        <HStack
          justify="between"
          gap="24"
          max
        >
          <VStack
            max
            gap="16"
          >
            <Input
              value={data?.firstname}
              placeholder={t('Имя')}
              label={t('Имя')}
              onChange={onChangeFirstName}
              readonly={readonly}
              data-testid="ProfileCard.FirstName"
            />
            <Input
              value={data?.lastname}
              placeholder={t('Фамилия')}
              label={t('Фамилия')}
              onChange={onChangeLastName}
              readonly={readonly}
              data-testid="ProfileCard.LastName"
            />
            <Input
              value={data?.age}
              placeholder={t('Возраст')}
              label={t('Возраст')}
              onChange={onChangeAge}
              readonly={readonly}
              data-testid="ProfileCard.Age"
            />
            <Input
              value={data?.city}
              placeholder={t('Город')}
              label={t('Город')}
              onChange={onChangeCity}
              readonly={readonly}
              data-testid="ProfileCard.City"
            />
          </VStack>
          <VStack
            max
            gap="16"
          >
            <Input
              value={data?.email}
              placeholder={t('Почта')}
              label={t('Почта')}
              onChange={onChangeEmail}
              readonly={readonly}
              data-testid="ProfileCard.Email"
            />
            <Input
              value={data?.avatar}
              placeholder={t('Ссылка на аватар')}
              label={t('Ссылка на аватар')}
              onChange={onChangeAvatar}
              readonly={readonly}
              data-testid="ProfileCard.Avatar"
            />
            <CurrencySelect
              value={data?.currency}
              onChange={onChangeCurrency}
              readonly={readonly}
              data-testid="ProfileCard.Currency"
            />
            <CountrySelect
              value={data?.country}
              onChange={onChangeCountry}
              readonly={readonly}
              data-testid="ProfileCard.Country"
            />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  );
};
