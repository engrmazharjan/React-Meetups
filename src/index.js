import "./index.css";

import App from "./App";
import { FavoritesContextProvider } from "./store/favorites-context";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <FavoritesContextProvider>
    <Router>
      <App />
    </Router>
  </FavoritesContextProvider>,
  document.getElementById("root")
);
