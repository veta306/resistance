import { FC } from 'react';
import { PersonCardInfo } from '../../types';
import styles from './personCard.module.css';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';

const PersonCard: FC<PersonCardInfo> = (personCard) => {
  return (
    <Link to={'/person'} className={styles.cardLink}>
      <div className={styles.personCard}>
        <img
          src={personCard.image}
          alt="card image"
          className={styles.personCardImage}
        />
        <p className={styles.personCardCount}>{personCard.count} ЗАШКВАРІВ</p>
        <p className={styles.personCardName}>{personCard.name}</p>
        <div className={styles.personCardParty}>
          <img
            src={personCard.logo}
            alt="party logo"
            className={styles.partyLogo}
          />
          <p className={styles.partyName}>{personCard.party}</p>
        </div>
        <div className={styles.triangle}></div>
        <Icon icon="fontisto:arrow-right" className={styles.arrow}></Icon>
      </div>
    </Link>
  );
};

export default PersonCard;
