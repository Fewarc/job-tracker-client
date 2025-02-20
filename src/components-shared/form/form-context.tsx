import { createContext, useContext } from "react";
import { ContextExists } from "../../types";

const FormContext = createContext<ContextExists | null>(null);

export const useFormContext = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("Form.* must be rendered as a child of Form component.");
  }

  return context;
};

export default FormContext;
