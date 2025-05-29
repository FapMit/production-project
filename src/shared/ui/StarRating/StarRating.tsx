import starIcon from "@/shared/assets/icons/star.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo, useState } from "react";
import { Icon } from "../Icon/Icon";
import { HStack } from "../Stack";
import cls from "./StarRating.module.scss";

interface StarRatingProps {
  className?: string;
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5]

export const StarRating = memo((props: StarRatingProps) => {
  const { className, onSelect, selectedStars = 0, size = 30 } = props

  const [currentStarsCount, setCurrentStarsCount] = useState(0);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount)
    }
  }

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0)
    }
  }

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount)
      setCurrentStarsCount(starsCount)
      setIsSelected(true);
    }
  }

  return (
    <HStack className={classNames(cls.StarRating, {}, [className])}
    >
      {
        stars.map((starNumber) => (
          <Icon
            Svg={starIcon}
            key={starNumber}
            className={classNames(cls.star, {[cls.selected]: isSelected}, [currentStarsCount >= starNumber ? cls.hovered : cls.normal])}
            width={size}
            height={size}
            onMouseEnter={onHover(starNumber)}
            onMouseLeave={onLeave}
            onClick={onClick(starNumber)}
          />
        ))
      }
    </HStack>
  );
});