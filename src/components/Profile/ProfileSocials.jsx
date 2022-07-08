import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import queryString from 'query-string';

import ImageRadioButton from '../Buttons/ImageRadioButton';

import LikeImage from '../../assets/img/heart.svg';
import ActiveLikeImage from '../../assets/img/heart-active.svg';
import BookmarkImage from '../../assets/img/bookmark.svg';
import ActiveBookmarkImage from '../../assets/img/bookmark-active.svg';
import ProfileSocialImages from './ProfileSocialImages';
import { Container } from '../Layout/Container';

import { section } from '../../models/constants/profileSections';
import { useLocation } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';

const ProfileSocials = () => {
  const location = useLocation();
  const { id = '', s = '' } = queryString.parse(location.search);
  const { auth } = useSelector((state) => state);
  const [[socialSelected, likesActive, bookmarksActive], setSocialSelected] =
    useState([
      s !== '' ? s : section.LIKES,
      s === section.LIKES || s === '',
      s === section.BOOKMARKS,
    ]);

  const onSocialSelectedHandler = (e) => {
    setSocialSelected([
      e.target.id,
      e.target.id === section.LIKES,
      e.target.id === section.BOOKMARKS,
    ]);
  };

  return (
    <Container className='py-8'>
      <div className='w-full shadow-md p-4 rounded-md'>
        <ProfileHeader />
        <div className='w-full grid grid-cols-2 gap-8 mb-8'>
          <ImageRadioButton
            className='w-full cursor-pointer bg-gray-100 flex flex-row items-center justify-center rounded-md transition-all duration-200'
            activeClassName='p-2 bg-gray-200 cursor-not-allowed'
            img={LikeImage}
            activeImg={ActiveLikeImage}
            onCheckedCallback={onSocialSelectedHandler}
            name='socialselector'
            id={section.LIKES}
            active={likesActive}
            defaultChecked={socialSelected === section.LIKES}
          />
          {auth.uid === id && (
            <ImageRadioButton
              className='w-full cursor-pointer bg-gray-100 flex flex-row items-center justify-center rounded-md transition-all duration-200'
              activeClassName='p-2 bg-gray-200 cursor-not-allowed'
              img={BookmarkImage}
              activeImg={ActiveBookmarkImage}
              onCheckedCallback={onSocialSelectedHandler}
              name='socialselector'
              id={section.BOOKMARKS}
              active={bookmarksActive}
              defaultChecked={socialSelected === section.BOOKMARKS}
            />
          )}
        </div>
        <div className='w-full grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
          <ProfileSocialImages selectedSection={socialSelected} />
        </div>
      </div>
    </Container>
  );
};

export default ProfileSocials;
