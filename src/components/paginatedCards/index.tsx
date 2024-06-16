import { FC, useState } from 'react';
import Pagination from 'rc-pagination';
import { PersonCardInfo, ShameCardInfo } from '../../types';
import PersonCard from '../personCard';
import styles from './paginatedCards.module.css';
import 'rc-pagination/assets/index.css';
import './pagination.css';
import ShameCard from '../shameCard';

const ITEMS_PER_PAGE = 12;

const PaginatedCards: FC<{ cards: PersonCardInfo[] | ShameCardInfo[] }> = ({
  cards,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const currentCards = cards.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  console.log(currentCards);

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {currentCards.map((card, index) => {
          return 'description' in card ? (
            <ShameCard key={index} {...(card as unknown as ShameCardInfo)} />
          ) : (
            <PersonCard key={index} {...(card as unknown as PersonCardInfo)} />
          );
        })}
      </div>
      <Pagination
        current={currentPage}
        total={cards.length}
        pageSize={ITEMS_PER_PAGE}
        onChange={handlePageChange}
        showTitle={false}
      />
    </div>
  );
};

export default PaginatedCards;
