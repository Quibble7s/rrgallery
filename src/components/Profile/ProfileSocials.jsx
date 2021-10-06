import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import queryString from 'query-string';

import ImageRadioButton from '../Buttons/ImageRadioButton';

import LikeImage from '../../assets/img/heart.svg';
import ActiveLikeImage from '../../assets/img/heart-active.svg';
import BookmarkImage from '../../assets/img/bookmark.svg';
import ActiveBookmarkImage from '../../assets/img/bookmark-active.svg';
import ProfileSocialImages from './ProfileSocialImages';

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
    <div className='profile-socials'>
      <div className='profile-socials-wrapper'>
        <ProfileHeader />
        <div className='profile-socials-selectors'>
          <ImageRadioButton
            className='profile-socials-selectors__selector'
            activeClassName='profile-socials-selectors__selector--active'
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
              className='profile-socials-selectors__selector'
              activeClassName='profile-socials-selectors__selector--active'
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
        <div className='profile-socials-container'>
          <ProfileSocialImages selectedSection={socialSelected} />
        </div>
      </div>
    </div>
  );
};

export default ProfileSocials;
