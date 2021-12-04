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
                exact
                activeClassName={styles.link_active}
                tabIndex={location.pathname !== AppRoute[item] ? 0 : -1}
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
