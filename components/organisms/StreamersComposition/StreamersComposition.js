import { StreamerCard, StreamersWrapper } from '../../molecules';

export default function StreamerComposition({ data = [] }) {
  return (
    <StreamersWrapper>
      {data.map((d, index) => (
        <StreamerCard key={index} {...d} />
      ))}
    </StreamersWrapper>
  );
}
