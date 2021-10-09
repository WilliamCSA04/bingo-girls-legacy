import { Section } from '../../organisms';
import StreamerComposition from '../../organisms/StreamersComposition';

export default function StreamerSection({ data }) {
  return (
    <Section title="Criadoras de Conteúdo" hiddenTitle>
      <StreamerComposition data={data} />
    </Section>
  );
}
