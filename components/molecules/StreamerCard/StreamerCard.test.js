import { render, screen } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from '../../../theme';
import StreamerCard from '.';

const Wrapper = ({ children }) => (
  <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
);

describe('Streamer Card test', () => {
  it('Should successfully render', () => {
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

  it('Should have all links with href', () => {
    const linksMock = [
      {
        text: 'Canal de Lives',
        link: 'https://www.twitch.tv/misthy/',
      },
      {
        text: 'Canal de Clipes',
        link: 'https://www.youtube.com/channel/UCHOmht_HY5IoJgCCJeIw6Mw',
      },
      {
        text: 'Insta',
        link: 'https://www.instagram.com/miisthy_/',
      },
    ];
    render(
      <Wrapper>
        <StreamerCard
          alt="Misthy"
          bgColor="misthy.500"
          headingText="Misthy"
          imgSrc={'/assets/misthy.svg'}
          links={linksMock}
        />
      </Wrapper>
    );
    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(linksMock.length);
    links.forEach((link, index) => {
      expect(link).toHaveAttribute('href', linksMock[index].link);
    });
  });
});
