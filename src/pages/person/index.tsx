import { FC } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import styles from './person.module.css';
import Tape from '../../assets/images/Masking Tape - 38.png';
import partyLogo from '../../assets/images/party_logo_example.png';
import workLogo from '../../assets/images/ic_sharp-cases.png';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';
import PaginatedCards from '../../components/paginatedCards';
import smallCardImage from '../../assets/images/small_card_image_example.png';
import { ShameCardInfo } from '../../types';
import SmallPerson from '../../components/smallPerson';

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

const PersonPage: FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.person}>
          <div className={styles.breadcrumb}>
            <Link to={'/'} className={styles.breadcrumbLinkMain}>
              Головна{' '}
              <Icon
                icon="bxs:chevron-right"
                className={styles.breadcrumbIcon}
              ></Icon>
            </Link>
            <Link to={'/shames'} className={styles.breadcrumbLinkMain}>
              Особи{' '}
              <Icon
                icon="bxs:chevron-right"
                className={styles.breadcrumbIcon}
              ></Icon>
            </Link>
            <p className={styles.breadcrumbLinkCurrent}>Максим Шевченко</p>
          </div>
          <div className={styles.personIntroduction}>
            <div>
              <img src={Tape} className={styles.tape} />
              <div className={styles.personPhoto}></div>
            </div>
            <div className={styles.personInfo}>
              <div className={styles.name}>МАКСИМ ШЕВЧЕНКО</div>
              <p className={styles.info}>
                Максим Шевченко народився у малому місті. Має вищу освіту з
                економіик та права. Працює у держслужбі, спеціалізується на
                фінансах. Швидко ріс у кар’єрі, ставши начальником відділу
                фінансового моніторингу.
              </p>
              <div className={styles.logos}>
                <div className={styles.party}>
                  <img className={styles.partyLogo} src={partyLogo} />
                  <p className={styles.partyText}>Сила народу</p>
                </div>
                <div className={styles.work}>
                  <img className={styles.workLogo} src={workLogo} />
                  <p className={styles.workText}>
                    Начальник відділу фінансового моніторингу
                  </p>
                </div>
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
            </div>
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
        <section className={styles.latest}>
          <div className={styles.latestHeader}>
            <div className={styles.latestInfo}>
              <p className={styles.latestTitle}>59 ЗАШКВАРІВ</p>
              <p className={styles.latestDescription}>
                Оновлюваний перелік епізодів корупції, хабарництва, зловживання
                владою, некомпетентності та інших неприйнятних вчинків цього
                представника влади.
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
          <PaginatedCards cards={repeatedShameCards} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PersonPage;
