import React, { ReactNode } from "react";
import { useInputBarContext } from "./input-bar-context";

interface InputBarLabelProps {
  children?: ReactNode;
}

const InputbarLabel: React.FC<InputBarLabelProps> = ({ children }) => {
  useInputBarContext();

  return (
    <label
      id="input-label"
      className="input__label"
      aria-label="input-label"
      data-testid="input-label"
    >
      {children}
    </label>
  );
};

export default InputbarLabel;
