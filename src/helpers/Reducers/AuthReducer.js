import { authTypes } from "../Types/authTypes";

export const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case authTypes.login:
      return action.payload;
    case authTypes.logout:
      return {};
    default:
      return state;
  }
};
