import { useEffect, useState } from "react";
import { searchPhotos } from "../helpers/Unsplash/getimages";

export const useSearchNewImages = (keywords, page) => {
  const [[images, pages], setImages] = useState([null, null]);
  useEffect(() => {
    searchPhotos(keywords, page)
      .then((val) => {
        setImages([val[0], val[1]]);
      })
      .catch(() => {
        setImages([null, null]);
      });
  }, []);
  return [images, pages];
};
