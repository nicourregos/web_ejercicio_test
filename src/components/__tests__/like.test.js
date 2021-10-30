import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

import Like from "../like";

let container;

//helpers
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(<Like />, container);
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing likes component", () => {
  //verificando el default
  it("0 likes by default", () => {
    const p = container.querySelector("p");
    expect(p.textContent).toBe("Likes: 0");
  });

  //verificando el like
  it("like increments number", () => {
    const p = container.querySelector("p");
    const increment = container.querySelector("#increment");
    act(() => {
      increment.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(p.textContent).toBe("Likes: 1");
    act(() => {
      increment.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(p.textContent).toBe("Likes: 2");
  });

  //verificando el dislike
  it("unlike decrements number", () => {
    const p = container.querySelector("p");
    const decrement = container.querySelector("#decrement");
    act(() => {
      decrement.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(p.textContent).toBe("Likes: -1");
    act(() => {
      decrement.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(p.textContent).toBe("Likes: -2");
  });
});
