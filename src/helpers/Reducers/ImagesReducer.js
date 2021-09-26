import { ImageTypes } from "../Types/ImagesTypes";

export const ImagesReducer = (state = {}, action) => {
  switch (action.type) {
    case ImageTypes.home:
      return action.payload;
    case ImageTypes.search:
      return action.payload;
    case ImageTypes.clear:
      return {
        data: [],
      };
    default:
      return state;
  }
};
