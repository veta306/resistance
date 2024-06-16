import { FC } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import arrowDown from '../../assets/images/arrow_down.png';
import styles from './latest.module.css';
import { ShameCardInfo } from '../../types';
import smallCardImage from '../../assets/images/small_card_image_example.png';
import PaginatedCards from '../../components/paginatedCards';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';

const shameCards: ShameCardInfo[] = [
  {
    image: smallCardImage,
    name: 'Максим Шевченко',
    add: '+2',
    date: '22 Бер 2024',
    description: 'Депутат викритий на хабарі: час для справедливості!',
  },
  {
    image: smallCardImage,
    name: 'Максим Шевченко',
    add: '+5',
    date: '09 Бер 2024',
    description:
      'Незаконне збагачення політиків - це злочин проти народу: час покласти край!',
  },
  {
    image: smallCardImage,
    name: 'Максим Шевченко',
    add: '+3',
    date: '03 Бер 2024',
    description: 'Корупція у владних коридорах: потрібні рішучі дії!',
  },
  {
    image: smallCardImage,
    name: 'Олена Петренко',
    add: '+4',
    date: '20 Бер 2024',
    description: "Політик фальсифікував вибори: громадськість має об'єднатися!",
  },
  {
    image: smallCardImage,
    name: 'Олег Сидоренко',
    add: '+3',
    date: '15 Бер 2024',
    description:
      'Корупція у владних коридорах сягнула жахливих масштабів: потрібні рішучі дії!',
  },
  /*  {
    image: smallCardImage,
    name: 'Максим Шевченко',
    add: '+3',
    date: '01 Бер 2024',
    description: 'Міністр зловживав владою: не можна залишати безкарним!',
  },*/
];
const repeatedShameCards = Array(100).fill(shameCards).flat();

const LatestPage: FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.introduction}>
          <div className={styles.breadcrumb}>
            <Link to={'/'} className={styles.breadcrumbLinkMain}>
              Головна{' '}
              <Icon
                icon="bxs:chevron-right"
                className={styles.breadcrumbIcon}
              ></Icon>
            </Link>
            <p className={styles.breadcrumbLinkCurrent}>Зашквари</p>
          </div>
          <div className={styles.pageHead}>
            <div className={styles.pageName}>
              <p className={styles.name}>ОСТАННІ ЗАШКВАРИ</p>
            </div>
            <div className={styles.whiteLine}></div>
            <p className={styles.goal}>
              Оновлюваний перелік епізодів корупції, хабарництва, зловживання
              владою, некомпетентності та інших неприйнятних вчинків
              представників влади.
            </p>
            <div className={styles.arrows}>
              <img src={arrowDown} alt="arrow" />
              <img src={arrowDown} alt="arrow" />
              <img src={arrowDown} alt="arrow" />
            </div>
          </div>
        </section>
        <section className={styles.shameCards}>
          <PaginatedCards cards={repeatedShameCards} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LatestPage;
