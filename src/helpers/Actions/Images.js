import { ImageTypes } from "../Types/ImagesTypes";

const k = "client_id=lirba6ghVGu1uzhSgzE5RVKs80hfdQcRBJTJFvx34d8";
const apiRoute = "https://api.unsplash.com/";
const perPage = 18;

const images = (type, images = [], page, totalPages) => {
  return {
    type: type,
    payload: {
      data: images,
      page: page,
      totalPages: totalPages,
    },
  };
};

const clear = () => {
  return {
    type: ImageTypes.clear,
  };
};

export const ClearImages = () => {
  return (dispatch) => {
    dispatch(clear());
  };
};

export const GetHomeImages = (page) => {
  return async (dispatch) => {
    const res = await fetch(
      `${apiRoute}/photos/?per_page=${perPage}&page=${page}&${k}`,
    );
    let nTotal = 0;
    for (let pair of res.headers.entries()) {
      if (pair[0] === "x-total") {
        nTotal = parseInt(pair[1]);
      }
    }
    nTotal /= perPage;
    const data = await res.json();
    dispatch(images(ImageTypes.home, data, page, Math.round(nTotal)));
  };
};

export const GetSearchImages = (keywords, page) => {
  return async (dispatch) => {
    const res = await fetch(
      `${apiRoute}/search/photos/?query=${encodeURI(
        keywords,
      )}&per_page=${perPage}&page=${page}&${k}`,
    );
    const data = await res.json();
    dispatch(images(ImageTypes.search, data.results, page, data.total_pages));
  };
};
