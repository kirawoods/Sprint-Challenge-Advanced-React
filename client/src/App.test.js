import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import waitForExpect from "wait-for-expect";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders "World Cup Most Searched Players" text', () => {
  const wrapper = render(<App />);
  const hasWorldCupText = wrapper.queryByText(
    /world cup most searched players/i
  );
  expect(hasWorldCupText).toBeInTheDocument();
  console.log(wrapper.debug());
});
