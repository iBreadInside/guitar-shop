import guitars from '../../mocks/guitars';
import GuitarCard from '../guitar-card/guitar-card';
import styles from './guitar-list.module.scss';

export default function GuitarList() {
  return(
    <ul className={styles.list}>
      <GuitarCard guitar={guitars[0]} />
    </ul>
  );
}
