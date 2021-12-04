import styles from './stats.module.scss';
import PropTypes from 'prop-types';
import { capitalize } from '../../../utils';

export default function Stats ({guitar}) {
  const {
    name,
    type,
    vendorCode,
    strings,
    price
  } = guitar;

  return (
    <section className={styles.stats}>
      <p className={styles.name}>Гитара {name.toUpperCase()}</p>
      <p className={styles.code}>Артикул: {vendorCode}</p>
      <p className={styles.strings}>{capitalize(type)},{strings} струнная</p>
      <p className={styles.price}>Цена: {price.toLocaleString(`fr`)} ₽</p>
    </section>
  );
}

Stats.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  strings: PropTypes.number.isRequired
};
