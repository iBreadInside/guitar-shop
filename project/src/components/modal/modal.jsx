import styles from './modal.module.scss';
import ReactModal from 'react-modal';

const handleAfterOpen = () => {
  document.body.classList.add(styles.open);
};

const handleAfterClose = () => {
  document.body.classList.remove(styles.open);
};

export default function Modal({modalState, ...props}) {

  return(
    <ReactModal
      isOpen={modalState}
      overlayClassName={styles.modal}
      className={styles.container}
      onAfterOpen={handleAfterOpen}
      onAfterClose={handleAfterClose}
    >
      <button
        className={styles.close}
        // onClick={_handleCloseClick}
        aria-label='Закрыть окно'
      >
        <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M10.77 11.835L6.00004 7.05754L1.23004 11.835L0.165039 10.77L4.94254 6.00004L0.165039 1.23004L1.23004 0.165039L6.00004 4.94254L10.77 0.172539L11.8275 1.23004L7.05754 6.00004L11.8275 10.77L10.77 11.835Z' fill='#9F9E9E'/>
        </svg>
      </button>
      {props.children}
    </ReactModal>
  );
}
