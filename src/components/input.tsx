import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
  variant?: "default" | "white-border" | "primary-border";
  inputLabel?: ReactNode;
}

const Input: React.FC<InputProps> = ({
  containerClassName,
  variant,
  inputLabel,
  ...props
}) => {
  return (
    <div className={`input__container ${containerClassName}`}>
      {!!inputLabel && <div className="input__label">{inputLabel}</div>}
      <input
        {...props}
        className={`input input--${variant} ${props.className}`}
      />
    </div>
  );
};

export default Input;
