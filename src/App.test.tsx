import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { screen } from "@testing-library/react";
import App from "./App";

let container: HTMLDivElement = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders medals data", async () => {
  const fakeResponse = {
    "NOC": "Netherlands",
    "Sport": "Skating",
    "Medals": "12"
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeResponse)
    })
  );

  await act(async () => {
    render(<App />, container);
  });

  console.log(container.textContent);
  //expect(container.querySelector("Overview")).toBe('Netherlands');
  
  //global.fetch.mockRestore();
});


