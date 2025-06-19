import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

/**
 * @deprecated
 * Устарел, используйте новые компоненты из папки redesigned
 */
export const VStack = (props: VStackProps) => {
  const { align = 'start' } = props;

  return (
    <Flex
      {...props}
      direction='column'
      align={align}
    />
  );
};
