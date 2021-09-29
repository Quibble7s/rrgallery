import { authTypes } from "../Types/authTypes";

export const AuthReducer = (state = null, action) => {
  switch (action.type) {
    case authTypes.login:
      return action.payload;
    case authTypes.logout:
      return action.payload;
    default:
      return state;
  }
};
