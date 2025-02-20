import React from "react";
import { render } from "@testing-library/react";
import InputBar from "../src/components-shared/input-bar/input-bar";

// TODO: more tests, add axe (WCAG)
describe("Input component", () => {
  it("renders input conatiner", () => {
    const { getByTestId } = render(<InputBar />);
    const inputContainer = getByTestId("input-container");

    expect(inputContainer).toBeTruthy();
  });

  it("renders input", () => {
    const { getByTestId } = render(<InputBar />);
    const input = getByTestId("input");

    expect(input).toBeTruthy();
  });

  it("correctyl renders input label", () => {
    const INPUT_LABEL_CONTENT = "label";
    const { getByTestId } = render(
      <InputBar inputLabel={INPUT_LABEL_CONTENT} />
    );
    const inputLabel = getByTestId("input-label");

    expect(inputLabel).toBeTruthy();
    expect(inputLabel).toHaveTextContent(INPUT_LABEL_CONTENT);
  });
});
