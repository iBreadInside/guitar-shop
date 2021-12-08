import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  vendorCode: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  reviews: PropTypes.number.isRequired,
  strings: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  imgRetina: PropTypes.string.isRequired,
  webp: PropTypes.string.isRequired,
  webpRetina: PropTypes.string.isRequired,
});
