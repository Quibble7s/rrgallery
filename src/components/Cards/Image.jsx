import React from 'react';
import { useHistory } from 'react-router-dom';

const Image = ({ className, src, alt, id, onLoadClassName }) => {
  const history = useHistory();
  const onClickHandler = () => {
    history.push(`/photo?id=${id}`);
  };
  return (
    <img
      onClick={onClickHandler}
      onLoad={(e) => {
        e.target.classList.add(onLoadClassName);
      }}
      className={className}
      src={src}
      alt={alt}
    />
  );
};

export default Image;
