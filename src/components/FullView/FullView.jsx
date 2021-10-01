import React, { memo } from "react";

import { useGetImageWithLocation } from "../../hooks/useGetImageWithLocation";

import LoadingDotsCircle from "../Loading/LoadingDotsCircle";
import { downloadImage } from "../../helpers/Unsplash/getimages";

import downSvg from "../../assets/img/download.svg";
import bookmarkImage from "../../assets/img/bookmark.svg";
import likeImage from "../../assets/img/heart.svg";

import "../../sass/components/FullView/fullview.scss";
import { useState } from "react";
import LoadingDotsLine from "../Loading/LoadingDotsLine";

const FullView = () => {
  const [loading, setLoading] = useState(true);
  const img = useGetImageWithLocation();
  const onDownloadHandler = async () => {
    downloadImage(img);
  };
  const onLoadHandler = (e) => {
    e.target.classList.add("fullview-content__image--loaded");
    setLoading(false);
  };
  return (
    <div className='container --center-horizontal'>
      <div className='fullview-content --mb-regular --mt-regular'>
        {!img ? (
          <LoadingDotsLine />
        ) : (
          <>
            {loading && <LoadingDotsCircle />}
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
                {`@${img?.user.username ? img.user.username : "user"}`}
              </a>
            </div>
            <img
              onLoad={onLoadHandler}
              className='fullview-content__image'
              src={`${img?.urls.raw}&w=1024`}
              alt={img?.alt_description ? img?.alt_description : "img"}
              crossOrigin='anonymous'
            />
            <div className='fullview-content-actions'>
              <img
                className='fullview-content-actions__action'
                src={likeImage}
                alt='Like'
              />
              <img
                onClick={onDownloadHandler}
                className='fullview-content-actions__action'
                src={downSvg}
                alt='Download'
              />
              <img
                className='fullview-content-actions__action'
                src={bookmarkImage}
                alt='Bookmark'
              />
            </div>
            <span className='fullview-content-divisor' />
          </>
        )}
      </div>
    </div>
  );
};

export default memo(FullView);
