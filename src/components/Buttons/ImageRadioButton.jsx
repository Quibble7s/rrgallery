import React from 'react';

import '../../sass/components/Input/image-radio-button.scss';

const ImageRadioButton = ({
  className,
  img,
  imgClassModifiers,
  name,
  id,
  onCheckedCallback = () => null,
  ...props
}) => {
  const onClickHandler = (e) => {
    if (e.target.checked) {
      onCheckedCallback(e);
    }
  };
  return (
    <label className={className} htmlFor={id}>
      <img
        className={`image-radio-button__img ${imgClassModifiers}`}
        src={img}
        alt=''
      />
      <input
        onClick={onClickHandler}
        style={{ opacity: '0', position: 'absolute', pointerEvents: 'none' }}
        type='radio'
        name={name}
        id={id}
        {...props}
      />
    </label>
  );
};

export default ImageRadioButton;
