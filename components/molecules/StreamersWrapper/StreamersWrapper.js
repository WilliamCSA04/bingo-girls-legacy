import { SimpleGrid } from '../../atoms';

export default function StreamersWrapper({ children }) {
  return (
    <SimpleGrid columns={3} spacing={10} gridAutoRows="1fr" placeItems="center">
      {children}
    </SimpleGrid>
  );
}
