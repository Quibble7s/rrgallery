import React from "react";

import { useGetNewImages } from "../hooks/useGetNewImages";

import ImageCard from "../components/Cards/ImageCard";
import LoadingDotsLine from "../components/Loading/LoadingDotsLine";

const HomePage = () => {
  const [response] = useGetNewImages();
  console.log("loaded");
  return (
    <>
      <div className='container --w-100 --center'>
        <div className='container --w-75 --gap-1 --center-row --padding-regular --warp --mt-large'>
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

export default HomePage;
