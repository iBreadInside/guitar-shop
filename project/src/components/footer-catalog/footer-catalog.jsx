import styles from './footer-catalog.module.scss';
import { Link } from 'react-router-dom';

const GUITAR_TYPE = {
  ACOUSTIC: 'Акустические гитары',
  CLASSIC: 'Классические гитары',
  ELECTRIC: 'Электро-гитары',
  BASS: 'Бас-гитары',
  UKULELE: 'Укулеле',
};

export default function FooterCatalog() {
  return(
    <div className={styles.catalog}>
      <h3 className={styles.title}>Каталог</h3>
      <ul className={styles.list}>
        {
          Object.values(GUITAR_TYPE).map(type => (
            <li key={type} className={`${styles.item} ${styles.item_type}`}>
              <Link
                to='#'
                className={`${styles.link} ${styles.link_type}`}
              >
                {type}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
