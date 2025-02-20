import { ReactNode } from "react";
import { useFormContext } from "./form-context";

interface FormFieldsProps {
  children: ReactNode;
}

const FormFields: React.FC<FormFieldsProps> = ({ children }) => {
  const {} = useFormContext();

  return <div className="form__fields">{children}</div>;
};

export default FormFields;
