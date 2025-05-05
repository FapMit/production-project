import { getAddCommentFormError, getAddCommentFormText } from "../../model/selectors/addCommentFormSelectors";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { addCommentFormActions, addCommentFormReducer } from "../../model/slices/addCommentFormSlice";
import cls from "./AddCommentForm.module.scss";

interface addCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
  isLoading: boolean;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
}

const AddCommentForm = memo((props: addCommentFormProps) => {
  const { className, onSendComment, isLoading } = props
  const { t } = useTranslation('comments');

  const text = useSelector(getAddCommentFormText);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const error = useSelector(getAddCommentFormError);

  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback((text: string) => {
    dispatch(addCommentFormActions.setText(text))
  }, [dispatch])

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text])

  if (isLoading) {
    return null
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.addCommentForm, {}, [className])}>
        <Input
          className={cls.input}
          placeholder={t("Введите текст")}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button
          onClick={onSendHandler}
          theme={ButtonTheme.OUTLINE}
        >
          {t("Отправить")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;