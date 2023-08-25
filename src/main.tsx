import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer />
  </React.StrictMode>
);
