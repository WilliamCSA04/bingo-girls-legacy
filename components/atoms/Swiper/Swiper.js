import PropTypes from 'prop-types';
export default function Swiper({ children }) {
  return <div>{children}</div>;
}

Swiper.propTypes = {
  children: PropTypes.node,
};
