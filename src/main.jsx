import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import UserContext from "./utils/userContext.js";

import { Provider } from "react-redux";
import { store } from "./utils/appStore.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <UserContext.Provider value={{ loggedInUser: "ram" }}>
        <App />
      </UserContext.Provider>
    </Provider>
  </StrictMode>
);
