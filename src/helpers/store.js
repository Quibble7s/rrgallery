import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import { AuthReducer } from "./Reducers/AuthReducer";
import { ImagesReducer } from "./Reducers/ImagesReducer";
import { SearchReducer } from "./Reducers/SearchReducer";

const reducers = combineReducers({
  auth: AuthReducer,
  search: SearchReducer,
  images: ImagesReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(ReduxThunk)),
);
