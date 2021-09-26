const k = "client_id=lirba6ghVGu1uzhSgzE5RVKs80hfdQcRBJTJFvx34d8";
const apiRoute = "https://api.unsplash.com/";

export const getNewPhotos = async (perPage, page) => {
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
  return [data, Math.round(nTotal)];
};

export const searchPhotos = async (perPage, page, keywords) => {
  const res = await fetch(
    `${apiRoute}/search/photos/?query=${encodeURI(
      keywords,
    )}&per_page=${perPage}&page=${page}&${k}`,
  );
  let nTotal = 0;
  for (let pair of res.headers.entries()) {
    if (pair[0] === "x-total") {
      nTotal = parseInt(pair[1]);
    }
  }
  nTotal /= perPage;
  const data = await res.json();
  return [data, Math.round(nTotal)];
};