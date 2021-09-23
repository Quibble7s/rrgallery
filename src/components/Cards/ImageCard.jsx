import React from "react";

import "../../sass/components/Cards/card.scss";

const ImageCard = ({ img = {} }) => {
  return (
    <div className='card'>
      <img
        className='card__img'
        src={`${img.urls.raw}&w=512&ar=3:4&fit=crop`}
        alt={img.alt_description}
      />
      <div className='card-user'>
        <a href={img.user.links.html}>
          <img
            className='card-user__img --mt-small'
            src={img.user.profile_image.large}
            alt=''
          />
        </a>
        <p className='text text--color-gray text--center --mt-small'>
          Photo by{" @"}
          <a
            className='text--color-gray text--decoration-underline'
            href={img.user.links.html}
            target='_blank'>
            {img.user.username}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
