import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import defaultProfilePicture from '../../assets/img/defaultpfp.svg';

const ProfileHeader = () => {
  const { auth } = useSelector((state) => state);
  return (
    <div className='profile-header'>
      {auth.photoURL ? (
        <img className='profile-header__img' src={auth.photoURL} alt='pfp' />
      ) : (
        <img
          className='profile-header__img'
          src={defaultProfilePicture}
          alt='pfp'
        />
      )}
      <Link
        className='text text--center  text--color-gray text--decoration-none text--hover-gray'
        to={`/user/${auth.uid}/profile`}>
        @{auth.displayName}
      </Link>
    </div>
  );
};

export default ProfileHeader;
