import { ComponentProps } from "react";
import { useInputBarContext } from "./input-bar-context";

interface InputBarInputProps extends ComponentProps<"input"> {}

const InputBarInput: React.FC<InputBarInputProps> = ({ ...props }) => {
  const { variant } = useInputBarContext();

  return (
    <input
      {...props}
      className={`input input--${variant} ${props.className}`}
      data-testid="input"
      spellCheck={false}
    />
  );
};

export default InputBarInput;
