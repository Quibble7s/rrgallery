import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { searchPhotos } from "../helpers/Unsplash/getimages";

export const useSearchNewImages = () => {
  console.log("called");
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
  return images;
};
