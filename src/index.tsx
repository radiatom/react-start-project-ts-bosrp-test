import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import {
  // HashRouter,
  BrowserRouter,
} from "react-router-dom";
import store from "./reactRedux/redux";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <HashRouter>
  //   <Provider store={store}>
  //     <React.StrictMode>
  //       <App />
  //     </React.StrictMode>
  //   </Provider>
  // </HashRouter>
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
