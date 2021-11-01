import { Icon, useColorMode } from '@chakra-ui/react';
import { Switch, Flex } from '../../atoms';
import { BsSun, BsSunFill, BsMoon, BsMoonFill } from 'react-icons/bs';

export default function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightMode = colorMode === 'light';
  return (
    <Flex>
      <Icon icon={isLightMode ? BsSunFill : BsSun} />
      <Switch onChange={toggleColorMode} defaultValue={isLightMode} />
      <Icon icon={isLightMode ? BsMoon : BsMoonFill} />
    </Flex>
  );
}
