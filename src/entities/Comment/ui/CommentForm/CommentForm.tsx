import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  useCommentError,
  useCommentText,
} from '../../model/selectors/commentsSelectors';
import {
  commentReducer,
  useCommentActions,
} from '../../model/slices/commentsSlice';
import cls from './CommentForm.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Input } from '@/shared/ui/redesigned/Input';
import { Icon } from '@/shared/ui/redesigned/Icon';
import SendIcon from '@/shared/assets/icons/send.svg';
import SearchIcon from '@/shared/assets/icons/search.svg';

interface CommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
  isLoading: boolean;
}

const reducers: ReducersList = {
  comments: commentReducer,
};

export const CommentForm = (props: CommentFormProps) => {
  const { className, onSendComment, isLoading } = props;
  const { t } = useTranslation('comments');

  const text = useCommentText();
  const error = useCommentError();

  const { setText } = useCommentActions();

  const onCommentTextChange = useCallback(
    (text: string) => {
      setText(text);
    },
    [setText],
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  if (isLoading) {
    return null;
  }

  if (error) {
    return (
      <Text
        text={error}
        theme={TextTheme.ERROR}
      />
    );
  }

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount
    >
      <ToggleFeatures
        feature="isAppRedesigned"
        off={
          <HStack
            className={classNames(cls.CommentForm, {}, [className])}
            data-testid="CommentForm"
          >
            <InputDeprecated
              className={cls.input}
              placeholder={t('Введите текст')}
              value={text}
              onChange={onCommentTextChange}
              data-testid="CommentForm.Input"
            />
            <ButtonDeprecated
              onClick={onSendHandler}
              theme={ButtonTheme.OUTLINE}
              data-testid="CommentForm.SendButton"
            >
              {t('Отправить')}
            </ButtonDeprecated>
          </HStack>
        }
        on={
          <HStack
            className={classNames(cls.CommentFormRedesigned, {}, [className])}
            data-testid="CommentForm"
            gap="16"
            max
          >
            <Input
              className={cls.input}
              placeholder={t('Написать комментарий')}
              value={text}
              onChange={onCommentTextChange}
              data-testid="CommentForm.Input"
              addonLeft={<Icon Svg={SearchIcon} />}
            />
            <Icon
              clickable
              onClick={onSendHandler}
              data-testid="CommentForm.SendButton"
              Svg={SendIcon}
            />
          </HStack>
        }
      />
    </DynamicModuleLoader>
  );
};
