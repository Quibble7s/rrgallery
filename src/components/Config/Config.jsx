import React from 'react';
import { useSelector } from 'react-redux';

import defaultProfilePicture from '../../assets/img/defaultpfp.svg';
import editImage from '../../assets/img/edit.svg';

import '../../helpers/Firebase/storage';

const Config = () => {
  const onUpdateProfile = (e) => {
    e.preventDefault();
  };
  const onUpdateConfiguration = (e) => {
    e.preventDefault();
  };
  const { auth } = useSelector((state) => state);
  return (
    <div className='config'>
      <form onSubmit={onUpdateProfile} className='config-profile'>
        <img
          className='config-profile__img'
          src={auth.photoURL ? auth.photoURL : defaultProfilePicture}
          alt='pfp'
        />
        <p className='text text--color-gray text--size-regular --mt-small'>
          {auth.displayName}
        </p>
        <button className='config-profile__btn --float-left --mt-small'>
          <img className='config-profile__btn-img' src={editImage} alt='edit' />
        </button>
      </form>
      <form
        onSubmit={onUpdateConfiguration}
        className='config-preferences'></form>
    </div>
  );
};

export default Config;
