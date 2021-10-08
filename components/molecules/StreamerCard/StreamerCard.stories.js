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
