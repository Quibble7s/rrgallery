import React from 'react';

import '../../sass/components/Input/image-radio-button.scss';

const ImageRadioButton = ({
  className,
  activeClassName,
  img,
  activeImg,
  imgClassModifiers,
  name,
  id,
  active,
  onCheckedCallback = () => null,
  onCkeckedChangeCallback = () => null,
  ...props
}) => {
  const onClickHandler = (e) => {
    if (e.target.checked) {
      onCheckedCallback(e);
    }
  };

  const onChangeHandler = (e) => {
    onCkeckedChangeCallback(e);
  };

  return (
    <label
      className={active ? `${className} ${activeClassName}` : className}
      htmlFor={id}>
      <img
        className={`image-radio-button__img ${imgClassModifiers}`}
        src={active ? activeImg : img}
        alt=''
      />
      <input
        onClick={onClickHandler}
        onChange={onChangeHandler}
        style={{ opacity: '0', position: 'absolute', pointerEvents: 'none' }}
        type='radio'
        name={name}
        id={id}
        value={id}
        {...props}
      />
    </label>
  );
};

export default ImageRadioButton;
