import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import queryString from "query-string";
import { getImage } from "../helpers/Unsplash/getimages";
import { useCallback } from "react";

export const useGetImageWithLocation = () => {
  const [img, setImg] = useState();
  const location = useLocation();
  const { id = "" } = queryString.parse(location.search);
  const GetImages = useCallback((id) => getImage(id), []);
  useEffect(() => {
    GetImages(id)
      .then((val) => setImg(val))
      .catch(() => {
        setImg(null);
      });
  }, [GetImages, id]);
  return img;
};
