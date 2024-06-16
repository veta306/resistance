import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.css';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <div className={styles.navLinks}>
          <p className={styles.name}>СПРОТИВ</p>
          <Link to={'/shames'} className={styles.link}>
            Зашквари
          </Link>
          <Link to={'/rating'} className={styles.link}>
            Особи
          </Link>
        </div>
        <div className={styles.terms}>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
      </div>
      <div className={styles.info}>
        <p className={styles.infoRow}>Horbenko, 2024</p>
        <p className={styles.infoRow}>Всі права захищені</p>
      </div>
    </footer>
  );
};

export default Footer;
