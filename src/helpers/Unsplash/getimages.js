const k = "client_id=lirba6ghVGu1uzhSgzE5RVKs80hfdQcRBJTJFvx34d8";
const apiRoute = "https://api.unsplash.com/";

export const getNewPhotos = async (perPage, page) => {
  const res = await fetch(
    `${apiRoute}/photos/?per_page=${perPage}&page=${page}&${k}`,
  );
  const data = await res.json();
  return data;
};

export const searchPhotos = async (perPage, page, keywords) => {
  const res = await fetch(
    `${apiRoute}/search/photos/?query=${encodeURI(
      keywords,
    )}&per_page=${perPage}&page=${page}&${k}`,
  );
  const data = await res.json();
  return data;
};
