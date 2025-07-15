// import { LoginForm } from "../LoginForm/LoginForm";
import { Suspense } from 'react';
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async';
import { Modal } from '@/shared/ui/redesigned/Modal';
import {
  Loader as LoaderDeprecated,
  LoaderSize,
} from '@/shared/ui/deprecated/Loader';
import { ToggleFeatures } from '@/shared/lib/features';
import { Loader } from '@/shared/ui/redesigned/Loader';

interface LoginModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
  const { onClose, isOpen } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense
        fallback={
          <ToggleFeatures
            feature="isAppRedesigned"
            on={<Loader />}
            off={
              <LoaderDeprecated
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
                size={LoaderSize.L}
              />
            }
          />
        }
      >
        <LoginForm onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
