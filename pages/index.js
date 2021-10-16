import Head from 'next/head';
import { StreamerSection } from '../components';
import { mongo } from '../lib';
import { Streamer } from '../models';

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Home | Bingo Girls</title>
      </Head>
      <main>
        <StreamerSection data={data} />
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  try {
    await mongo.connect();
    const streamers = await Streamer.find({}).lean();
    if (!streamers.length) {
      throw new Error('Failed to get streamers data');
    }
    const parsed = streamers.map((d) => ({
      alt: d.alternative_text,
      bgColor: d.background_color,
      headingText: d.name,
      imgSrc: d.image_endpoint,
      links: d.links,
    }));
    return {
      props: { data: parsed },
      revalidate: 180,
    };
  } catch {
    throw new Error('Error while building Home');
  }
}
