import { EditableProfileCard } from '@/features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();

  return (
    <Page
      className={classNames('', {}, [className])}
      data-testid="ProfilePage"
    >
      <EditableProfileCard id={id} />
    </Page>
  );
};

export default ProfilePage;
