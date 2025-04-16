import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Comment } from "../../model/types/comment";
import cls from "./CommentCard.module.scss";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text, TextSize } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props


  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton maxWidth={30} height={30} borderRadius={"50%"} />
          <Skeleton maxWidth={300} height={16} />
        </div>
        <Skeleton maxWidth={'none'} height={50} />
      </div>
    )
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <div className={cls.header}>
        <Avatar size={30} circle alt={comment?.user.email} src={comment?.user.avatar} />
        <Text title={comment?.user.email} size={TextSize.S} />
      </div>
      <Text text={comment?.text} />
    </div>
  );
});