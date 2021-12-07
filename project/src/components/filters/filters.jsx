import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilters, getGuitars } from '../../store/selectors';
import { setFilterValue } from '../../store/actions';
import { getMaxPrice, getMinPrice } from '../../utils';
import { FilterType, guitarMap, GuitarType, numberKeys, stringsMap } from '../../const';
import './filters.scss';
import styles from './filters.module.scss';

export default function Filters() {
  const dispatch = useDispatch();
  const filters = useSelector(getFilters);
  const items = useSelector(getGuitars);
  const min = getMinPrice(items);
  const max = getMaxPrice(items);

  const [enableStrings, setEnableStrings] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const prettify = (value) => {
    return value ? value.toLocaleString(`fr`) : ``;
  };

  const getEnabledStrings = () => {
    let strings = [];
    const typesChecked = filters.types.filter((type) => type.value === true);
    typesChecked.forEach((type) => {
      strings.push(...stringsMap[type.name]);
    });

    return [...new Set(strings)];
  };

  const handleTypeChange = (evt) => {
    const {name, checked} = evt.target;
    dispatch(setFilterValue(FilterType.TYPE, name, checked));
  };

  const handleStringsChange = (evt) => {
    const {name, checked} = evt.target;
    dispatch(setFilterValue(FilterType.STRINGS, name, checked));
  };;

  const handleKeyPress = (evt) => {
    if (!numberKeys.includes(evt.key)) {
      evt.preventDefault();
    };
  };

  const handleMinChange = (evt) => {
    setMinPrice(Number(evt.target.value.replace(/\s/g, ``)));
  };

  const handleMaxChange = (evt) => {
    setMaxPrice(Number(evt.target.value.replace(/\s/g, ``)));
  };

  const handleMinBlur = (evt) => {
    let {value} = evt.target;

    value = Number(value.replace(/\s/g, ``));

    let currentMin = null;
    if (value < min) {
      currentMin = min;
    } else if (value > max) {
      currentMin = max;
    } else {
      currentMin = value;
    };

    setMinPrice(currentMin);
    dispatch(setFilterValue(FilterType.PRICE, `min`, currentMin));
    if (currentMin > Number(maxPrice)) {
      dispatch(setFilterValue(FilterType.PRICE, `max`, currentMin));
      setMaxPrice(currentMin);
    };
  };

  const handleMaxBlur = (evt) => {
    let {value} = evt.target;

    value = Number(value.replace(/\s/g, ``));

    let currentMax = null;
    if (value > max) {
      currentMax = max;
    } else if (value < min) {
      currentMax = min;
    } else {
      currentMax = value;
    };

    setMaxPrice(currentMax);
    dispatch(setFilterValue(FilterType.PRICE, `max`, currentMax));

    if (currentMax < Number(minPrice)) {
      dispatch(setFilterValue(FilterType.PRICE, `min`, currentMax));
      setMinPrice(currentMax);
    } else if (minPrice === 0 && minPrice !== min) {
      setMinPrice(min);
      dispatch(setFilterValue(FilterType.PRICE, `min`, min));
    };
  };

  useEffect(() => {
    const typesChecked = filters.types.filter((item) => item.value === true);
    const stringsChecked = filters.strings.filter((item) => item.value === true);
    stringsChecked.forEach((string) => {
      if (!enableStrings.includes(parseInt(string.name))) {
        (typesChecked.length > 0) ?
          dispatch(setFilterValue(FilterType.STRINGS, string.name, false)) :
          setEnableStrings(stringsMap[GuitarType.ALL]);
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enableStrings]);

  useEffect(() => {
    setEnableStrings(getEnabledStrings());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.types]);

  return (
    <form>
      <h2 className={styles.title}>Фильтр</h2>
      <fieldset className={`${styles.fieldset} ${styles.fieldset_cost}`}>
        <legend className={styles.legend} >Цена, ₽</legend>
        <div className={styles.wrapper}>
          {filters.price.map((filter) => (
            <React.Fragment key={filter.name}>
              <input
                className={`${styles.input} ${styles.input_price}`}
                id={filter.id}
                name={filter.id}
                type='text'
                value={filter.name === 'min' ? prettify(minPrice) : prettify(maxPrice)}
                placeholder={filter.name === 'min' ? prettify(min) : prettify(max)}
                onChange={filter.name === 'min' ? handleMinChange : handleMaxChange}
                onBlur={filter.name === 'min' ? handleMinBlur : handleMaxBlur}
                onKeyPress={handleKeyPress}
                autoComplete='off'
              />
              <label
                className='visually-hidden'
                htmlFor={filter.name}
              >
                {filter.name}
              </label>
            </React.Fragment>
          ))}
        </div>
      </fieldset>

      <fieldset className={`${styles.fieldset} ${styles.filedset_type}`}>
        <legend className={styles.legend}>Тип гитар</legend>
        <ul className={styles.list}>
          {filters.types.map((filter) => (
            <li key={filter.id} className={styles.item}>
              <input
                className={`visually-hidden ${styles.check}`}
                id={filter.id}
                name={filter.name}
                type='checkbox'
                checked={filter.value}
                onChange={handleTypeChange}
              />
              <label
                className={`${styles.label} ${styles.label_type}`}
                htmlFor={filter.id}
              >
                {guitarMap[filter.name]}
              </label>
            </li>
          ))}
        </ul>
      </fieldset>

      <fieldset className={`${styles.fieldset} ${styles.fieldset_strings}`}>
        <legend className={styles.legend}>Количество струн</legend>
        <ul className={styles.list}>
          {filters.strings.map((filter) => (
            <li className={styles.item} key={filter.id}>
              <input
                className={`visually-hidden ${styles.check}`}
                id={filter.id}
                name={filter.name}
                type='checkbox'
                checked={filter.value}
                disabled={enableStrings.length === 0 ? false : !enableStrings.includes(parseInt(filter.name))}
                onChange={handleStringsChange}
              />
              <label
                className={styles.label}
                htmlFor={filter.id}
              >
                {filter.name}
              </label>
            </li>
          ))}
        </ul>
      </fieldset>
    </form>
  );
}
