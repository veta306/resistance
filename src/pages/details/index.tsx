import { FC } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import styles from './details.module.css';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';
import detailedImage from '../../assets/images/detailed_image.png';
import ShameCard from '../../components/shameCard';
import { ShameCardInfo } from '../../types';
import smallCardImage from '../../assets/images/small_card_image_example.png';
import tape from '../../assets/images/tape.png';
import SmallPerson from '../../components/smallPerson';

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

const DetailsPage: FC = () => {
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
            <Link to={'/shames'} className={styles.breadcrumbLinkMain}>
              Зашквари{' '}
              <Icon
                icon="bxs:chevron-right"
                className={styles.breadcrumbIcon}
              ></Icon>
            </Link>
            <p className={styles.breadcrumbLinkCurrent}>
              Журналістське розслідування викриває давно забуті корупційні схеми
              в уряді
            </p>
          </div>
          <div className={styles.introductionInfo}>
            <p className={styles.infoDate}>22 БЕР 2024</p>
            <p className={styles.infoHead}>
              Журналістське розслідування викриває давно забуті корупційні схеми
              в уряді
            </p>
            <p className={styles.infoDescription}>
              Цей випадок є черговим свідченням корупції, яка, на жаль, все ще
              поширена в Україні. Важливо, щоб подібні злочини розслідувалися та
              каралися, щоб запобігти подібним випадкам у майбутньому.
            </p>
          </div>
          <div className={styles.connected}>
            <p className={styles.connectedHead}>ПОВ’ЯЗАНІ ОСОБИ:</p>
            <div className={styles.connectedPersons}>
              <SmallPerson />
              <SmallPerson />
              <SmallPerson />
              <SmallPerson />
              <SmallPerson />
            </div>
          </div>
        </section>
        <section className={styles.description}>
          <p className={styles.descriptionText}>
            Сьогодні правоохоронні органи оголосили про викриття корупційної
            схеми, до якої був залучений чиновник Максим Шевченко.
          </p>
          <p className={styles.descriptionText}>
            <span className={styles.selected}>Згідно з НАБУ</span>, чиновник
            Максим Шевченко використовував своє службове становище для
            корупційних схем. В результаті його дій державі було завдано збитків
            на суму <br /> 100 000 000 гривень.
          </p>
          <img
            className={styles.descriptionImage}
            src={detailedImage}
            alt="details"
          />
          <img src={tape} alt="tape" className={styles.tape} />
          <div className={styles.descriptionDetails}>
            <p className={styles.descriptionText}>
              Максим Шевченко був затриманий та йому пред’явлено звинувачення у
              корупції та зловживанні службовим положенням.
            </p>
            <p className={styles.descriptionText}>
              Важливість розслідування та покарання:
            </p>
            <ul className={styles.descriptionList}>
              <li className={styles.descriptionText}>
                Цей випадок є свідченням корупції в Україні.
              </li>
              <li className={styles.descriptionText}>
                Важливо, щоб подібні злочини розслідувалися та каралися.
              </li>
              <li className={styles.descriptionText}>
                Це допоможе запобігти подібним випадкам у майбутньому.
              </li>
            </ul>
            <p className={styles.descriptionText}>
              Цей випадок є черговим свідченням корупції, яка, на жаль, все ще
              поширена в Україні. Важливо, щоб подібні злочини розслідувалися та
              каралися, щоб запобігти подібним випадкам у майбутньому.
            </p>
          </div>
          <div className={styles.descriptionSocials}>
            <div className={styles.social}>
              <Icon className={styles.facebook} icon="gg:facebook" />
            </div>
            <div className={styles.social}>
              <Icon className={styles.facebook} icon="gg:facebook" />
            </div>
            <div className={styles.social}>
              <Icon className={styles.facebook} icon="gg:facebook" />
            </div>
          </div>
        </section>
        <section className={styles.sources}>
          <p className={styles.sourcesHead}>СПИСОК ДЖЕРЕЛ</p>
          <div className={styles.sourcesLinks}>
            <div className={styles.sourcesLink}>
              <p className={styles.sourcesName}>
                Національне антикорупційне бюро України (НАБУ)
                <Icon
                  icon="fontisto:arrow-right"
                  className={styles.linkArrow}
                ></Icon>
              </p>
              <p className={styles.sourcesDescription}>
                Максим Шевченко затриманий за підозрою в корупції!
              </p>
            </div>
            <div className={styles.sourcesLink}>
              <p className={styles.sourcesName}>
                Українська правда
                <Icon
                  icon="fontisto:arrow-right"
                  className={styles.linkArrow}
                ></Icon>
              </p>
              <p className={styles.sourcesDescription}>
                Корупційна схема чиновника розкрита! 100 000 гривень збитків
                державі: Максим Шевченко відповість за свої дії!
              </p>
            </div>
            <div className={styles.sourcesLink}>
              <p className={styles.sourcesName}>
                Львівська газета
                <Icon
                  icon="fontisto:arrow-right"
                  className={styles.linkArrow}
                ></Icon>
              </p>
              <p className={styles.sourcesDescription}>
                Чиновник Максим Шевченко затриманий за підозрою в корупції!
                Високопосадовець викритий у хабарництві!
              </p>
            </div>
            <div className={styles.sourcesLink}>
              <p className={styles.sourcesName}>
                Генеральна прокуратура України
                <Icon
                  icon="fontisto:arrow-right"
                  className={styles.linkArrow}
                ></Icon>
              </p>
              <p className={styles.sourcesDescription}>
                Максим Шевченко - черговий чиновник, спійманий на хабарі.
              </p>
            </div>
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

export default DetailsPage;
