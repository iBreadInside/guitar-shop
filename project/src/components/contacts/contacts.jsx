import styles from './contacts.module.scss';

const ADDRESS = 'г. Санкт-Петербург, м. Невский проспект, ул. Казанская 6.';
const TEL = 'tel:+78125005050';

const Svg_Type = {
  PHONE: 'phone',
  CLOCK: 'clock',
};

const Schedule = {
  START: '11:00',
  END: '20:00',
};

export default function Contacts() {
  return(
    <section className={styles.contacts}>
      <svg className='sprite'>
        {/* Phone Icon */}
        <symbol id={Svg_Type.PHONE} viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/symbol'>
          <path d='M8.53637 7.1416L6.84262 5.6016C6.76256 5.52883 6.65735 5.49002 6.5492 5.49337C6.44106 5.49671 6.33845 5.54194 6.26304 5.61952L5.26595 6.64494C5.02595 6.5991 4.54345 6.44869 4.04678 5.95327C3.55012 5.45619 3.3997 4.97244 3.35512 4.7341L4.3797 3.7366C4.45737 3.66124 4.50268 3.55861 4.50602 3.45044C4.50936 3.34227 4.47049 3.23704 4.39762 3.15702L2.85803 1.46369C2.78514 1.38342 2.68382 1.33473 2.5756 1.32796C2.46738 1.32119 2.36078 1.35688 2.27845 1.42744L1.37428 2.20285C1.30225 2.27515 1.25925 2.37137 1.25345 2.47327C1.2472 2.57744 1.12803 5.04494 3.04137 6.9591C4.71054 8.62785 6.80137 8.74994 7.3772 8.74994C7.46137 8.74994 7.51304 8.74744 7.52679 8.7466C7.62867 8.7409 7.72484 8.69771 7.79679 8.62535L8.57179 7.72077C8.64262 7.6387 8.67857 7.53219 8.67195 7.42398C8.66534 7.31577 8.61668 7.21443 8.53637 7.1416Z' fill='white'/>
        </symbol>
        {/* Clock Icon */}
        <symbol id={Svg_Type.CLOCK} viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/symbol'>
          <path d='M5 0.625C2.58398 0.625 0.625 2.58398 0.625 5C0.625 7.41602 2.58398 9.375 5 9.375C7.41602 9.375 9.375 7.41602 9.375 5C9.375 2.58398 7.41602 0.625 5 0.625ZM6.72363 6.34473L6.44434 6.72559C6.43826 6.73388 6.43061 6.74089 6.42181 6.74622C6.41302 6.75154 6.40326 6.75508 6.3931 6.75662C6.38294 6.75816 6.37257 6.75768 6.36259 6.75521C6.35261 6.75273 6.34322 6.7483 6.33496 6.74219L4.71973 5.56445C4.70966 5.55723 4.70148 5.54769 4.69588 5.53664C4.69027 5.5256 4.6874 5.51336 4.6875 5.50098V2.8125C4.6875 2.76953 4.72266 2.73438 4.76562 2.73438H5.23535C5.27832 2.73438 5.31348 2.76953 5.31348 2.8125V5.22949L6.70605 6.23633C6.74121 6.26074 6.74902 6.30957 6.72363 6.34473Z' fill='white'/>
        </symbol>
      </svg>

      <h3 className={styles.title}>Контакты</h3>
      <address className={styles.address}>{ADDRESS}</address>
      <a
        className={styles.tel}
        href={TEL}
        aria-label='Наш телефон'
      >
        <svg className={styles.svg} width='10' height='10'>
          <use xlinkHref={`#${Svg_Type.PHONE}`} />
        </svg>
        8-812-500-50-50
      </a>
      <div className={styles.schedule__block}>
        <p className={styles.schedule__title}>Режим работы:</p>
        <p className={styles.schedule__time}>
          <svg className={styles.svg} width='10' height='10'>
            <use xlinkHref={`#${Svg_Type.CLOCK}`} />
          </svg>
          c <time>{Schedule.START}</time> до <time>{Schedule.END}</time>, без выходных.
        </p>
      </div>
    </section>
  );
}
