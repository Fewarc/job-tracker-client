import { ReactNode } from "react";
import { useInputBarContext } from "./input-bar-context";

interface InputBarLabelProps {
  children?: ReactNode;
}

const InputbarLabel: React.FC<InputBarLabelProps> = ({ children }) => {
  const {} = useInputBarContext();

  return (
    <div className="input__label" data-testid="input-label">
      {children}
    </div>
  );
};

export default InputbarLabel;
