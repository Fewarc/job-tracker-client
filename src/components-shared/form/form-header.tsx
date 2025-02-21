import React from "react";
import { ReactNode } from "react";
import { useFormContext } from "./form-context";

interface FormHeaderProps {
  children: ReactNode;
}

const FormHeader: React.FC<FormHeaderProps> = ({ children }) => {
  useFormContext();

  return <div className="form__header">{children}</div>;
};

export default FormHeader;
