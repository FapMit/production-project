import { Country, CountrySelect } from "@/entities/Country";
import { Currency, CurrencySelect } from "@/entities/Currency";
import { useTranslation } from "react-i18next";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import { Avatar } from "@/shared/ui/Avatar";
import { Input } from "@/shared/ui/Input";
import { Loader, LoaderSize } from "@/shared/ui/Loader";
import { Text, TextAlign, TextTheme } from "@/shared/ui/Text";
import { Profile } from "../../model/types/profile";
import cls from "./ProfileCard.module.scss";
import { HStack, VStack } from "@/shared/ui/Stack";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeEmail?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency?: Currency) => void;
  onChangeCountry?: (country?: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  const {
    className,
    isLoading,
    error,
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
  }

  if (isLoading) return (
    <HStack className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
      <Loader size={LoaderSize.L}
        centered />
    </HStack>
  )

  if (error) return (
    <HStack max
      gap="8"
      justify="center"
      className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
      <Text
        text={t("Попробуйте обновить страницу")}
        title={t("Произошла ошибка при загрузке профиля")}
        theme={TextTheme.ERROR}
        align={TextAlign.CENTER}
      />
    </HStack>
  )
  return (
    <VStack max
      gap="16"
      className={classNames(cls.ProfileCard, mods, [className])}>
      <Avatar src={data?.avatar}
        size={200}
        circle
        alt={data?.firstname}
        className={cls.centered} />
      <Input
        value={data?.firstname}
        placeholder={t('Ваше имя')}
        className={cls.input}
        onChange={onChangeFirstName}
        readonly={readonly}
        data-testid="ProfileCard.FirstName"
      />
      <Input
        value={data?.lastname}
        placeholder={t('Ваша фамилия')}
        className={cls.input}
        onChange={onChangeLastName}
        readonly={readonly}
        data-testid="ProfileCard.LastName"
      />
      <Input
        value={data?.age}
        placeholder={t('Ваш возраст')}
        className={cls.input}
        onChange={onChangeAge}
        readonly={readonly}
        data-testid="ProfileCard.Age"
      />
      <Input
        value={data?.city}
        placeholder={t('Город')}
        className={cls.input}
        onChange={onChangeCity}
        readonly={readonly}
        data-testid="ProfileCard.City"
      />
      <Input
        value={data?.email}
        placeholder={t('Почта')}
        className={cls.input}
        onChange={onChangeEmail}
        readonly={readonly}
        data-testid="ProfileCard.Email"
      />
      <Input
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
}