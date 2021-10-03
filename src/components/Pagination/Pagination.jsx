import React from "react";
import { useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

import PaginationButton from "../Buttons/PaginationButton";

import {
  NEXT_SECCTION,
  PREVIOUS_SECCTION,
} from "../../models/constants/pagination";

import "../../sass/components/Input/pagination.scss";

const Pagination = ({
  currentPage,
  startPage,
  endPage,
  range,
  totalPages = 0,
  onPageChange = () => null,
}) => {
  const loadButtons = useCallback(() => {
    const buttons = [];
    //Adding extra buttons if the user is at the last secction
    if (startPage - range > 0) {
      buttons.push(
        <PaginationButton
          key={uuidv4()}
          active={currentPage === 1}
          value={1}
          onClick={onPageChange}
        />,
      );
      buttons.push(
        <PaginationButton
          key={uuidv4()}
          active={false}
          value={PREVIOUS_SECCTION}
          onClick={onPageChange}
        />,
      );
    }
    //If we aren't at the end of the pagination (aka: totalPages)
    if (currentPage !== totalPages) {
      for (let i = startPage; i < endPage + 1; i++) {
        if (i <= totalPages) {
          buttons.push(
            <PaginationButton
              key={uuidv4()}
              active={currentPage === i}
              value={i}
              onClick={onPageChange}
            />,
          );
        }
      }
      //Adding extra buttons to select the next secction and the end of the pagination if the user isn't at the end of the pagination
      if (startPage + range < totalPages) {
        buttons.push(
          <PaginationButton
            key={uuidv4()}
            active={false}
            value={NEXT_SECCTION}
            onClick={onPageChange}
          />,
        );
        buttons.push(
          <PaginationButton
            key={uuidv4()}
            active={totalPages === currentPage}
            value={totalPages}
            onClick={onPageChange}
          />,
        );
      }
    } else {
      for (let i = totalPages - (range - 1); i < totalPages + 1; i++) {
        buttons.push(
          <PaginationButton
            key={uuidv4()}
            active={currentPage === i}
            value={i}
            onClick={onPageChange}
          />,
        );
      }
    }
    return buttons;
  }, [currentPage, endPage, startPage, range, totalPages, onPageChange]);
  return <div className='pagination'>{loadButtons()}</div>;
};

export default Pagination;
