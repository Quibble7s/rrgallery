import {
  doc,
  getFirestore,
  setDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore";

const firestoreDb = getFirestore();

export const addUser = async (uid) => {
  const user = await getDoc(doc(firestoreDb, `users/${uid}`));
  if (!user.exists()) {
    await setDoc(doc(firestoreDb, `users/${uid}`), {
      likes: [],
      bookmarks: [],
      configuration: {
        preferences: ["1024px", "512px"],
        visibility: ["N", "N", "N"],
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

export const addLikes = async (uid, id) => {
  const prevLikes = [];
  await getLikes(uid).then((val) => {
    prevLikes.push(...val);
  });
  if (!prevLikes.includes(id)) {
    await updateDoc(doc(firestoreDb, `users/${uid}`), {
      likes: [...prevLikes, id],
    });
  }
};

export const removeLike = async (uid, id) => {
  const updatedLikes = [];
  await getLikes(uid).then((val) => {
    const update = val.filter((item) => item !== id);
    updatedLikes.push(...update);
  });
  await updateDoc(doc(firestoreDb, `users/${uid}`), {
    likes: [...updatedLikes],
  });
};

export const addBookmarks = async (uid, id) => {
  const prevBookmarks = [];
  await getBookmarks(uid).then((val) => {
    prevBookmarks.push(...val);
  });
  if (!prevBookmarks.includes(id)) {
    await updateDoc(doc(firestoreDb, `users/${uid}`), {
      bookmarks: [...prevBookmarks, id],
    });
  }
};

export const removeBookmark = async (uid, id) => {
  const updatedBookmarks = [];
  await getBookmarks(uid).then((val) => {
    const update = val.filter((item) => item !== id);
    updatedBookmarks.push(...update);
  });
  await updateDoc(doc(firestoreDb, `users/${uid}`), {
    bookmarks: [...updatedBookmarks],
  });
};
