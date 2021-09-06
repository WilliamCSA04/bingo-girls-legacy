import Head from 'next/head'
import {Box, FaTwitch} from '../components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bingo Girls</title>
        <meta name="description" content="Site de Liwphael, Myumii e Misthy. Streamer da Twitch" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box> <FaTwitch /> test</Box>
    </div>
  )
}
