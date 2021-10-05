import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

import { useSocialEvents } from '../../hooks/useSocialEvents';

import LoadingDotsCircle from '../Loading/LoadingDotsCircle';

import downSvg from '../../assets/img/download.svg';
import bookmarkImage from '../../assets/img/bookmark.svg';
import likeImage from '../../assets/img/heart.svg';
import bookmarkImageActive from '../../assets/img/bookmark-active.svg';
import likeImageActive from '../../assets/img/heart-active.svg';
import placeholder from '../../assets/img/placeholder.jpg';

import '../../sass/components/Cards/card.scss';
import Loading from '../Loading/Loading';

const ImageCard = ({ img = {} }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  const [
    onDownloadHandler,
    onLikeImageHandler,
    onBookmarkImageHandler,
    onRemoveLikeHandler,
    onRemoveBookmarkHandler,
    liked,
    bookmarked,
    socialLoading,
  ] = useSocialEvents(img);

  const onViewFullHandler = () => {
    history.push(`/photo?id=${img.id}`);
  };

  const onLoadHandler = (e) => {
    e.target.classList.add('card__img--loaded');
    setLoading(false);
  };

  return (
    <div className='card'>
      <div className='card-img-wrapper'>
        {loading ? (
          <div className='card-img-overlay card-img-overlay--loading'>
            <LoadingDotsCircle />
            <img className='card__img' src={placeholder} alt='placeholder' />
          </div>
        ) : (
          <div className='card-img-overlay' onClick={onViewFullHandler}></div>
        )}
        <img
          onLoad={onLoadHandler}
          className='card__img'
          src={`${img.urls.raw}&w=512&ar=3:4&fit=crop`}
          alt={img.alt_description ? img.alt_description : 'img'}
          crossOrigin='anonymous'
        />
      </div>
      <div className='card-user'>
        <div className='card-user-actions'>
          {!socialLoading ? (
            <>
              <img
                className='card-user-actions__action'
                src={!liked ? likeImage : likeImageActive}
                alt='like'
                onClick={!liked ? onLikeImageHandler : onRemoveLikeHandler}
              />
              <img
                className='card-user-actions__action'
                src={downSvg}
                alt='download'
                onClick={onDownloadHandler}
              />
              <img
                className='card-user-actions__action'
                src={!bookmarked ? bookmarkImage : bookmarkImageActive}
                alt='download'
                onClick={
                  !bookmarked ? onBookmarkImageHandler : onRemoveBookmarkHandler
                }
              />
            </>
          ) : (
            <Loading maxWidth='128px' className='loading-socials' />
          )}
        </div>
        <a href={img.user.links.html}>
          <img
            className='card-user__img --mt-small'
            src={img.user.profile_image.medium}
            alt={img.user.first_name}
            crossOrigin='anonymous'
          />
        </a>
        <p className='text text--color-gray text--center --mt-small --w-100 text--overflow-ellipsis'>
          Photo by
          <br />
          <a
            className='text--color-gray text--decoration-underline text--hover-black'
            href={img.user.links.html}
            rel='noreferrer'
            target='_blank'>
            {`@${img.user.username}`}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
