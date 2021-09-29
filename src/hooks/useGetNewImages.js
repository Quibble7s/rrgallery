import { useEffect, useState } from "react";
import { getNewPhotos } from "../helpers/Unsplash/getimages";

export const useGetNewImages = () => {
  const [response, setData] = useState();
  useEffect(() => {
    getNewPhotos(18, 1)
      .then((val) => setData({ data: val[0], nTotal: val[1] }))
      .catch(() => {
        setData(null);
      });
  }, []);

  return [response];
};
