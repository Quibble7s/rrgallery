import React from "react";

import { Provider } from "react-redux";
import { store } from "./helpers/store";
import MainRouter from "./routes/MainRouter";

function App() {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
}

export default App;
