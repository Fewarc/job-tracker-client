import { ReactNode } from "react";
import InputBarContext from "./input-bar-context";
import { InputBarVariant } from "../../types";
import InputbarLabel from "./input-bar-label";
import InputBarError from "./input-bar-error";
import InputBarInput from "./input-bar-input";

interface InputBarProps {
  children: ReactNode;
  variant?: InputBarVariant;
  className?: string;
}

function InputBar({ children, variant = "default", className }: InputBarProps) {
  return (
    <InputBarContext.Provider value={{ variant }}>
      <div
        className={`input__container ${className}`}
        data-testid="input-container"
      >
        {children}
      </div>
    </InputBarContext.Provider>
  );
}

InputBar.Label = InputbarLabel;
InputBar.Error = InputBarError;
InputBar.Input = InputBarInput;

export default InputBar;
