import { Embed } from '../../atoms';
import { GenericSwiper } from '../../molecules';

export default function ClipSwiper({ clipsData, ...props }) {
  return (
    <GenericSwiper {...props}>
      {clipsData.map((data) => (
        <Embed key={data.id} {...data} />
      ))}
    </GenericSwiper>
  );
}
