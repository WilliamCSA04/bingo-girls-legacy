import StreamerCard from '.';

export default {
  title: 'Streamer Card',
  component: StreamerCard,
};

export const MisthyStory = () => (
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
);

export const LiwphaelStory = () => (
  <StreamerCard
    alt="Liwphael"
    bgColor="liw.500"
    headingText="Liwphael"
    imgSrc={'/assets/liwphael.svg'}
    links={[
      {
        text: 'Canal de Lives',
        link: 'https://www.twitch.tv/liwphael/',
      },
      {
        text: 'Youtube',
        link: 'https://www.youtube.com/channel/UCkSCh6KYHbdpfJJVJyGBhZw',
      },
    ]}
  />
);

export const MyumiiStory = () => (
  <StreamerCard
    alt="Myumii"
    bgColor="myu.500"
    headingText="Myumii"
    imgSrc={'/assets/myumii.svg'}
    links={[
      {
        text: 'Canal de Lives',
        link: 'https://www.twitch.tv/myumii/',
      },
      {
        text: 'Youtube',
        link: 'https://www.youtube.com/c/MyumiiFox',
      },
      {
        text: 'Clipes',
        link: 'https://www.youtube.com/c/LivesdaMyu',
      },
    ]}
  />
);
