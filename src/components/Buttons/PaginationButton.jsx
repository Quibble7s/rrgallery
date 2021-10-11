import React, { memo } from 'react';

const PaginationButton = ({ value, active, onClick = () => null }) => {
  return (
    <button
      key={value.toString()}
      className={`btn btn--light-gray btn--radius-4 ${
        active && '--active-page'
      }`}
      value={value}
      onClick={onClick}>
      {value}
    </button>
  );
};

export default memo(PaginationButton);
