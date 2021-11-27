import Logo from '../logo/logo';
import Nav from '../nav/nav';
import styles from './header.module.scss';

export default function Header() {
  return(
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        <Nav />
      </div>
    </header>
  );
}
