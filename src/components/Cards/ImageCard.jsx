import React from "react";

import zoomImage from "../../assets/img/zoom.svg";
import downloadImage from "../../assets/img/download.svg";
import bookmarkImage from "../../assets/img/bookmark.svg";

import "../../sass/components/Cards/card.scss";

const ImageCard = ({ img = {} }) => {
  return (
    <div className='card'>
      <div className='card-img-wrapper'>
        <div className='card-img-overlay'>
          <img
            className='card-img-overlay__zoom'
            src={zoomImage}
            alt='see full image'
          />
        </div>
        <img
          onLoad={(e) => e.target.classList.add("card__img--loaded")}
          className='card__img'
          src={`${img.urls.raw}&w=512&ar=3:4&fit=crop`}
          alt={img.alt_description ? img.alt_description : "img"}
          crossOrigin='anonymous'
        />
      </div>
      <div className='card-user'>
        <div className='card-user-actions'>
          <img
            className='card-user-actions__download'
            src={downloadImage}
            alt='download'
          />
          <img
            className='card-user-actions__bookmark'
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
            className='text--color-black text--decoration-underline text--hover-primary'
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
