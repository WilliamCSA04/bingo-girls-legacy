import { useColorModeValue } from '@chakra-ui/react';
import { Header } from '../../organisms';

export default function BingoHeader() {
  const color = useColorModeValue('pink.300', 'gray.900');
  return <Header bgColor={color} h="10xs" />;
}
