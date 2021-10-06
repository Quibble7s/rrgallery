import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { app } from './firebase-config';

const storage = getStorage(app);

export const updateProfilePicture = (img, ext, uid) => {
  const imageRef = ref(storage, `images/${uid}.${ext}`);
  uploadBytes(imageRef, img);
};
