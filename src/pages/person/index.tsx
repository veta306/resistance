import { FC } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import styles from './person.module.css';
import Tape from '../../assets/images/Masking Tape - 38.png';
import partyLogo from '../../assets/images/party_logo_example.png';
import workLogo from '../../assets/images/ic_sharp-cases.png';
import { Icon } from '@iconify/react/dist/iconify.js';

const PersonPage: FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.person}>
          <img src={Tape} className={styles.tape} />
          <div className={styles.personPhoto}></div>
          <div className={styles.personInfo}>
            <div className={styles.name}>МАКСИМ ШЕВЧЕНКО</div>
            <div className={styles.info}>
              <p>
                Максим Шевченко народився у малому місті. Має вищу освіту з
                економіик та права. Працює у держслужбі, спеціалізується на
                фінансах. Швидко ріс у кар’єрі, ставши начальником відділу
                фінансового моніторінгу.
              </p>
              <div className={styles.logos}>
                <div className={styles.party}>
                  <img src={partyLogo} />
                  <p>Сила народу</p>
                </div>
                <div className={styles.work}>
                  <img src={workLogo} />
                  <p>Начальник відділу фінансового моніторингу</p>
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
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PersonPage;
