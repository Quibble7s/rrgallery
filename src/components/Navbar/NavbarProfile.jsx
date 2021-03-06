import React, { memo } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Logout } from '../../helpers/Actions/Auth';

import defaultPfp from '../../assets/img/defaultpfp.svg';
import logoutImg from '../../assets/img/logout.svg';
import loginImg from '../../assets/img/login.svg';
import registerImg from '../../assets/img/register.svg';
import profileImg from '../../assets/img/defaultpfp.svg';
import configImg from '../../assets/img/config.svg';
import likedImg from '../../assets/img/heart.svg';
import favoriteImg from '../../assets/img/bookmark.svg';

import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { section } from '../../models/constants/profileSections';

const NavbarProfile = ({ uid, photoURL }) => {
  const { auth } = useSelector((state) => state);

  const onClick = useCallback((e) => {
    const profile = document.querySelector('#profile');
    if (
      e.target.id === profile?.id &&
      !document
        .querySelector('#dropdown')
        ?.classList.contains('nav-profile-dropdown--active') &&
      profile
    ) {
      document
        .querySelector('#dropdown')
        ?.classList.add('nav-profile-dropdown--active');
    } else {
      document
        .querySelector('#dropdown')
        ?.classList.remove('nav-profile-dropdown--active');
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
    };
  }, [onClick]);

  return (
    <div className='border border-gray-400 rounded-full cursor-pointer hover:border-green-400'>
      <img
        id='profile'
        className='w-8'
        src={photoURL ? photoURL : defaultPfp}
        alt='pfp'
      />
      <div id='dropdown' className='nav-profile-dropdown'>
        {auth?.loged ? (
          <>
            <div>
              <img
                className='nav-profile-dropdown__menu-img --float-left'
                src={profileImg}
                alt=''
              />
              <Link
                className='text text--size-regular text--decoration-none text--hover-primary --float-left'
                to={`/user/profile?id=${encodeURI(uid)}`}>
                Profile
              </Link>
            </div>
            <div>
              <img
                className='nav-profile-dropdown__menu-img --float-left'
                src={likedImg}
                alt=''
              />
              <Link
                className='text text--size-regular text--decoration-none text--hover-primary --float-left'
                to={`/user/profile?id=${encodeURI(uid)}&s=${section.LIKES}`}>
                Likes
              </Link>
            </div>
            <div>
              <img
                className='nav-profile-dropdown__menu-img --float-left'
                src={favoriteImg}
                alt=''
              />
              <Link
                className='text text--size-regular text--decoration-none text--hover-primary --float-left'
                to={`/user/profile?id=${encodeURI(uid)}&s=${
                  section.BOOKMARKS
                }`}>
                Bookmarks
              </Link>
            </div>
            <div>
              <img
                className='nav-profile-dropdown__menu-img --float-left'
                src={configImg}
                alt=''
              />
              <Link
                className='text text--size-regular text--decoration-none text--hover-primary --float-left'
                to='/user/configuration'>
                Configuration
              </Link>
            </div>
            <div>
              <img
                className='nav-profile-dropdown__menu-img --float-left'
                src={logoutImg}
                alt=''
              />
              <p
                className='text text--size-regular text--decoration-none text--color-error text--hover-error --float-left'
                onClick={Logout}>
                Logout
              </p>
            </div>
          </>
        ) : (
          <>
            <div>
              <img
                className='nav-profile-dropdown__menu-img --float-left'
                src={loginImg}
                alt=''
              />
              <Link
                className='text text--size-regular text--decoration-none text--hover-primary --float-left'
                to={`/auth/login`}>
                Login
              </Link>
            </div>
            <div>
              <img
                className='nav-profile-dropdown__menu-img --float-left'
                src={registerImg}
                alt=''
              />
              <Link
                className='text text--size-regular text--decoration-none text--hover-primary --float-left'
                to={`/auth/register`}>
                Register
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default memo(NavbarProfile);
