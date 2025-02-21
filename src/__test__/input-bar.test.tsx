import React from "react";
import { fireEvent, render } from "@testing-library/react";
import InputBar from "../components-shared/input-bar/input-bar";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("Input component", () => {
  it("renders entire input bar", async () => {
    const { getByTestId } = render(
      <InputBar>
        <InputBar.Label>Label</InputBar.Label>
        <InputBar.Input />
        <InputBar.Error>Error</InputBar.Error>
      </InputBar>
    );
    const inputContainer = getByTestId("input-container");
    const input = getByTestId("input");
    const inputLabel = getByTestId("input-label");
    const inputError = getByTestId("input-error");

    expect(inputContainer).toBeTruthy();
    expect(input).toBeTruthy();
    expect(inputLabel).toBeTruthy();
    expect(inputError).toBeTruthy();
  });

  it("correctyl renders input label", () => {
    const INPUT_LABEL_CONTENT = "label";
    const { getByTestId } = render(
      <InputBar>
        <InputBar.Label>{INPUT_LABEL_CONTENT}</InputBar.Label>
      </InputBar>
    );
    const inputLabel = getByTestId("input-label");

    expect(inputLabel).toBeTruthy();
    expect(inputLabel).toHaveTextContent(INPUT_LABEL_CONTENT);
  });

  it("correctyl renders input error", () => {
    const INPUT_ERROR_CONTENT = "error";
    const { getByTestId } = render(
      <InputBar>
        <InputBar.Error>{INPUT_ERROR_CONTENT}</InputBar.Error>
      </InputBar>
    );
    const inputError = getByTestId("input-error");

    expect(inputError).toBeTruthy();
    expect(inputError).toHaveTextContent(INPUT_ERROR_CONTENT);
  });

  it("should meet accesibility standards", async () => {
    const { getByTestId } = render(
      <InputBar>
        <InputBar.Label>Label</InputBar.Label>
        <InputBar.Input />
        <InputBar.Error>Error</InputBar.Error>
      </InputBar>
    );
    const inputContainer = getByTestId("input-container");

    expect(await axe(inputContainer)).toHaveNoViolations();
  });

  it("should allow to type text into input", async () => {
    const INPUT_TEXT = "text";
    const { getByTestId } = render(
      <InputBar>
        <InputBar.Label>Label</InputBar.Label>
        <InputBar.Input />
        <InputBar.Error>Error</InputBar.Error>
      </InputBar>
    );

    const input = getByTestId("input");

    expect(input).toHaveValue("");

    fireEvent.change(input, { target: { value: INPUT_TEXT } });

    expect(input).toHaveValue(INPUT_TEXT);
  });
});
