import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';
import styles from './footer-info.module.scss';

const INFO = {
  LOCATION: 'Где купить?',
  BLOG: 'Блог',
  QNA: 'Вопрос - ответ',
  REFUND: 'Возврат',
  SERVICES: 'Сервис-центры',
};

export default function FooterInfo() {
  return(
    <div className={styles.info}>
      <h3 className={styles.title}>Информация</h3>
      <ul className={styles.list}>
        {
          Object.entries(INFO).map(([type, text]) => (
            <li key={type} className={styles.item}>
              <NavLink
                to={AppRoute[type] ? AppRoute[type] : '#'}
                className={styles.link}
              >
                {text}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
