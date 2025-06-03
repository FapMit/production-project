import type { Meta, StoryObj } from '@storybook/react';

import { Code } from './Code';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'Shared/Code',
  component: Code,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

const text = `export const Code = memo((props: CodeProps) => {
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
});`

export const Light: Story = {
  args: {
    text
  },
};

export const Dark: Story = {
  args: {
    text
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};