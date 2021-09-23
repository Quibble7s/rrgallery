import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { searchPhotos } from "../helpers/Unsplash/getimages";

import ImageCard from "../components/Cards/ImageCard";

const SearchPage = () => {
  const [images, setImages] = useState([]);
  console.log(images);
  const { search } = useSelector((state) => state);
  useEffect(() => {
    if (search !== {}) {
      searchPhotos(search.perPage, search.page, search.keywords).then((val) => {
        setImages(val.results);
      });
    }
  }, [search.keywords, search.page]);
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

export default SearchPage;
