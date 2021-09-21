import React, { useState } from "react";
import { useEffect } from "react";
import ImageCard from "../components/Cards/ImageCard";

import { getNewPhotos } from "../helpers/Unsplash/getimages";

const NewImagesPage = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getNewPhotos(18, 1).then((val) => setImages(val));
  }, []);
  return (
    <>
      <div className='container --w-100 --center'>
        <div className='container --w-75 --gap-1 --mt-large --mb-large --center-row --padding-regular --warp'>
          {images.map((img) => (
            <ImageCard key={img.id} img={img} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NewImagesPage;
