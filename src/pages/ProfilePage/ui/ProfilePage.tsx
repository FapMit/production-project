import { fetchProfileData, profileReducer } from "entities/Profile";
import { ProfileCard } from "entities/Profile/ui/ProfileCard/ProfileCard";
import { useEffect } from "react";
// import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

const reducers: ReducersList = {
  profile: profileReducer,
}

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  // const { t } = useTranslation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
}

export default ProfilePage;