import StreamerCard from '.';

export default {
  title: 'Streamer Card',
  component: StreamerCard,
};

export const MisthyStory = () => (
  <StreamerCard
    alt="Misthy"
    bgColor="misthy"
    headingText="Misthy"
    imgSrc={'/misthy.svg'}
    links={[
      'https://e7.pngegg.com/pngimages/102/481/png-clipart-anime-desktop-manga-television-show-anime-black-hair-manga-thumbnail.png',
    ]}
  />
);
