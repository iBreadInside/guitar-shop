import Footer from '../../footer/footer';
import Header from '../../header/header';
import styles from './not-found.module.scss';

export default function NotFound() {
  return(
    <div className='page'>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.message}>
          Эта страница еще в разработке
        </h1>
      </main>
      <Footer />
    </div>
  );
}
