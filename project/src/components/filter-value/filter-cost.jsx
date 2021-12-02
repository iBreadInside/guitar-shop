import { useState } from 'react';
import NumberFormat from 'react-number-format';
import styles from './filter-cost.module.scss';

const PLACEHOLDER_MIN = 1000;
const PLACEHOLDER_MAX = 30000;
const MAX_LENGTH = 7;

export default function FilterCost() {
  const [minValue, setMinValue] = useState(null);
  const [maxValue, setMaxValue] = useState(null);

  const handleMinChange = (val) => {
    setMinValue(val);
  };

  const handleMinBlur = (val) => {
    if (val !== null && val < PLACEHOLDER_MIN) {
      setMinValue(PLACEHOLDER_MIN);
    } else {
      setMinValue(val);
    }
  };

  const handleMaxChange = (val) => {
    setMaxValue(val);
  };

  return(
    <fieldset className={styles.cost}>
      <legend className={styles.legend} >Цена, ₽</legend>
      <div className={styles.cost__inputs}>
        <NumberFormat
          className={styles.input}
          maxLength={MAX_LENGTH}
          thousandSeparator=' '
          allowNegative={false}
          value={minValue}
          placeholder={PLACEHOLDER_MIN}
          aria-label='Минимальная цена'
          onValueChange={({floatValue}) => handleMinChange(floatValue)}
          onBlur={() => handleMinBlur(minValue)}
        />
        <NumberFormat
          className={styles.input}
          maxLength={MAX_LENGTH}
          thousandSeparator=' '
          allowNegative={false}
          value={maxValue}
          placeholder={PLACEHOLDER_MAX}
          aria-label='Максимальная цена'
          onValueChange={({floatValue}) => handleMaxChange(floatValue)}
        />
      </div>
    </fieldset>
  );
}
