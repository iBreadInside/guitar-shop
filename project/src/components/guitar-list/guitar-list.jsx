import GuitarCard from '../guitar-card/guitar-card';
import styles from './guitar-list.module.scss';

const GUITARS_PER_PAGE = 9;

export default function GuitarList({list}) {
  return(
    <ul className={styles.list}>
      {
        list.length !== 0
          ? list.slice(0, GUITARS_PER_PAGE).map(guitar => (
            <GuitarCard key={guitar.id} guitar={guitar} />
          ))
          : <p>Простите, гитар с такими параметрами нет в наличии :(</p>
      }
    </ul>
  );
}
