import { FC } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import styles from './rating.module.css';
import arrowDown from '../../assets/images/arrow_down.png';
import cardImage from '../../assets/images/card_image_example.png';
import partyLogo from '../../assets/images/party_logo_example.png';
import { PersonCardInfo } from '../../types';
import PaginatedCards from '../../components/paginatedCards';

const ratingCards: PersonCardInfo[] = [
  {
    image: cardImage,
    count: 59,
    name: 'МАКСИМ ШЕВЧЕНКО',
    party: 'Сила народу',
    logo: partyLogo,
  },
  {
    image: cardImage,
    count: 45,
    name: 'ОЛЕГ СИДОРЕНКО',
    party: 'Партія справедливості',
    logo: partyLogo,
  },
  {
    image: cardImage,
    count: 26,
    name: 'ОЛЕНА ПЕТРЕНКО',
    party: 'Голос України',
    logo: partyLogo,
  },
];

const repeatedRatingCards = Array(100).fill(ratingCards).flat();

const RatingPage: FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.introduction}>
          <div className={styles.sitename}>
            <p className={styles.name}>РЕЙТИНГ ЗАШКВАРІВ</p>
          </div>
          <div className={styles.whiteLine}></div>
          <p className={styles.goal}>
            Ця категорія сайту присвячена висвітленню депутатів та чиновників,
            які зрадили довіру народу та вчинили злочини проти України.
          </p>
          <div className={styles.arrows}>
            <img src={arrowDown} alt="arrow" />
            <img src={arrowDown} alt="arrow" />
            <img src={arrowDown} alt="arrow" />
          </div>
        </section>
        <section className={styles.rating}>
          <PaginatedCards cards={repeatedRatingCards} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default RatingPage;
