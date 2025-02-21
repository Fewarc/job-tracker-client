import React from "react";
import { ReactNode } from "react";
import { useFormContext } from "./form-context";

interface FormFooterProps {
  children: ReactNode;
}

const FormFooter: React.FC<FormFooterProps> = ({ children }) => {
  useFormContext();

  return <div className="form__footer">{children}</div>;
};

export default FormFooter;
