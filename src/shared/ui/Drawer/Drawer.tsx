import { useTheme } from "app/providers/ThemeProvider";
import { memo, ReactNode } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Overlay } from "../Overlay/Overlay";
import { Portal } from "../Portal/Portal";
import cls from "./Drawer.module.scss";
import { useModal } from "shared/lib/hooks/useModal/useModal";

interface DrawerProps {
  className?: string;
  children: ReactNode;
  onClose?: () => void;
  isOpen?: boolean;
  lazy?: boolean;
}


export const Drawer = memo((props: DrawerProps) => {
  const { className, children, onClose, isOpen, lazy } = props;

  const {
    close,
    isClosing,
    isMounted,
  } = useModal({
    isOpen,
    onClose,
    animationDelay: 300
  });
  const { theme } = useTheme();
  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay onClick={close} />
        <div
          className={cls.content}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
});