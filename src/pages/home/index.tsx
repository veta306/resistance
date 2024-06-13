import { FC } from 'react';
import Header from '../../components/header';
import arrowDown from '../../assets/images/arrow_down.png';
import styles from './home.module.css';
import cardImage from '../../assets/images/card_image_example.png';
import partyLogo from '../../assets/images/party_logo_example.png';
import Footer from '../../components/footer';

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

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.introduction}>
          <div className={styles.sitename}>
            <p className={styles.site}>САЙТ</p>
            <p className={styles.name}>СПРОТИВУ</p>
          </div>
          <div className={styles.whiteLine}></div>
          <p className={styles.goal}>
            Проект створений для того, щоб дати можливість громадянам України
            контролювати дії влади та боротися з корупцією.
          </p>
          <div className={styles.arrows}>
            <img src={arrowDown} alt="arrow" />
            <img src={arrowDown} alt="arrow" />
            <img src={arrowDown} alt="arrow" />
          </div>
        </section>
        <section className={styles.rating}>
          <div className={styles.ratingHeader}>
            <div className={styles.ratingInfo}>
              <p className={styles.ratingTitle}>РЕЙТИНГ ЗАШКВАРІВ</p>
              <p className={styles.ratingDescription}>
                Ця категорія сайту присвячена висвітленню депутатів та
                чиновників, які зрадили довіру народу та вчинили злочини проти
                України.
              </p>
            </div>
            <div className={styles.ratingButtons}>
              <button className={styles.ratingButton}>
                РЕЙТИНГ ЗАШКВАРІВ<span className={styles.arrowRight}></span>
              </button>
            </div>
          </div>
          <div className={styles.ratingCards}>
            {ratingCards.map((ratingCard, index) => {
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
          </div>
          <div className={styles.ratingLine}></div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
