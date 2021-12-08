import styles from './footer-about.module.scss';

const ABOUT_ONE = 'Магазин гитар, музыкальных\u00A0инструментов и гитарная мастерская в Санкт-Петербурге.';
const ABOUT_TWO = 'Все инструменты проверены, отстроены и доведены до идеала!';

export default function FooterAbout() {
  return(
    <div className={styles.about}>
      <h3 className={styles.title}>О нас</h3>
      <p className={styles.text}>{ABOUT_ONE}</p>
      <p className={styles.text}>{ABOUT_TWO}</p>
    </div>
  );
}
