import { useEffect, useState } from "react";
import { getNewPhotos } from "../helpers/Unsplash/getimages";

export const useGetNewImages = () => {
  const [response, setData] = useState({ data: [], nTotal: 0 });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getNewPhotos(18, 1).then((val) =>
      setData({ data: val[0], nTotal: val[1] }),
    );
    setLoading(false);
  }, []);

  return [response, loading];
};
