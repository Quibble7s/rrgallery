import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { app } from './firebase-config';

const storage = getStorage(app);

export const updateProfilePicture = async (imgBuffer, ext, uid) => {
  const imageRef = ref(storage, `images/${uid}.${ext}`);
  let downloadURL = null;
  await uploadBytes(imageRef, imgBuffer).then(async (result) => {
    await getDownloadURL(result.ref).then((url) => {
      downloadURL = url;
    });
  });
  return downloadURL;
};
