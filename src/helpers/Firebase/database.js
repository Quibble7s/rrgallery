import {
  doc,
  getFirestore,
  setDoc,
  updateDoc,
  getDoc,
} from 'firebase/firestore';

import queryString from 'query-string';

const firestoreDb = getFirestore();

export const addUser = async (uid) => {
  const user = await getDoc(doc(firestoreDb, `users/${uid}`));
  if (!user.exists()) {
    await setDoc(doc(firestoreDb, `users/${uid}`), {
      likes: [],
      bookmarks: [],
      configuration: {
        preferences: ['1024', '512'],
        visibility: ['N', 'N', 'N'],
      },
    });
  }
};

export const getUser = async (uid) => {
  const user = await getDoc(doc(firestoreDb, `users/${uid}`));
  if (user.exists()) {
    return user.data();
  }
};

export const getLikes = async (uid) => {
  const user = await getDoc(doc(firestoreDb, `users/${uid}`));
  let data = null;
  if (user.exists()) {
    data = await user.data().likes;
  }
  return data ? [...data] : [];
};

export const getBookmarks = async (uid) => {
  const user = await getDoc(doc(firestoreDb, `users/${uid}`));
  let data = null;
  if (user.exists()) {
    data = await user.data().bookmarks;
  }
  return data ? [...data] : [];
};

export const addLikes = async (uid, url) => {
  const prevLikes = [];
  await getLikes(uid).then((val) => {
    prevLikes.push(...val);
  });
  if (!prevLikes.includes(url)) {
    await updateDoc(doc(firestoreDb, `users/${uid}`), {
      likes: [...prevLikes, url],
    });
  }
};

export const removeLike = async (uid, imgID) => {
  const updatedLikes = [];
  await getLikes(uid).then((val) => {
    const update = val.filter((item) => {
      const { id = '' } = queryString.parse(item);
      return id !== imgID;
    });
    updatedLikes.push(...update);
  });
  await updateDoc(doc(firestoreDb, `users/${uid}`), {
    likes: [...updatedLikes],
  });
};

export const addBookmarks = async (uid, url) => {
  const prevBookmarks = [];
  await getBookmarks(uid).then((val) => {
    prevBookmarks.push(...val);
  });
  if (!prevBookmarks.includes(url)) {
    await updateDoc(doc(firestoreDb, `users/${uid}`), {
      bookmarks: [...prevBookmarks, url],
    });
  }
};

export const removeBookmark = async (uid, imgID) => {
  const updatedBookmarks = [];
  await getBookmarks(uid).then((val) => {
    const update = val.filter((item) => {
      const { id = '' } = queryString.parse(item);
      return id !== imgID;
    });
    updatedBookmarks.push(...update);
  });
  await updateDoc(doc(firestoreDb, `users/${uid}`), {
    bookmarks: [...updatedBookmarks],
  });
};

export const updateProfileConfig = async (uid, configuration = null) => {
  if (configuration) {
    await updateDoc(doc(firestoreDb, `users/${uid}`), configuration);
  }
};
