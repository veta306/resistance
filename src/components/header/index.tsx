import React, { useState, FC } from 'react';
import logo from '../../assets/images/logo.png';
import styles from './header.module.css';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  const [activeLanguage, setActiveLanguage] = useState('УКР');

  const handleLanguageChange = (language: string) => {
    setActiveLanguage(language);
  };

  return (
    <header className={styles.header}>
      <div className={styles.links}>
        <Link to={'/'} className={styles.link}>
          Зашквари
        </Link>
        <Link to={'/rating'} className={styles.link}>
          Особи
        </Link>
      </div>
      <Link to={'/'}>
        <img src={logo} alt="logo" className={styles.logo} />
      </Link>
      <div className={styles.languages}>
        <button
          className={`${styles.languageButton} ${activeLanguage === 'УКР' ? styles.active : ''}`}
          onClick={() => handleLanguageChange('УКР')}
        >
          УКР
        </button>
        <button
          className={`${styles.languageButton} ${activeLanguage === 'EN' ? styles.active : ''}`}
          onClick={() => handleLanguageChange('EN')}
        >
          EN
        </button>
      </div>
    </header>
  );
};

export default Header;
