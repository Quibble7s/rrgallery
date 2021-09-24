import React from "react";

import "../../sass/components/Cards/card.scss";

const ImageCard = ({ img = {} }) => {
  return (
    <div className='card'>
      <img
        className='card__img'
        src={`${img.urls.raw}&w=512&ar=3:4&fit=crop`}
        alt={img.alt_description ? img.alt_description : "img"}
        crossOrigin='anonymous'
      />
      <div className='card-user'>
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
          {" @"}
          <a
            className='text--color-gray text--decoration-underline'
            href={img.user.links.html}
            rel='noreferrer'
            target='_blank'>
            {img.user.username}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
