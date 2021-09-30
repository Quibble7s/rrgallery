import React, { memo } from "react";

import { useGetNewImages } from "../hooks/useGetNewImages";

import ImageCard from "../components/Cards/ImageCard";
import LoadingDotsLine from "../components/Loading/LoadingDotsLine";

const HomePage = () => {
  const [response] = useGetNewImages();
  return (
    <>
      <div className='container --w-100 --center'>
        <div className='container --w-75 --gap-2 --center-row --padding-regular --warp --mt-large'>
          {!response?.data ? (
            <LoadingDotsLine />
          ) : (
            response.data.map((img) => <ImageCard key={img.id} img={img} />)
          )}
        </div>
      </div>
    </>
  );
};

export default memo(HomePage);
