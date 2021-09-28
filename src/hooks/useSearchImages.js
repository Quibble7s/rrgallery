import { useEffect, useState } from "react";
import { searchPhotos } from "../helpers/Unsplash/getimages";

export const useSearchNewImages = (keywords, page) => {
  const [[images, pages], setImages] = useState([[], 0]);
  useEffect(() => {
    searchPhotos(keywords, page).then((val) => {
      setImages([val[0], val[1]]);
    });
  }, []);
  return [images, pages];
};
