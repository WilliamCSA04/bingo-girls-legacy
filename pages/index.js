import Head from 'next/head';
import { StreamerSection } from '../components/templates';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Bingo Girls</title>
      </Head>
      <main>
        <StreamerSection data={[]} />
      </main>
    </>
  );
}
