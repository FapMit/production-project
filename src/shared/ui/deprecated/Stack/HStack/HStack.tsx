import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

/**
 * @deprecated
 * Устарел, используйте новые компоненты из папки redesigned
 */
export const HStack = (props: HStackProps) => {
  return (
    <Flex
      {...props}
      direction='row'
    />
  );
};
