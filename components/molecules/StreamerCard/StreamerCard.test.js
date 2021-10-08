import { render, screen } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from '../../../theme';
import StreamerCard from '.';

const Wrapper = ({ children }) => (
  <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
);

describe('Streamer Card test', () => {
  it('Should successfully ', () => {
    render(
      <Wrapper>
        <StreamerCard
          alt="Misthy"
          bgColor="misthy.500"
          headingText="Misthy"
          imgSrc={'/assets/misthy.svg'}
          links={[
            {
              text: 'Canal de Lives',
              link: 'https://www.twitch.tv/misthy/',
            },
          ]}
        />
      </Wrapper>
    );
    const heading = screen.getByRole('heading');
    const image = screen.getByAltText('Misthy');
    const links = screen.getAllByRole('link');

    expect(heading).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(links).toHaveLength(1);
  });
});
