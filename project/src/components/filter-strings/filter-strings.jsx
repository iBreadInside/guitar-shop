import styles from './filter-strings.module.scss';

const STRING_NUMBER = [4, 6, 7, 12];

export default function FilterStrings() {
  return(
    <fieldset className={styles.strings}>
      <legend className={styles.legend}>Количество струн</legend>
      <ul className={styles.list}>
        {
          STRING_NUMBER.map(number => (
            <li
              key={number}
              className={styles.item}
            >
              <input
                type='checkbox'
                className={styles.check}
                id={number}
                name='string-number'
              />
              <label
                className={styles.label}
                htmlFor={number}
              >
                {number}
              </label>
            </li>
          ))
        }
      </ul>
    </fieldset>
  );
}
