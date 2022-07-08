import React, { memo, useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useGetNewImages } from '../hooks/useGetNewImages';
import { addUser } from '../helpers/Firebase/database';

import ImageCard from '../components/Cards/ImageCard';
import LoadingDotsLine from '../components/Loading/LoadingDotsLine';
import Pagination from '../components/Pagination/Pagination';
import { Container } from '../components/Layout/Container';

import {
  NEXT_SECCTION,
  PREVIOUS_SECCTION,
  RANGE,
} from '../models/constants/pagination';
import GoToTop from '../components/GoToTop/GoToTop';

const HomePage = () => {
  //Add the user to the database if it doesn't exist
  const { auth } = useSelector((state) => state);
  useEffect(() => {
    if (auth.loged) {
      addUser(auth.uid);
    }
  }, [auth.loged, auth.uid]);
  //Pagination stuff
  const range = RANGE;
  const [currentPage, setCurrentPage] = useState(1);
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(range);

  //Fetching data
  const [response] = useGetNewImages(currentPage);

  //setting the current page based on the value of the button clicked
  const onPageChangeHandler = (e) => {
    if (!(parseInt(e.target.value) === currentPage)) {
      let page = 0;
      if (
        e.target.value !== NEXT_SECCTION &&
        e.target.value !== PREVIOUS_SECCTION &&
        parseInt(e.target.value) !== response.nTotal
      ) {
        page = parseInt(e.target.value);
        if (page === 1) {
          setStartPage(page);
          setEndPage(page + (range - 1));
        }
      } else {
        if (e.target.value === NEXT_SECCTION) {
          page = endPage + 1;
          setStartPage(page);
          setEndPage(endPage + range);
        } else if (e.target.value === PREVIOUS_SECCTION) {
          page = startPage - 1;
          setStartPage(startPage - range);
          setEndPage(page);
        } else {
          page = response.nTotal;
          setStartPage(page - (range - 1));
          setEndPage(page);
        }
      }
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <GoToTop />
      <div className='w-full min-h-screen flex flex-col gap-4 py-8 items-center justify-end'>
        {!response?.data ? (
          <LoadingDotsLine />
        ) : (
          <Container>
            <div className='w-full grid gird-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {response?.data.map((img) => (
                <ImageCard key={img.id} img={img} />
              ))}
            </div>
          </Container>
        )}
        {response?.data && (
          <Pagination
            startPage={startPage}
            endPage={endPage}
            currentPage={currentPage}
            range={range}
            totalPages={response?.nTotal}
            onPageChange={onPageChangeHandler}
          />
        )}
      </div>
    </>
  );
};

export default memo(HomePage);
