import { useCallback } from "react";
import { useEffect, useState } from "react";
import { getNewPhotos } from "../helpers/Unsplash/getimages";

export const useGetNewImages = (page) => {
  const [response, setData] = useState(null);
  const GetNewPhotos = useCallback((page) => getNewPhotos(page), []);
  useEffect(() => {
    GetNewPhotos(page)
      .then((val) => setData({ data: val[0], nTotal: val[1] }))
      .catch(() => {
        setData(null);
      });
    return () => {
      setData(null);
    };
  }, [GetNewPhotos, page]);

  return [response];
};
