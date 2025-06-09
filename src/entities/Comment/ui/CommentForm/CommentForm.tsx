import { classNames } from "@/shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { HStack } from "@/shared/ui/Stack";
import { Text, TextTheme } from "@/shared/ui/Text";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useCommentError, useCommentText } from "../../model/selectors/commentsSelectors";
import { commentReducer, useCommentActions } from "../../model/slices/commentsSlice";
import cls from "./CommentForm.module.scss";

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

  const text = useCommentText();
  const error = useCommentError();

  const { setText } = useCommentActions();

  const onCommentTextChange = useCallback((text: string) => {
    setText(text)
  }, [setText])

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