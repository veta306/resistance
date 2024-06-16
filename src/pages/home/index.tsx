import { FC } from 'react';
import Header from '../../components/header';
import arrowDown from '../../assets/images/arrow_down.png';
import styles from './home.module.css';
import cardImage from '../../assets/images/card_image_example.png';
import partyLogo from '../../assets/images/party_logo_example.png';
import smallCardImage from '../../assets/images/small_card_image_example.png';
import Footer from '../../components/footer';
import { Icon } from '@iconify/react';
import PersonCard from '../../components/personCard';
import { PersonCardInfo, ShameCardInfo } from '../../types';
import ShameCard from '../../components/shameCard';
import { Link } from 'react-router-dom';

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

const latestCards: ShameCardInfo[] = [
  {
    image: smallCardImage,
    name: 'МАКСИМ ШЕВЧЕНКО',
    add: '+2',
    date: '22 БЕР 2024',
    description: 'Депутат викритий на хабарі: час для справедливості!',
  },
  {
    image: smallCardImage,
    name: 'ОЛЕНА ПЕТРЕНКО',
    add: '+4',
    date: '20 БЕР 2024',
    description: "Політик фальсифікував вибори: громадськість має об'єднатися!",
  },
  {
    image: smallCardImage,
    name: 'ОЛЕГ СИДОРЕНКО',
    add: '+3',
    date: '15 БЕР 2024',
    description:
      'Корупція у владних коридорах сягнула жахливих масштабів: потрібні рішучі дії!',
  },
  {
    image: smallCardImage,
    name: 'МАКСИМ ШЕВЧЕНКО',
    add: '+5',
    date: '09 БЕР 2024',
    description:
      'Незаконне збагачення політиків - це злочин проти народу: час покласти край!',
  },
  {
    image: smallCardImage,
    name: 'МАКСИМ ШЕВЧЕНКО',
    add: '+3',
    date: '03 БЕР 2024',
    description: 'Корупція у владних коридорах: потрібні рішучі дії!',
  },
  {
    image: smallCardImage,
    name: 'МАКСИМ ШЕВЧЕНКО',
    add: '',
    date: '01 БЕР 2024',
    description: 'Міністр зловживав владою: не можна залишати безкарним!',
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
              <Link to={'/rating'} className={styles.ratingButton}>
                РЕЙТИНГ ЗАШКВАРІВ
                <Icon
                  icon="fontisto:arrow-right"
                  className={styles.arrowRight}
                ></Icon>
              </Link>
            </div>
          </div>
          <div className={styles.ratingCards}>
            {ratingCards.map((ratingCard, index) => (
              <PersonCard key={index} {...ratingCard} />
            ))}
          </div>
          <div className={styles.ratingLine}></div>
          <div className={styles.slider}>
            <div className={styles.sliderButton}>
              <Icon icon="bxs:chevron-left" className={styles.sliderIcon} />
            </div>
            <div className={styles.sliderButton}>
              <Icon icon="bxs:chevron-right" className={styles.sliderIcon} />
            </div>
          </div>
        </section>
        <section className={styles.remember}>
          <div className={styles.rememberInfo}>
            <p className={styles.rememberHead}>
              ПАМ’ЯТАЙ ПРО УСІ ЗАШКВАРИ ДЕПУТАТІВ ТА ЧИНОВНИКІВ
            </p>
            <p className={styles.rememberText}>
              Наша мета - інформувати громадськість про зашквари депутатів{' '}
              <br /> та чиновників, засудити їхню поведінку та сприяти їхньому
              покаранню.
            </p>
          </div>
          <div className={styles.rememberLinks}>
            <Link to={'/shames'} className={styles.rememberLink}>
              <p className={styles.linkText}>ЗАШКВАРИ</p>
              <Icon
                icon="fontisto:arrow-right"
                className={styles.linkIcon}
              ></Icon>
            </Link>
            <div className={styles.thinLine} />
            <Link to={'/rating'} className={styles.rememberLink}>
              <p className={styles.linkText}>ОСОБИ</p>
              <Icon
                icon="fontisto:arrow-right"
                className={styles.linkIcon}
              ></Icon>
            </Link>
          </div>
        </section>
        <section className={styles.latest}>
          <div className={styles.latestHeader}>
            <div className={styles.latestInfo}>
              <p className={styles.latestTitle}>ОСТАННІ ЗАШКВАРИ</p>
              <p className={styles.latestDescription}>
                Оновлюваний перелік епізодів корупції, хабарництва, зловживання
                владою, некомпетентності та інших неприйнятних вчинків
                представників влади.
              </p>
            </div>
            <div className={styles.latestButtons}>
              <Link to={'/shames'} className={styles.latestButton}>
                ВСІ ЗАШКВАРИ
                <Icon
                  icon="fontisto:arrow-right"
                  className={styles.arrowRight}
                ></Icon>
              </Link>
            </div>
          </div>
          <div className={styles.latestCards}>
            {latestCards.map((latestCard, index) => (
              <ShameCard key={index} {...latestCard} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
