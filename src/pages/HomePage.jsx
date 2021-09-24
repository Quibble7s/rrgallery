import React, { useState } from "react";
import { useEffect } from "react";

import { getNewPhotos } from "../helpers/Unsplash/getimages";

import ImageCard from "../components/Cards/ImageCard";
import LoadingBall from "../components/Loading/LoadingBall";

const HomePage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getNewPhotos(18, 1).then((val) => setImages(val));
    setLoading(false);
  }, []);
  return (
    <>
      <div className='container --w-100 --center'>
        <div className='container --w-75 --gap-1 --center-row --padding-regular --warp'>
          {loading ? (
            <LoadingBall />
          ) : (
            images.map((img) => <ImageCard key={img.id} img={img} />)
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
