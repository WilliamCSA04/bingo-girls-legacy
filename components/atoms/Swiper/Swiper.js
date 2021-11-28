import PropTypes from 'prop-types';
import { Children } from 'react';
import AliceCarousel from 'react-alice-carousel';
import '../../../node_modules/react-alice-carousel/lib/alice-carousel.css';

export default function Swiper({ children, ...props }) {
  const listOfChildren = Children.toArray(children);

  return <AliceCarousel items={listOfChildren} {...props} />;
}

Swiper.propTypes = {
  children: PropTypes.node,
};
