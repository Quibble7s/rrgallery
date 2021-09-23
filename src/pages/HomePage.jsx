import React, { useState } from "react";
import { useEffect } from "react";

import { getNewPhotos } from "../helpers/Unsplash/getimages";

import ImageCard from "../components/Cards/ImageCard";

const HomePage = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getNewPhotos(18, 1).then((val) => setImages(val));
  }, []);
  return (
    <>
      <div className='container --w-100 --center'>
        <div className='container --w-75 --gap-1 --center-row --padding-regular --warp'>
          {images.map((img) => (
            <ImageCard key={img.id} img={img} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
