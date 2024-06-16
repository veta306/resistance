import { FC } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import styles from './rating.module.css';
import arrowDown from '../../assets/images/arrow_down.png';
import cardImage from '../../assets/images/card_image_example.png';
import partyLogo from '../../assets/images/party_logo_example.png';

const ratingCards = [
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

const repeatedRatingCards = Array(4).fill(ratingCards).flat();

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
          <Link to={'/person'} className={styles.ratingCards}>
            {repeatedRatingCards.map((ratingCard, index) => {
              return (
                <div key={index} className={styles.ratingCard}>
                  <img
                    src={ratingCard.image}
                    alt="card image"
                    className={styles.ratingCardImage}
                  />
                  <p className={styles.ratingCardCount}>
                    {ratingCard.count} ЗАШКВАРІВ
                  </p>
                  <p className={styles.ratingCardName}>{ratingCard.name}</p>
                  <div className={styles.ratingCardParty}>
                    <img
                      src={ratingCard.logo}
                      alt="party logo"
                      className={styles.partyLogo}
                    />
                    <p className={styles.partyName}>{ratingCard.party}</p>
                  </div>
                </div>
              );
            })}
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default RatingPage;
