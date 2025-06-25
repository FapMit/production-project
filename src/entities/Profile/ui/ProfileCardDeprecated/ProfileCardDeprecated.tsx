import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Loader, LoaderSize } from '@/shared/ui/deprecated/Loader';
import { Text, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text';
import cls from './ProfileCardDeprecated.module.scss';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';

export const ProfileCardDeprecatedLoader = () => {
  return (
    <HStack
      justify="center"
      max
      className={classNames(cls.ProfileCard, {}, [cls.loading])}
    >
      <Loader size={LoaderSize.L} />
    </HStack>
  );
};

export const ProfileCardDeprecatedError = () => {
  const { t } = useTranslation('profile');
  return (
    <HStack
      max
      gap="8"
      justify="center"
      className={classNames(cls.ProfileCard, {}, [cls.error])}
    >
      <Text
        text={t('Попробуйте обновить страницу')}
        title={t('Произошла ошибка при загрузке профиля')}
        theme={TextTheme.ERROR}
        align={TextAlign.CENTER}
      />
    </HStack>
  );
};

export const ProfileCardDeprecated = (props: ProfileCardProps) => {
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

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack
      max
      gap="16"
      className={classNames(cls.ProfileCard, mods, [className])}
    >
      <AvatarDeprecated
        src={data?.avatar}
        size={200}
        circle
        alt={data?.firstname}
        className={cls.centered}
      />
      <InputDeprecated
        value={data?.firstname}
        placeholder={t('Ваше имя')}
        className={cls.input}
        onChange={onChangeFirstName}
        readonly={readonly}
        data-testid="ProfileCard.FirstName"
      />
      <InputDeprecated
        value={data?.lastname}
        placeholder={t('Ваша фамилия')}
        className={cls.input}
        onChange={onChangeLastName}
        readonly={readonly}
        data-testid="ProfileCard.LastName"
      />
      <InputDeprecated
        value={data?.age}
        placeholder={t('Ваш возраст')}
        className={cls.input}
        onChange={onChangeAge}
        readonly={readonly}
        data-testid="ProfileCard.Age"
      />
      <InputDeprecated
        value={data?.city}
        placeholder={t('Город')}
        className={cls.input}
        onChange={onChangeCity}
        readonly={readonly}
        data-testid="ProfileCard.City"
      />
      <InputDeprecated
        value={data?.email}
        placeholder={t('Почта')}
        className={cls.input}
        onChange={onChangeEmail}
        readonly={readonly}
        data-testid="ProfileCard.Email"
      />
      <InputDeprecated
        value={data?.avatar}
        placeholder={t('Аватар')}
        className={cls.input}
        onChange={onChangeAvatar}
        readonly={readonly}
        data-testid="ProfileCard.Avatar"
      />
      <CountrySelect
        className={cls.inputSelect}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
        data-testid="ProfileCard.Country"
      />
      <CurrencySelect
        className={cls.inputSelect}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
        data-testid="ProfileCard.Currency"
      />
    </VStack>
  );
};
