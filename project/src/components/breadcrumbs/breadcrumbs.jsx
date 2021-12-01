import styles from './breadcrumbs.module.scss';
import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';
import PropTypes, { arrayOf } from 'prop-types';

export default function Breadcrumbs({list}) {

  return(
    <nav className={styles.breadcrumbs}>
      <ul className={styles.list}>
        {
          list.map(([item, text]) => (
            <li
              key={item}
              className={styles.item}
            >
              <NavLink
                to={AppRoute[item]}
                className={styles.link}
                activeClassName={`${styles.link} ${styles.link_active}`}
              >
                {text}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}

Breadcrumbs.propTypes = {
  list: PropTypes.arrayOf(
    arrayOf(
      PropTypes.string.isRequired,
  )),
};
