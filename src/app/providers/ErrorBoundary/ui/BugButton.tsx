import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Компонент для проверки работы ошибок
export const BugButton = () => {
  const [error, setError] = useState<boolean>(false);
  const { t } = useTranslation();

  const onThrowError = () => setError(true)

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return ( 
    <Button onClick={onThrowError} theme={ThemeButton.OUTLINE}>
      {t('Вызвать ошибку')}
    </Button>
  );
}