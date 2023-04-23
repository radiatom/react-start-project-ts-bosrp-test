import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./reactRedux/redux";
import "@testing-library/jest-dom";

it("renders without crashing App", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
