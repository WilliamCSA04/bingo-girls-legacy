import { ClipSwiper, Section } from '../../organisms';

export default function ClipSection({ clipsData }) {
  return (
    <Section title="Clipes das senhoras">
      <ClipSwiper clipsData={clipsData} />
    </Section>
  );
}
