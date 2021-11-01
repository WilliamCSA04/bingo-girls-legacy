import { useColorModeValue } from '@chakra-ui/react';
import { Header } from '../../organisms';

export default function BingoHeader() {
  const bgColor = useColorModeValue('pink.300', 'gray.900');
  return <Header bgColor={bgColor} h="10xs" />;
}
