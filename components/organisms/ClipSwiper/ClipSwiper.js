import { GenericSwiper } from '../../molecules';

export default function ClipSwiper({ children, ...props }) {
  return <GenericSwiper {...props}>{children}</GenericSwiper>;
}
