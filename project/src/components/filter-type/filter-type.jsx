import styles from './filter-type.module.scss';

export default function FilterType({type}) {
  return(
    <fieldset className={styles.type}>
      <legend className={styles.legend}>Тип гитар</legend>
      <ul className={styles.list}>
        {
          Object.values(type).map(type => (
            <li
              key={type.name}
              className={styles.item}
            >
              <input
                type='checkbox'
                className={styles.check}
                id={type.name}
                name='guitar-type'
              />
              <label
                className={styles.label}
                htmlFor={type.name}
              >
                {type.name}
              </label>
            </li>
          ))
        }
      </ul>
    </fieldset>
  );
}
