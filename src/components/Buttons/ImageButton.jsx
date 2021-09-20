import React from "react";

const ImageButton = ({
  className,
  value,
  imgSrc,
  type = "",
  onClick = () => null,
}) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      <img className='btn__image--circular' src={imgSrc} alt={value} />
    </button>
  );
};

export default ImageButton;
