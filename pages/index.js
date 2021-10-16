import Head from 'next/head';
import { StreamerSection } from '../components';
import { getStreamers } from '../services/api';

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
  const data = await getStreamers();
  const parsed = data.map((d) => ({
    alt: d.alternative_text,
    bgColor: d.background_color,
    headingText: d.name,
    imgSrc: d.image_endpoint,
    links: d.links,
  }));
  return {
    props: { data: parsed }, // will be passed to the page component as props
    revalidate: 180,
  };
}
