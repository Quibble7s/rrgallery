import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getBookmarks, getLikes } from '../../helpers/Firebase/database';
import { getImage } from '../../helpers/Unsplash/getimages';
import { section } from '../../models/constants/profileSections';

import Image from '../Cards/Image';
import LoadingDotsCircle from '../Loading/LoadingDotsCircle';

const ProfileSocialImages = ({ selectedSection }) => {
  const { auth } = useSelector((state) => state);
  const [images, setImages] = useState(null);

  useEffect(() => {
    const loadLikedImages = async () => {
      await getLikes(auth.uid).then(async (val) => {
        const imgs = [];
        for (let i = 0; i < val.length; i++) {
          const id = val[i];
          await getImage(id).then((img) => {
            imgs.push(img);
          });
        }
        setImages(imgs);
      });
    };
    const loadBookmarkedImages = async () => {
      await getBookmarks(auth.uid).then(async (val) => {
        const imgs = [];
        for (let i = 0; i < val.length; i++) {
          const id = val[i];
          await getImage(id).then((img) => {
            imgs.push(img);
          });
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
  return (
    <>
      {images ? (
        images.map((img) => {
          return (
            <Image
              key={img.id}
              className='profile-socials-container__img'
              onLoadClassName='profile-socials-container__img--loaded'
              src={`${img.urls.raw}&w=512&ar=3:4&fit=crop`}
              alt={img.id}
              id={img.id}
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
