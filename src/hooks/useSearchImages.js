import { useCallback } from "react";
import { useEffect, useState } from "react";
import { searchPhotos } from "../helpers/Unsplash/getimages";

export const useSearchNewImages = (keywords, page) => {
  const [[images, pages], setImages] = useState([null, null]);
  const SearchPhotos = useCallback((k, p) => searchPhotos(k, p), []);
  useEffect(() => {
    SearchPhotos(keywords, page)
      .then((val) => {
        setImages([val[0], val[1]]);
      })
      .catch(() => {
        setImages([null, null]);
      });
    return () => {
      setImages([null, null]);
    };
  }, [keywords, page]);
  return [images, pages];
};
