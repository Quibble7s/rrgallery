import { searchTypes } from "../Types/searchTypes";

export const Search = (perPage, page, keywords) => {
  return (dispatch) => {
    dispatch({
      type: searchTypes.search,
      payload: {
        perPage: perPage,
        page: page,
        keywords: keywords,
      },
    });
  };
};
