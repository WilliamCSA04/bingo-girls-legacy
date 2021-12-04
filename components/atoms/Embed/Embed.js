import PropTypes from 'prop-types';

export default function Embed(props) {
  return <embed {...props} width={100} height={100} />;
}

Embed.propTypes = {
  type: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};
