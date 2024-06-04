import { FC } from 'react';
import logo from '../../assets/images/logo.png';
import styles from './header.module.css';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.links}>
        <Link to={'/'} className={styles.link}>
          Зашквари
        </Link>
        <Link to={'/'} className={styles.link}>
          Особи
        </Link>
      </div>
      <img src={logo} alt="logo" className={styles.logo} />
      <div className={styles.languages}>
        <button className={styles.languageButton}>УКР</button>
        <button className={styles.languageButton}>EN</button>
      </div>
    </header>
  );
};

export default Header;
