import FilterStrings from '../filter-strings/filter-strings';
import FilterType from '../filter-type/filter-type';
import FilterCost from '../filter-value/filter-cost';
import styles from './filter.module.scss';

const GuitarType = {
  ACOUSTIC: {
    name: 'Акустические гитары',
    stringNumber: [6, 7, 12],
  },
  ELECTRIC: {
    name: 'Электрогитары',
    stringNumber: [4, 6, 7],
  },
  UKULELE: {
    name: 'Укулеле',
    stringNumber: [4],
  }
};

export default function Filter() {
  return(
    <form className={styles.filter}>
      <h2 className={styles.title}>Фильтр</h2>
      <FilterCost />
      <FilterType type={GuitarType} />
      <FilterStrings />
    </form>
  );
}
