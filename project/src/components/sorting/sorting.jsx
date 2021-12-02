import { useState } from 'react';
import styles from './sorting.module.scss';

const SortingMethod = {
  COST: 'по цене',
  REVIEWS: 'по популярности',
};

const SortingDirection = {
  UP: 'вверх',
  DOWN: 'вниз',
};

export default function Sorting() {
  const [direction, setDirection] = useState(SortingDirection.UP);

  const handleDirectionChange = (value) => {
    setDirection(value);
  };

  return(
    <section className={styles.sorting}>
      <p className={styles.title}>Сортировать:</p>
      <div className={styles.options}>
        <ul className={`${styles.list} ${styles.list_method}`}>
          {
            Object.values(SortingMethod).map(method => (
              <li
                key={method}
                className={styles.item}
              >
                <input
                  className={`visually-hidden ${styles.method}`}
                  type='radio'
                  id={method}
                  name='method'
                  value={method}
              />
              <label
                className={styles.label}
                htmlFor={method}
              >
                {method}
              </label>
              </li>
            ))
          }
        </ul>

        <ul className={`${styles.list} ${styles.list_direction}`}>
          {
            Object.values(SortingDirection).map((dir) => (
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
                  onChange={evt => handleDirectionChange(evt.target.value)}
                  defaultChecked={direction === dir}
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
