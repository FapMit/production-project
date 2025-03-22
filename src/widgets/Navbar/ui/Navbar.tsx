import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/Modal/Modal";
import { useCallback, useState } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";


interface NavbarProps {
  className?: string;

}

export const Navbar = ({ className }: NavbarProps) => {
  
  const {t} = useTranslation();  

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev);
  },[]);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button 
        theme={ButtonTheme.CLEAR_INVERTED} 
        onClick={onToggleModal}
        className={cls.link}
      >
        {t('Войти')}
      </Button>
      
      <Modal 
        isOpen={isAuthModal} 
        onClose={onToggleModal}
      > 
        {t('Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolor ipsa temporibus vitae facere fugiat quis voluptatem repellendus omnis dicta.')}
      </Modal>
    </div>
  );
}





