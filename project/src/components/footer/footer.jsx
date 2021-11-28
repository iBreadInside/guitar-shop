import Contacts from '../contacts/contacts';
import FooterAbout from '../footer-about/footer-about';
import FooterCatalog from '../footer-catalog/footer-catalog';
import FooterInfo from '../footer-info/footer-info';
import Logo from '../logo/logo';
import Socials from '../socials/socials';
import styles from './footer.module.scss';

export default function Footer() {
  return(
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <section className={styles.logos}>
          <Logo isFooter />
          <Socials />
        </section>

        <section className={styles.info__block}>
          <FooterAbout />
          <FooterCatalog />
          <FooterInfo />
        </section>

        <Contacts />
      </div>
    </footer>
  );
}
