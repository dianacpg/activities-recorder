import React from "react";
import ReactDOM from "react-dom/client";
// Redux
import { Provider } from "react-redux";
// Components
import App from "./App.tsx";
// Store
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
