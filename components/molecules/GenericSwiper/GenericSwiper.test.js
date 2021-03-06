import { render, screen } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from '../../../theme';
import GenericSwiper from '.';

const Wrapper = ({ children }) => (
  <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
);

describe('Generic Swiper', () => {
  it('Should render all children', () => {
    render(
      <Wrapper>
        <GenericSwiper infinite={false}>
          <p data-testid="text">1</p>
          <p data-testid="text">2</p>
          <p data-testid="text">3</p>
          <p data-testid="text">4</p>
          <p data-testid="text">5</p>
        </GenericSwiper>
      </Wrapper>
    );
    const allText = screen.getAllByTestId('text');
    expect(allText).toHaveLength(5);
  });
  it('Should render all children plus two due infinite prop', () => {
    render(
      <Wrapper>
        <GenericSwiper infinite>
          <p data-testid="text">1</p>
          <p data-testid="text">2</p>
          <p data-testid="text">3</p>
          <p data-testid="text">4</p>
          <p data-testid="text">5</p>
        </GenericSwiper>
      </Wrapper>
    );
    const allText = screen.getAllByTestId('text');
    expect(allText).toHaveLength(7);
  });
});
