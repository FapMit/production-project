import { Menu } from '@headlessui/react';
import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDownDirection } from '@/shared/types/ui';
import cls from './Dropdown.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import { AppLink } from '../../../AppLink';

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropDownDirection;
}

export const Dropdown = memo((props: DropdownProps) => {
  const { className, items, trigger, direction = 'bottom right' } = props;

  const menuClasses = [mapDirectionClass[direction], popupCls.menu];

  return (
    <Menu
      as="div"
      className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}
    >
      <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item) => {
          if (item.href) {
            return (
              <Menu.Item
                key={String(item.content)}
                as={AppLink}
                disabled={item.disabled}
                to={item.href}
              >
                {({ active }) => (
                  <div
                    className={classNames(
                      cls.item,
                      {
                        [cls.active]: active,
                      },
                      [],
                    )}
                  >
                    {item.content}
                  </div>
                )}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item>
              {({ active }) => (
                <button
                  type="button"
                  disabled={item.disabled}
                  onClick={item.onClick}
                  className={classNames(
                    cls.item,
                    {
                      [cls.active]: active,
                    },
                    [],
                  )}
                >
                  {item.content}
                </button>
              )}
            </Menu.Item>
          );
          // return (
          //   <Menu.Item
          //     key={String(item.content)}
          //     as={Fragment}
          //     disabled={item.disabled}
          //   >
          //     {({ active }: { active: boolean }) =>
          //       item.href ? (
          //         <AppLink
          //           to={item.href}
          //           className={classNames(
          //             cls.item,
          //             {
          //               [cls.active]: active,
          //             },
          //             [],
          //           )}
          //         >
          //           {item.content}
          //         </AppLink>
          //       ) : (
          //         <button
          //           type="button"
          //           disabled={item.disabled}
          //           onClick={item.onClick}
          //           className={classNames(
          //             cls.item,
          //             {
          //               [cls.active]: active,
          //             },
          //             [],
          //           )}
          //         >
          //           {item.content}
          //         </button>
          //       )
          //     }
          //   </Menu.Item>
          // );
        })}
      </Menu.Items>
    </Menu>
  );
});
