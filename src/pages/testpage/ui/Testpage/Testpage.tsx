import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Testpage.module.scss';
import { memo } from 'react';

interface TestpageProps {
  className?: string;
}

export const Testpage = memo((props: TestpageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Testpage, {}, [className])}>
      
    </div>
  );
});