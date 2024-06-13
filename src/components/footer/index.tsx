import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.css';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <div className={styles.text}>Спротив</div>
        <Link to={'/'} className={styles.link}>
          Зашквари
        </Link>
        <Link to={'/'} className={styles.link}>
          Особи
        </Link>
        <div className={styles.terms}>Privacy Policy Terms of Use</div>
      </div>

      <div className={styles.info}>Veta306, 2024 Всі права захищені</div>
    </footer>
  );
};

export default Footer;
