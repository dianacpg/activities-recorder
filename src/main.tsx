import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
// Context
import { DialogProvider } from "./components/dialog/DialogContext.tsx";
// Components
import App from "./App.tsx";
// Store
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DialogProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </DialogProvider>
  </React.StrictMode>
);
