import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './header.module.scss';

function Header({ refProp }) {
  const headerRef = useRef();
  let white = false;
  const navigate = useNavigate();
  function handleScroll(e) {
    if (window.scrollY > 50 && !white) {
      headerRef.current.classList.add(styles.active);
    }
    if (window.scrollY < 50) headerRef.current.classList.remove(styles.active);
  }
  window.onscroll = handleScroll;
  return (
    <div className={styles.header} ref={headerRef}>
      <button
        className={styles.backButton}
        onClick={() => {
          navigate('/');
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          fill="currentColor"
          class="bi bi-arrow-left"
          viewBox="0 0 16 16">
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
      </button>
      <h1>мосточки</h1>
      <button
        className={styles.upButton}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          fill="currentColor"
          class="bi bi-chevron-up"
          viewBox="0 0 16 16">
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
      </button>
    </div>
  );
}

export default Header;
