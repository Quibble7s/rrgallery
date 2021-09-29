import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import queryString from "query-string";
import { getImage } from "../helpers/Unsplash/getimages";

export const useGetImageWithLocation = () => {
  const [img, setImg] = useState(null);
  const location = useLocation();
  const { id = "" } = queryString.parse(location.search);
  useEffect(() => {
    getImage(id).then((val) => setImg(val));
  }, []);
  return img;
};
