import { createContext, useContext } from "react";
import { InputBarVariant } from "../../types";

type InputBarContextType = {
  variant: InputBarVariant;
};

const InputBarContext = createContext<InputBarContextType | null>(null);

export const useInputBarContext = () => {
  const context = useContext(InputBarContext);

  if (!context) {
    throw new Error(
      "InputBar.* must be rendered as a child of InputBar component."
    );
  }

  return context;
};

export default InputBarContext;
