import { FC } from 'react';
import { ShameCardInfo } from '../../types';
import styles from './shameCard.module.css';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';

const ShameCard: FC<ShameCardInfo> = (shameCard) => {
  return (
    <Link to={'/details'} className={styles.cardLink}>
      <div className={styles.shameCard}>
        <div className={styles.shameCardHead}>
          <img src={shameCard.image} alt="portret" />
          <div>
            <p className={styles.shameCardName}>
              {shameCard.name.toUpperCase()}
            </p>
          </div>
          <p className={styles.shameCardAdd}>{shameCard.add}</p>
        </div>
        <div className={styles.shameCardInfo}>
          <p className={styles.shameCardDate}>{shameCard.date}</p>
          <p className={styles.shameCardDescription}>{shameCard.description}</p>
        </div>
        <div className={styles.triangle}></div>
        <Icon icon="fontisto:arrow-right" className={styles.arrow}></Icon>
      </div>
    </Link>
  );
};

export default ShameCard;
