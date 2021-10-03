import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  addBookmarks,
  addLikes,
  getBookmarks,
  getLikes,
  removeBookmark,
  removeLike,
} from "../helpers/Firebase/database";
import { downloadImage } from "../helpers/Unsplash/getimages";

export const useSocialEvents = (img) => {
  const { auth } = useSelector((state) => state);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const isLiked = async () => {
      const likes = [];
      await getLikes(auth.uid).then((val) => {
        likes.push(...val);
      });
      setLiked(likes.includes(img?.id));
    };
    const isBookmarked = async () => {
      const bookmarks = [];
      await getBookmarks(auth.uid).then((val) => {
        bookmarks.push(...val);
      });
      setBookmarked(bookmarks.includes(img?.id));
    };
    isLiked();
    isBookmarked();
  });

  const onDownloadHandler = () => {
    downloadImage(img);
  };

  const onLikeImageHandler = () => {
    if (auth.loged) {
      addLikes(auth.uid, img?.id);
      setLiked(true);
    }
  };

  const onBookmarkImageHandler = () => {
    if (auth.loged) {
      addBookmarks(auth.uid, img?.id);
      setBookmarked(true);
    }
  };

  const onRemoveLikeHandler = () => {
    if (auth.loged) {
      removeLike(auth.uid, img?.id);
      setLiked(false);
    }
  };

  const onRemoveBookmarkHandler = () => {
    if (auth.loged) {
      removeBookmark(auth.uid, img?.id);
      setBookmarked(false);
    }
  };

  return [
    onDownloadHandler,
    onLikeImageHandler,
    onBookmarkImageHandler,
    onRemoveLikeHandler,
    onRemoveBookmarkHandler,
    liked,
    bookmarked,
  ];
};
