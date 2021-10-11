import React, { memo, useState } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

import LoadingDotsLine from '../components/Loading/LoadingDotsLine';
import ImageCard from '../components/Cards/ImageCard';

import { useSearchNewImages } from '../hooks/useSearchImages';
import {
  NEXT_SECCTION,
  PREVIOUS_SECCTION,
  RANGE,
} from '../models/constants/pagination';
import Pagination from '../components/Pagination/Pagination';
import { useMemo } from 'react';
import { useEffect } from 'react';
import NoResultsFound from '../components/Search/NoResultsFound';

const SearchPage = ({ history }) => {
  //Getting the parameters of the query
  const location = useLocation();
  const { q = '', p = '' } = queryString.parse(location.search);

  //Images
  const [images, pages] = useSearchNewImages(q, p);
  //Pagination stuff
  const [currentPage, setCurrentPage] = useState(parseInt(p));
  const [[startPage, endPage], setPages] = useState([1, RANGE]);

  //Calculating in what secction of the pagination we are depending on the currentPage
  const currentSection = useMemo(() => {
    return Math.floor(currentPage / RANGE + 0.75);
  }, [currentPage]);

  //Calculating the end page and the start page of the secction
  const endP = pages > RANGE ? currentSection * RANGE : pages;
  const startP = pages > RANGE ? endP - (RANGE - 1) : 1;

  //Setting the start page and the end page
  useEffect(() => {
    setPages([startP, endP]);
  }, [currentSection, pages, endP, startP]);

  const onPageChangeHandler = (e) => {
    const val =
      e.target.value !== NEXT_SECCTION && e.target.value !== PREVIOUS_SECCTION
        ? parseInt(e.target.value)
        : e.target.value;
    let selectedPage = 1;
    if (val !== NEXT_SECCTION && val !== PREVIOUS_SECCTION && val !== pages) {
      selectedPage = val;
    } else {
      if (e.target.value === NEXT_SECCTION) {
        selectedPage = endPage + 1;
      } else if (e.target.value === PREVIOUS_SECCTION) {
        selectedPage = startPage - 1;
      } else {
        selectedPage = pages;
      }
    }
    setCurrentPage(selectedPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.push(`/search?q=${q}&p=${selectedPage}`);
  };

  return (
    <>
      <div className='container --w-100 --center'>
        <div className='container --w-75 --gap-2 --center-row --padding-regular --warp --mt-large'>
          {images?.length < 1 && <NoResultsFound />}
          {!images ? (
            <LoadingDotsLine />
          ) : (
            images?.map((img) => <ImageCard key={img.id} img={img} />)
          )}
          {images && pages > 0 && (
            <Pagination
              currentPage={currentPage}
              startPage={startPage}
              endPage={endPage}
              totalPages={pages}
              range={RANGE}
              onPageChange={onPageChangeHandler}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default memo(SearchPage);
