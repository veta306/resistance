import { FC } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import styles from './details.module.css';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';

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
          <div className={styles.space}></div>
        </section>
        <section className={styles.description}>
          <p>
            Сьогодні правоохоронні органи оголосили про викриття корупційної
            схеми, до якої був залучений чиновник Максим Шевченко.
          </p>
          <p>
            <span>Згідно з НАБУ</span>, чиновник Максим Шевченко використовував
            своє службове становище для корупційних схем. В результаті його дій
            державі було завдано збитків на суму <br /> 100 000 000 гривень.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DetailsPage;
