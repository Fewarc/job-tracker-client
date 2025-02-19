import React from "react";
import { render } from "@testing-library/react";
import Input from "../src/components-shared/input";

// TODO: more tests, add axe (WCAG)
describe("Input component", () => {
  it("renders input conatiner", () => {
    const { getByTestId } = render(<Input />);
    const inputContainer = getByTestId("input-container");

    expect(inputContainer).toBeTruthy();
  });

  it("renders input", () => {
    const { getByTestId } = render(<Input />);
    const input = getByTestId("input");

    expect(input).toBeTruthy();
  });

  it("correctyl renders input label", () => {
    const INPUT_LABEL_CONTENT = "label";
    const { getByTestId } = render(<Input inputLabel={INPUT_LABEL_CONTENT} />);
    const inputLabel = getByTestId("input-label");

    expect(inputLabel).toBeTruthy();
    expect(inputLabel).toHaveTextContent(INPUT_LABEL_CONTENT);
  });
});
