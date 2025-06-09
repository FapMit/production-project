import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./AdminPanelPage.module.scss";
import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = ({ className }: AdminPanelPageProps) => {
  const { t } = useTranslation();

  return ( 
    <Page className={classNames(cls.AdminPanelPage, {}, [className])}
      data-testid="AdminPanelPage"
    >
      <p>{t('Панель администратора')}</p>
    </Page>
  );
}

export default AdminPanelPage;