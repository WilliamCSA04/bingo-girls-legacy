import Head from 'next/head';
import { BingoHeader, StreamerSection } from '../components';
import { mongo } from '../lib';
import { Streamer } from '../models';
import { getClips, getUsers } from '../services';

export default function Home({ streamers, clips }) {
  return (
    <>
      <Head>
        <title>Home | Bingo Girls</title>
      </Head>
      <main>
        <BingoHeader />
        <StreamerSection data={streamers} />
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
    const logins = streamers.map((streamer) => streamer.twitch_name);
    const usersResponse = await getUsers({ logins });
    const users = await usersResponse.json();
    const bingoClips = await Promise.all(
      users.data.map((user) => getClips({ broadcasterId: user.id }))
    );
    const clipsData = await Promise.all(
      bingoClips.map(async (clips) => {
        const res = await clips.json();
        return res.data;
      })
    );
    return {
      props: { streamers: parsed, clips: clipsData },
      revalidate: 180,
    };
  } catch (err) {
    console.error(err);
    throw new Error('Error while building Home');
  }
}
