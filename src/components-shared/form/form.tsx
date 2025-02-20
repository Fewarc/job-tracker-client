import { ComponentProps } from "react";
import FormContext from "./form-context";
import FormHeader from "./form-header";
import FormFooter from "./form-footer";
import FormFields from "./form-fields";

interface FormProps extends ComponentProps<"form"> {}

function Form({ children, ...props }: FormProps) {
  return (
    <FormContext.Provider value={{ contextExists: true }}>
      <form className="form" {...props}>
        {children}
      </form>
    </FormContext.Provider>
  );
}

Form.Header = FormHeader;
Form.Fields = FormFields;
Form.Footer = FormFooter;

export default Form;
