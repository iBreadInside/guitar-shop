import NavIcons from '../nav-icons/nav-icons';
import NavText from '../nav-text/nav-text';
import styles from './nav.module.scss';

export default function Nav() {
  return(
    <nav className={styles.nav}>
      <NavText />
      <NavIcons />
    </nav>
  );
}
