import { Box, Icon, useColorMode } from '@chakra-ui/react';
import { Switch, Flex } from '../../atoms';
import { BsSun, BsSunFill, BsMoon, BsMoonFill } from 'react-icons/bs';

function IconWrapper({ children }) {
  return (
    <Flex alignItems={'center'} mx={1}>
      {children}
    </Flex>
  );
}

export default function ColorModeSwitch(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightMode = colorMode === 'light';
  const mode = !isLightMode ? 'claro' : 'escuro';
  return (
    <Flex {...props}>
      <IconWrapper>
        <Icon as={isLightMode ? BsSunFill : BsSun} color="yellow.400" />
      </IconWrapper>
      <Switch
        onChange={toggleColorMode}
        defaultValue={!isLightMode}
        aria-label={`Alterar para modo ${mode}`}
        colorScheme="green"
      />
      <IconWrapper>
        <Icon as={isLightMode ? BsMoon : BsMoonFill} />
      </IconWrapper>
    </Flex>
  );
}
