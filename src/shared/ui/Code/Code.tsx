import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Code.module.scss";
import { memo, useCallback } from "react";
import { Button, ButtonTheme } from "../Button/Button";

import CopyIcon from "@/shared/assets/icons/copy.svg"

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const {
    className,
    text
  } = props;

  const onCopy = useCallback(()=> {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
    <div className={classNames(cls.codeWrapper, {}, [className])}>
      <Button 
        className={cls.copyBtn} 
        theme={ButtonTheme.CLEAR}
        onClick={onCopy}
      >
        <CopyIcon />
      </Button>
      <pre className={cls.Code}>
        <code>
          {text}
        </code>
      </pre>
    </div>
  );
});