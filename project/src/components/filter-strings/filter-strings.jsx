import styles from './filter-strings.module.scss';

const STRING_NUMBER = [4, 6, 7, 12];

export default function FilterStrings() {
  return(
    <fieldset>
      <legend>Количество струн</legend>
      <ul>
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
