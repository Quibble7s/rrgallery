const k = 'client_id=lirba6ghVGu1uzhSgzE5RVKs80hfdQcRBJTJFvx34d8';
const apiRoute = 'https://api.unsplash.com';
const perPage = 18;

export const getNewPhotos = async (page) => {
  const res = await fetch(
    `${apiRoute}/photos/?per_page=${perPage}&page=${page}&${k}`,
  );
  let nTotal = 0;
  for (let pair of res.headers.entries()) {
    if (pair[0] === 'x-total') {
      nTotal = parseInt(pair[1]);
    }
  }
  nTotal /= perPage;
  const data = await res.json();
  return [data, Math.round(nTotal)];
};

export const searchPhotos = async (keywords, page) => {
  const res = await fetch(
    `${apiRoute}/search/photos/?query=${encodeURI(
      keywords,
    )}&per_page=${perPage}&page=${page}&${k}`,
  );
  const data = await res.json();
  return [data.results, data.total_pages];
};

export const getImage = async (id) => {
  const res = await fetch(`${apiRoute}/photos/${id}?${k}`);
  const data = await res.json();
  return data;
};

export const downloadImage = async (img) => {
  const downloadLink = `${img.links.download_location}&${k}`;
  await fetch(downloadLink)
    .then(() => {
      const a = document.createElement('a');
      a.href = `${img.links.download}?force=true`;
      a.download = `${img.id}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    })
    .catch((err) => {
      console.log(err);
    });
};
