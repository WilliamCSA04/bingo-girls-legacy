import PropTypes from 'prop-types';

export default function Embed(props) {
  <embed {...props} />;
}

Embed.propTypes = {
  type: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};
