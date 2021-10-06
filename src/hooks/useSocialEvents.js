import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import queryString from 'query-string';

import {
  addBookmarks,
  addLikes,
  getBookmarks,
  getLikes,
  removeBookmark,
  removeLike,
} from '../helpers/Firebase/database';

import { downloadImage } from '../helpers/Unsplash/getimages';

export const useSocialEvents = (img) => {
  const { auth } = useSelector((state) => state);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const isLiked = async () => {
      const likes = [];
      const ids = [];
      await getLikes(auth.uid).then((val) => {
        likes.push(...val);
      });
      for (let i = 0; i < likes.length; i++) {
        const like = likes[i];
        const { id = '' } = queryString.parse(like);
        ids.push(id);
      }
      setLiked(ids.includes(img?.id));
    };
    const isBookmarked = async () => {
      const bookmarks = [];
      const ids = [];
      await getBookmarks(auth.uid).then((val) => {
        bookmarks.push(...val);
      });
      for (let i = 0; i < bookmarks.length; i++) {
        const bookmark = bookmarks[i];
        const { id = '' } = queryString.parse(bookmark);
        ids.push(id);
      }
      setBookmarked(ids.includes(img?.id));
    };
    isLiked();
    isBookmarked();
    return () => {
      setLiked(false);
      setBookmarked(false);
    };
  }, [auth.uid, img?.urls.raw, img?.id]);

  const onDownloadHandler = () => {
    downloadImage(img);
  };

  const onLikeImageHandler = async () => {
    if (auth.loged) {
      setLoading(true);
      await addLikes(auth.uid, `${img?.urls.raw}&id=${img?.id}`);
      await setLiked(true);
      setLoading(false);
    }
  };

  const onBookmarkImageHandler = async () => {
    if (auth.loged) {
      setLoading(true);
      await addBookmarks(auth.uid, `${img?.urls.raw}&id=${img?.id}`);
      await setBookmarked(true);
      setLoading(false);
    }
  };

  const onRemoveLikeHandler = async () => {
    if (auth.loged) {
      setLoading(true);
      await removeLike(auth.uid, img?.id);
      await setLiked(false);
      setLoading(false);
    }
  };

  const onRemoveBookmarkHandler = async () => {
    if (auth.loged) {
      setLoading(true);
      removeBookmark(auth.uid, img?.id);
      setBookmarked(false);
      setLoading(false);
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
    loading,
  ];
};
