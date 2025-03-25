import { LoginForm } from "../LoginForm/LoginForm";
import { Modal } from "shared/ui/Modal/Modal";

interface LoginModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
  const {
    onClose,
    isOpen,
  } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <LoginForm />
    </Modal>
  );
}