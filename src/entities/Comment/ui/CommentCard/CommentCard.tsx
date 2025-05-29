import { memo } from "react";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { Text, TextSize } from "@/shared/ui/Text/Text";
import { Comment } from "../../model/types/comment";
import cls from "./CommentCard.module.scss";
import { VStack } from "@/shared/ui/Stack";

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props


  if (isLoading) {
    return (
      <VStack max className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
        <div className={cls.header}>
          <Skeleton maxWidth={30} height={30} borderRadius={"50%"} />
          <Skeleton maxWidth={300} height={16} />
        </div>
        <Skeleton maxWidth={'none'} height={50} />
      </VStack>
    )
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack max gap="8" className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink className={cls.header} to={`${RoutePath.profile}${comment.user.id}`}>
        <Avatar size={30} circle alt={comment.user.email} src={comment.user.avatar} />
        <Text title={comment.user.email} size={TextSize.S} />
      </AppLink>
      <Text text={comment.text} />
    </VStack>
  );
});