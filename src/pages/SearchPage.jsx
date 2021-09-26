import React from "react";
import { useSelector } from "react-redux";

import ImageCard from "../components/Cards/ImageCard";

const SearchPage = () => {
  const { images } = useSelector((state) => state);
  return (
    <>
      <div className='container --w-100 --center'>
        <div className='container --w-75 --gap-1 --center-row --padding-regular --warp --mt-large'>
          {images.data?.map((img) => (
            <ImageCard key={img.id} img={img} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
