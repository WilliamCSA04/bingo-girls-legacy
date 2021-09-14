import Head from 'next/head'
import {Box, FaTwitch} from '../components'
import StreamerCard from '../components/molecules/streamerCard'
import misthyPicture from '../assets/misthy.svg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bingo Girls</title>
        <meta name="description" content="Site de Liwphael, Myumii e Misthy. Streamer da Twitch" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box> <FaTwitch /> test </Box>
      <StreamerCard alt="Misthy" bgColor="misthy" headingText="Misthy" imgSrc={misthyPicture} links={["test"]}/>
    </div>
  )
}
