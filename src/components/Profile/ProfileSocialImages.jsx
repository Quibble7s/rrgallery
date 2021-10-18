import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import queryString from 'query-string';

import { getBookmarks, getLikes } from '../../helpers/Firebase/database';
import { section } from '../../models/constants/profileSections';

import Image from '../Cards/Image';
import LoadingDotsCircle from '../Loading/LoadingDotsCircle';

const ProfileSocialImages = ({ selectedSection }) => {
  const { auth } = useSelector((state) => state);
  const [images, setImages] = useState(null);

  useEffect(() => {
    const loadLikedImages = async () => {
      await getLikes(auth.uid).then(async (urls) => {
        const imgs = [];
        for (let i = 0; i < urls.length; i++) {
          const url = urls[i];
          imgs.push(url);
        }
        setImages(imgs);
      });
    };
    const loadBookmarkedImages = async () => {
      await getBookmarks(auth.uid).then(async (urls) => {
        const imgs = [];
        for (let i = 0; i < urls.length; i++) {
          const url = urls[i];
          imgs.push(url);
        }
        setImages(imgs);
      });
    };
    if (selectedSection === section.LIKES) {
      loadLikedImages();
    } else {
      loadBookmarkedImages();
    }
    return () => {
      setImages(null);
    };
  }, [auth.uid, selectedSection]);

  const getID = (url = '') => {
    const { id = '' } = queryString.parse(url);
    return id;
  };

  return (
    <>
      {images ? (
        images.map((url) => {
          return (
            <Image
              key={url}
              className='profile-socials-container__img'
              onLoadClassName='profile-socials-container__img--loaded'
              src={`${url}&w=512&ar=3:4&fit=crop`}
              alt='512'
              id={getID(url)}
              width='512'
              height='683'
            />
          );
        })
      ) : (
        <LoadingDotsCircle />
      )}
    </>
  );
};

export default ProfileSocialImages;
