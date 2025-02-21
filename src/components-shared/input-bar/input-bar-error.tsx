import React from "react";
import { useInputBarContext } from "./input-bar-context";

interface InputBarErrorProps {
  children?: string;
  className?: string;
}

const InputBarError: React.FC<InputBarErrorProps> = ({
  children,
  className,
}) => {
  useInputBarContext();

  return (
    !!children && (
      <p
        className={`input__error ${className}`}
        aria-label="input-error"
        data-testid="input-error"
      >
        {children}
      </p>
    )
  );
};

export default InputBarError;
