import React, { memo } from 'react';

import { useSocialEvents } from '../../hooks/useSocialEvents';
import { useGetImageWithLocation } from '../../hooks/useGetImageWithLocation';

import LoadingDotsCircle from '../Loading/LoadingDotsCircle';
import LoadingDotsLine from '../Loading/LoadingDotsLine';

import downSvg from '../../assets/img/download.svg';
import bookmarkImage from '../../assets/img/bookmark.svg';
import likeImage from '../../assets/img/heart.svg';
import bookmarkImageActive from '../../assets/img/bookmark-active.svg';
import likeImageActive from '../../assets/img/heart-active.svg';

import '../../sass/components/FullView/fullview.scss';
import Loading from '../Loading/Loading';
import { useGetPreferences } from '../../hooks/useGetPreferences';
import { useSelector } from 'react-redux';
import LoginPopup from '../Popups/LoginPopup';

const FullView = () => {
  const { auth } = useSelector((state) => state);
  const img = useGetImageWithLocation();
  const [userPreferences] = useGetPreferences();

  const [
    onDownloadHandler,
    onLikeImageHandler,
    onBookmarkImageHandler,
    onRemoveLikeHandler,
    onRemoveBookmarkHandler,
    liked,
    bookmarked,
    socialsLoading,
    displayPopup,
    setDisplayPopup,
  ] = useSocialEvents(img);

  const onLoadHandler = (e) => {
    e.target.classList.add('fullview-content__image--loaded');
  };

  return (
    <>
      <LoginPopup active={displayPopup} setDisplayPopup={setDisplayPopup} />
      <div className='container --center-horizontal'>
        <div className='fullview-content --mb-large --mt-large'>
          {!img ? (
            <LoadingDotsLine />
          ) : (
            <>
              <div className='fullview-content-top --mb-small'>
                <a
                  className='card-user__img'
                  href={img?.user.links.html}
                  rel='noreferrer'
                  target='_blank'>
                  <img
                    className='card-user__img'
                    src={img?.user.profile_image.medium}
                    alt={img?.user.first_name}
                    crossOrigin='anonymous'
                  />
                </a>
                <a
                  className='text--color-gray text--decoration-underline text--hover-black'
                  href={img?.user.links.html}
                  rel='noreferrer'
                  target='_blank'>
                  {`@${img?.user.username ? img.user.username : 'user'}`}
                </a>
              </div>
              <img
                onLoad={onLoadHandler}
                className='fullview-content__image'
                src={
                  !auth.loged
                    ? `${img?.urls.raw}&w=1024`
                    : `${img?.urls.raw}&w=${userPreferences[0]}`
                }
                alt={img?.alt_description ? img?.alt_description : 'img'}
                crossOrigin='anonymous'
              />
              <div className='fullview-content-actions'>
                {!socialsLoading ? (
                  <>
                    {' '}
                    <img
                      onClick={
                        !liked ? onLikeImageHandler : onRemoveLikeHandler
                      }
                      className='fullview-content-actions__action'
                      src={!liked ? likeImage : likeImageActive}
                      alt='Like'
                    />
                    <img
                      onClick={onDownloadHandler}
                      className='fullview-content-actions__action'
                      src={downSvg}
                      alt='Download'
                    />
                    <img
                      onClick={
                        !bookmarked
                          ? onBookmarkImageHandler
                          : onRemoveBookmarkHandler
                      }
                      className='fullview-content-actions__action'
                      src={!bookmarked ? bookmarkImage : bookmarkImageActive}
                      alt='Bookmark'
                    />
                  </>
                ) : (
                  <Loading className='loading-socials' maxWidth='128px' />
                )}
              </div>
              <span className='fullview-content-divisor' />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default memo(FullView);
