// import { LoginForm } from "../LoginForm/LoginForm";
import { Suspense } from 'react';
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async';
import { Modal } from '@/shared/ui/Modal';
import { Loader, LoaderSize } from '@/shared/ui/Loader';

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
      lazy>
      <Suspense
        fallback={
          <Loader
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
            size={LoaderSize.L}
          />
        }>
        <LoginForm onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
