import PropTypes from 'prop-types';
import AliceCarousel from 'react-alice-carousel';
import '../../../node_modules/react-alice-carousel/lib/alice-carousel.css';

export default function Swiper({ items, ...props }) {
  return <AliceCarousel items={items} {...props} />;
}

Swiper.propTypes = {
  children: PropTypes.node,
};
