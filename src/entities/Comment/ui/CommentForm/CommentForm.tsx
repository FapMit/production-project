import { commentActions, commentReducer } from "../../model/slices/commentsSlice";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { HStack } from "@/shared/ui/Stack";
import cls from "./CommentForm.module.scss";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { getCommentError, getCommentText } from "../../model/selectors/commentsSelectors";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Text, TextTheme } from "@/shared/ui/Text";

interface CommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
  isLoading: boolean;
}

const reducers: ReducersList = {
  comments: commentReducer
}

export const CommentForm = (props: CommentFormProps) => {

  const { className, onSendComment, isLoading } = props
  const { t } = useTranslation('comments');

  const text = useSelector(getCommentText);
  const error = useSelector(getCommentError);

  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback((text: string) => {
    dispatch(commentActions.setText(text))
  }, [dispatch])

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text])

  if (isLoading) {
    return null
  }

  if (error) {
    return <Text text={error}
      theme={TextTheme.ERROR} />
  }

  return (
    <DynamicModuleLoader reducers={reducers}
      removeAfterUnmount>
      <HStack className={classNames(cls.CommentForm, {}, [className])}>
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
      </HStack>
    </DynamicModuleLoader>

  );
}