import { FC } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import styles from './person.module.css';
import cardImage from '../../assets/images/card_image_example.png';
import partyLogo from '../../assets/images/party_logo_example.png';

const PersonPage: FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.person}>
          <div className={styles.personFoto}>
            <img src={cardImage} />
          </div>
          <div className={styles.personInfo}>
            <div className={styles.name}>
              <p>МАКСИМ ШЕВЧЕНКО</p>
            </div>
            <div className={styles.info}>
              <p>
                Максим Шевченко народився у малому місті. Має вищу освіту з
                економіик та права. Працює у держслужбі, спеціалізується на
                фінансах. Швидко ріс у кар'єрі, ставши начальником відділу
                фінансового моніторінгу.
              </p>
              <div className={styles.party}>
                
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
