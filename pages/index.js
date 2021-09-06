import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bingo Girls</title>
        <meta name="description" content="Site de Liwphael, Myumii e Misthy. Streamer da Twitch" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
