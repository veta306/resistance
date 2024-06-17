import { FC } from 'react';
import styles from './smallPerson.module.css';
import { Icon } from '@iconify/react/dist/iconify.js';
import smallCardImage from '../../assets/images/small_card_image_example.png';

const SmallPerson: FC = () => {
  return (
    <div className={styles.connectedPerson}>
      <img className={styles.connectedImage} src={smallCardImage} alt="photo" />
      <p className={styles.connectedName}>МАКСИМ ШЕВЧЕНКО</p>
      <Icon
        icon="fontisto:arrow-right"
        className={styles.connectedArrow}
      ></Icon>
    </div>
  );
};

export default SmallPerson;
