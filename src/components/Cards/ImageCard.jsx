import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

import LoadingDotsCircle from "../Loading/LoadingDotsCircle";

import { downloadImage } from "../../helpers/Unsplash/getimages";

import downSvg from "../../assets/img/download.svg";
import bookmarkImage from "../../assets/img/bookmark.svg";
import likeImage from "../../assets/img/heart.svg";

import "../../sass/components/Cards/card.scss";

const ImageCard = ({ img = {} }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  const onViewFullHandler = () => {
    history.push(`/photo?id=${img.id}`);
  };

  const onDownloadHandler = () => {
    downloadImage(img);
  };

  const onLoadHandler = (e) => {
    e.target.classList.add("card__img--loaded");
    setLoading(false);
  };

  return (
    <div className='card'>
      <div className='card-img-wrapper'>
        {loading ? (
          <div className='card-img-overlay card-img-overlay--loading'>
            <LoadingDotsCircle />
          </div>
        ) : (
          <div className='card-img-overlay' onClick={onViewFullHandler}></div>
        )}
        <img
          onLoad={onLoadHandler}
          className='card__img'
          src={`${img.urls.raw}&w=512&ar=3:4&fit=crop`}
          alt={img.alt_description ? img.alt_description : "img"}
          crossOrigin='anonymous'
        />
      </div>
      <div className='card-user'>
        <div className='card-user-actions'>
          <img
            className='card-user-actions__action'
            src={likeImage}
            alt='like'
          />
          <img
            className='card-user-actions__action'
            src={downSvg}
            alt='download'
            onClick={onDownloadHandler}
          />
          <img
            className='card-user-actions__action'
            src={bookmarkImage}
            alt='download'
          />
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
