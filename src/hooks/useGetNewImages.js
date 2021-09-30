import { useEffect, useState } from "react";
import { getNewPhotos } from "../helpers/Unsplash/getimages";

export const useGetNewImages = () => {
  const [response, setData] = useState(null);
  useEffect(() => {
    getNewPhotos(18, 1)
      .then((val) => setData({ data: val[0], nTotal: val[1] }))
      .catch(() => {
        setData(null);
      });
    return () => {
      setData(null);
    };
  }, []);

  return [response];
};
