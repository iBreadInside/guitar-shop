import styles from './breadcrumbs.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import PropTypes, { arrayOf } from 'prop-types';

export default function Breadcrumbs({list}) {
  const location = useLocation();

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
                tabIndex={AppRoute[item] === location.pathname ? 1 : 0}
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
