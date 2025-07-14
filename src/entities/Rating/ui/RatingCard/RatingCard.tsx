import { classNames } from '@/shared/lib/classNames/classNames';
import {
  Button as ButtonDeprecated,
  ButtonSize,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { StarRating as StarRatingDeprecated } from '@/shared/ui/deprecated/StarRating';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './RatingCard.module.scss';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { StarRating } from '@/shared/ui/redesigned/StarRating';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    feedbackTitle,
    hasFeedback,
    onAccept,
    onCancel,
    title,
    rate = 0,
  } = props;
  const { t } = useTranslation('rating');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept],
  );

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const Deprecated = () => {
    return (
      <CardDeprecated
        className={classNames(cls.RatingCard, {}, [className])}
        data-testid="RatingCard"
      >
        <VStack
          align="center"
          gap="8"
          max
        >
          <TextDeprecated title={starsCount ? t('Спасибо за оценку') : title} />
          <StarRatingDeprecated
            size={40}
            onSelect={onSelectStars}
            selectedStars={rate}
          />
          <BrowserView>
            <Modal
              isOpen={isModalOpen}
              lazy
            >
              <VStack
                max
                gap="32"
              >
                {modalContent}
                <HStack
                  gap="8"
                  justify="end"
                  max
                >
                  <ButtonDeprecated
                    theme={ButtonTheme.OUTLINE_RED}
                    onClick={cancelHandler}
                    data-testid="RatingCard.CloseButton"
                  >
                    {t('Закрыть')}
                  </ButtonDeprecated>
                  <ButtonDeprecated
                    theme={ButtonTheme.OUTLINE_GREEN}
                    onClick={acceptHandler}
                    data-testid="RatingCard.SendButton"
                  >
                    {t('Отправить')}
                  </ButtonDeprecated>
                </HStack>
              </VStack>
            </Modal>
          </BrowserView>
          <MobileView>
            <Drawer
              isOpen={isModalOpen}
              lazy
              onClose={cancelHandler}
            >
              <VStack
                max
                gap="32"
                justify="between"
              >
                {modalContent}
                <ButtonDeprecated
                  theme={ButtonTheme.OUTLINE_GREEN}
                  onClick={acceptHandler}
                  fullWidth
                  size={ButtonSize.XL}
                >
                  {t('Отправить')}
                </ButtonDeprecated>
              </VStack>
            </Drawer>
          </MobileView>
        </VStack>
      </CardDeprecated>
    );
  };

  const Redesigned = () => {
    return (
      <VStack
        align="center"
        gap="8"
        max
        className={classNames(cls.RatingCard, {}, [className])}
        data-testid="RatingCard"
      >
        <Text title={starsCount ? t('Спасибо за оценку') : title} />
        <StarRating
          size={40}
          onSelect={onSelectStars}
          selectedStars={rate}
        />
        <BrowserView>
          <Modal
            isOpen={isModalOpen}
            lazy
          >
            <VStack
              max
              gap="32"
            >
              {modalContent}
              <HStack
                gap="8"
                justify="end"
                max
              >
                <Button
                  variant={'danger'}
                  onClick={cancelHandler}
                  data-testid="RatingCard.CloseButton"
                  rounded
                >
                  {t('Закрыть')}
                </Button>
                <Button
                  variant="success"
                  onClick={acceptHandler}
                  data-testid="RatingCard.SendButton"
                  rounded
                >
                  {t('Отправить')}
                </Button>
              </HStack>
            </VStack>
          </Modal>
        </BrowserView>
        <MobileView>
          <Drawer
            isOpen={isModalOpen}
            lazy
            onClose={cancelHandler}
          >
            <VStack
              max
              gap="32"
              justify="between"
            >
              {modalContent}
              <Button
                variant="success"
                onClick={acceptHandler}
                fullWidth
                size="xl"
              >
                {t('Отправить')}
              </Button>
            </VStack>
          </Drawer>
        </MobileView>
      </VStack>
    );
  };

  const modalContent = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <VStack gap="16">
          <Text title={feedbackTitle} />
          <Input
            value={feedback}
            onChange={setFeedback}
            placeholder={t('Ваш отзыв')}
            data-testid="RatingCard.FeedbackInput"
          />
        </VStack>
      }
      off={
        <VStack gap="16">
          <TextDeprecated title={feedbackTitle} />
          <InputDeprecated
            value={feedback}
            onChange={setFeedback}
            placeholder={t('Ваш отзыв')}
            data-testid="RatingCard.FeedbackInput"
          />
        </VStack>
      }
    />
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<Redesigned />}
      off={<Deprecated />}
    />
  );
});
