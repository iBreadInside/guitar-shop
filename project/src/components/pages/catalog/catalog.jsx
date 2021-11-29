import CatalogMain from '../../catalog-main/catalog-main';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import styles from './catalog.module.scss';

export default function Catalog() {
  return(
    <div className='page'>
      <Header />
      <CatalogMain />
      <Footer />
    </div>
  );
}
