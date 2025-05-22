import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AdminPanelPage.module.scss";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page/Page";

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = ({ className }: AdminPanelPageProps) => {
  const { t } = useTranslation();

  return ( 
    <Page className={classNames(cls.AdminPanelPage, {}, [className])}>
      <p>Admin Panel Page</p>
    </Page>
  );
}

export default AdminPanelPage;