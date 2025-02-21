import React from "react";
import { ComponentProps } from "react";
import { useInputBarContext } from "./input-bar-context";

type InputBarInputProps = ComponentProps<"input">;

const InputBarInput: React.FC<InputBarInputProps> = ({ ...props }) => {
  const { variant } = useInputBarContext();

  return (
    <input
      {...props}
      className={`input input--${variant} ${props.className}`}
      aria-label="input"
      aria-labelledby="input-label"
      data-testid="input"
      spellCheck={false}
    />
  );
};

export default InputBarInput;
