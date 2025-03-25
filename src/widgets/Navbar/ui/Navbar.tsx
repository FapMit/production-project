import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";


interface NavbarProps {
  className?: string;

}

export const Navbar = ({ className }: NavbarProps) => {
  
  const {t} = useTranslation();  

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onClose = useCallback(() => {
    setIsAuthModal(false);
  },[]);

  const onShow = useCallback(() => {
    setIsAuthModal(true);
  },[]);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button 
        theme={ButtonTheme.CLEAR_INVERTED} 
        onClick={onShow}
        className={cls.link}
      >
        {t('Войти')}
      </Button>
      
      <LoginModal 
        isOpen={isAuthModal} 
        onClose={onClose}
      />
    </div>
  );
}





