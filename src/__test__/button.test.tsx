import { render } from "@testing-library/react";
import Button from "../components-shared/button";

describe("Button component", () => {
  it("should render button", () => {
    const { getByTestId } = render(<Button />);
    const button = getByTestId("button");
    const buttonContent = getByTestId("button-content");
    expect(button).toBeTruthy();
    expect(buttonContent).toBeTruthy();
  });
});
