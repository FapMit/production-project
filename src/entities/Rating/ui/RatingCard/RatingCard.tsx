import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";
import { Input } from "@/shared/ui/Input";
import { Modal } from "@/shared/ui/Modal";
import { HStack, VStack } from "@/shared/ui/Stack";
import { StarRating } from "@/shared/ui/StarRating";
import { Text } from "@/shared/ui/Text";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import cls from "./RatingCard.module.scss";
import { BrowserView, MobileView } from "react-device-detect";
import { Drawer } from "@/shared/ui/Drawer";

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
  const { className, feedbackTitle, hasFeedback, onAccept, onCancel, title, rate = 0 } = props;
  const { t } = useTranslation('rating');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
  }, [hasFeedback, onAccept]);

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);

  }, [feedback, onAccept, starsCount]);

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);

  }, [onCancel, starsCount]);

  const modalContent = (
    <VStack gap="16">
      <Text title={feedbackTitle} />
      <Input value={feedback}
        onChange={setFeedback}
        placeholder={t('Ваш отзыв')} 
        data-testid="RatingCard.FeedbackInput"
      />
    </VStack>
  )


  return (
    <Card className={classNames(cls.RatingCard, {}, [className])}
      data-testid="RatingCard"
    >
      <VStack align="center"
        gap="8"
        max>
        <Text title={starsCount ? t('Спасибо за оценку') : title} />
        <StarRating size={40}
          onSelect={onSelectStars}
          selectedStars={rate}/>
        <BrowserView>
          <Modal isOpen={isModalOpen}
            lazy >
            <VStack max
              gap="32">
              {modalContent}
              <HStack gap="8"
                justify="end"
                max>
                <Button
                  theme={ButtonTheme.OUTLINE_RED}
                  onClick={cancelHandler}
                  data-testid="RatingCard.CloseButton"
                >
                  {t('Закрыть')}
                </Button>
                <Button
                  theme={ButtonTheme.OUTLINE_GREEN}
                  onClick={acceptHandler}
                  data-testid="RatingCard.SendButton"
                >
                  {t('Отправить')}
                </Button>
              </HStack>
            </VStack>
          </Modal>
        </BrowserView>
        <MobileView>
          <Drawer isOpen={isModalOpen}
            lazy
            onClose={cancelHandler} >
            <VStack max
              gap="32"
              justify="between">
              {modalContent}
              <Button
                theme={ButtonTheme.OUTLINE_GREEN}
                onClick={acceptHandler}
                fullWidth
                size={ButtonSize.XL}
              >
                {t('Отправить')}
              </Button>
            </VStack>
          </Drawer>
        </MobileView>
      </VStack>
    </Card>
  );
});