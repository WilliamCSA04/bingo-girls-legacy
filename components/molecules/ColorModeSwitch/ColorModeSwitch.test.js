import { render, screen } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from '../../../theme';
import ColorModeSwitch from '.';

const Wrapper = ({ children }) => (
  <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
);

describe('Snapshot Test', () => {
  it('Should match snapshot', () => {
    const id = 'colormode';
    render(
      <Wrapper>
        <ColorModeSwitch data-testid={id} />
      </Wrapper>
    );
    const colorModeComponent = screen.getByTestId(id);
    expect(colorModeComponent).toMatchSnapshot();
  });
});
