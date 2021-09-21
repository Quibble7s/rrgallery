import { searchTypes } from "../Types/searchTypes";

export const SearchReducer = (state = {}, action) => {
  switch (action.type) {
    case searchTypes.search:
      return action.payload;
    case searchTypes.invalid:
      return {};
    default:
      return state;
  }
};
