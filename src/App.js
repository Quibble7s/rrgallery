import React from "react";

import { Provider } from "react-redux";
import { store } from "./helpers/store";

function App() {
  return <Provider store={store}></Provider>;
}

export default App;
