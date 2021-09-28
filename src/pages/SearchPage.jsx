import React from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

import ImageCard from "../components/Cards/ImageCard";
import { useSearchNewImages } from "../hooks/useSearchImages";

const SearchPage = () => {
  const location = useLocation();
  const { q = "", p = "" } = queryString.parse(location.search);
  const [images, pages] = useSearchNewImages(q, p);

  return (
    <>
      <div className='container --w-100 --center'>
        <div className='container --w-75 --gap-1 --center-row --padding-regular --warp --mt-large'>
          {images?.map((img) => (
            <ImageCard key={img.id} img={img} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
