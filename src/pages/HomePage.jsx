import React from "react";

import { useGetNewImages } from "../hooks/useGetNewImages";

import ImageCard from "../components/Cards/ImageCard";
import LoadingBall from "../components/Loading/LoadingBall";

const HomePage = () => {
  const [response, loading] = useGetNewImages();
  return (
    <>
      <div className='container --w-100 --center'>
        <div className='container --w-75 --gap-1 --center-row --padding-regular --warp --mt-large'>
          {loading ? (
            <LoadingBall />
          ) : (
            response.data.map((img) => <ImageCard key={img.id} img={img} />)
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
