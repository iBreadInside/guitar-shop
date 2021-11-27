import styles from './nav-text.module.scss';
import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';

const LinkName = {
  CATALOG: 'Каталог',
  LOCATION: 'Где купить?',
  ABOUT: 'О компании',
  SERVICES: 'Сервис-центры',
};

export default function NavText() {
  return(
    <ul className={styles.list}>
      {Object.entries(LinkName).map(([mark, text]) => (
        <li key={mark} className={styles.item}>
          <NavLink
            to={AppRoute[mark]}
            className={styles.link}
          >
            {text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
