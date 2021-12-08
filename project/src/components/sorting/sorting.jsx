import { useDispatch, useSelector } from 'react-redux';
import { SortDirection, SortType, SortTypes } from '../../const';
import { setSortDirection, setSortType } from '../../store/actions';
import { getSortDirection, getSortType } from '../../store/selectors';
import styles from './sorting.module.scss';

export default function Sorting() {
  const dispatch = useDispatch();
  const sortType = useSelector(getSortType);
  const sortDirection = useSelector(getSortDirection);

  const handleSortChange = (type) => {
    dispatch(setSortType(type));
    sortDirection === SortDirection.DEFAULT && dispatch(setSortDirection(SortDirection.INC));
  };

  const handleDirectionChange = (direction) => {
    dispatch(setSortDirection(direction));
    sortType === SortType.DEFAULT && dispatch(setSortType(SortType.BY_PRICE));
  };

  return(
    <section className={styles.sorting}>
      <p className={styles.title}>Сортировать:</p>
      <div className={styles.options}>
        <ul className={`${styles.list} ${styles.list_method}`}>
          {
            SortTypes.map(({id, type, text}) => (
              <li
                key={id}
                className={styles.item}
              >
                <input
                  className={`visually-hidden ${styles.method}`}
                  type='radio'
                  id={id}
                  name='method'
                  value={type}
                  onChange={() => handleSortChange(type)}
              />
                <label
                  className={styles.label}
                  htmlFor={id}
                >
                  {text}
                </label>
              </li>
            ))
          }
        </ul>

        <ul className={`${styles.list} ${styles.list_direction}`}>
          {
            Object.values(SortDirection).slice(1).map((dir) => (
              <li
                key={dir}
                className={`${styles.item} ${styles.item_dir}`}
              >
                <input
                  className={`visually-hidden ${styles.direction}`}
                  type='radio'
                  id={dir}
                  name='dir'
                  value={dir}
                  onChange={() => handleDirectionChange(dir)}
              />
                <label
                  className={`${styles.label} ${styles.label_dir}`}
                  htmlFor={dir}
                  aria-label={dir}
                />
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
}
