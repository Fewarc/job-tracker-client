import { ReactNode } from "react";
import { useFormContext } from "./form-context";

interface FormHeaderProps {
  children: ReactNode;
}

const FormHeader: React.FC<FormHeaderProps> = ({ children }) => {
  const {} = useFormContext();

  return <div className="form__header">{children}</div>;
};

export default FormHeader;
