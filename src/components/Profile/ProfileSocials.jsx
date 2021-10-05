import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import queryString from 'query-string';

import ImageRadioButton from '../Buttons/ImageRadioButton';

import LikeImage from '../../assets/img/heart.svg';
import BookmarkImage from '../../assets/img/bookmark.svg';
import ProfileSocialImages from './ProfileSocialImages';

import { section } from '../../models/constants/profileSections';
import { useLocation } from 'react-router-dom';

const ProfileSocials = () => {
  const location = useLocation();
  const { id = '', s = '' } = queryString.parse(location.search);
  const { auth } = useSelector((state) => state);
  const [socialSelected, setSocialSelected] = useState(
    s !== '' ? s : section.LIKES,
  );

  const onSocialSelectedHandler = (e) => {
    setSocialSelected(e.target.id);
  };

  return (
    <div className='profile-socials'>
      <div className='profile-socials-wrapper'>
        <div className='profile-socials-selectors'>
          <ImageRadioButton
            className='profile-socials-selectors__selector'
            img={LikeImage}
            onCheckedCallback={onSocialSelectedHandler}
            name='socialselector'
            id={section.LIKES}
            defaultChecked={socialSelected === section.LIKES}
          />
          {auth.uid === id && (
            <ImageRadioButton
              className='profile-socials-selectors__selector'
              img={BookmarkImage}
              onCheckedCallback={onSocialSelectedHandler}
              name='socialselector'
              id={section.BOOKMARKS}
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
