import { StreamerCard, StreamersWrapper } from '../../molecules';

export default function StreamerComposition({ data = [] }) {
  return (
    <StreamersWrapper>
      {data.map((d) => (
        <StreamerCard key={d.name} {...d} />
      ))}
    </StreamersWrapper>
  );
}
