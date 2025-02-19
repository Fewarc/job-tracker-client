import { ComponentProps, ReactNode } from "react";

interface InputProps extends ComponentProps<"input"> {
  containerClassName?: string;
  variant?: "default" | "white-border" | "primary-border";
  error?: ReactNode;
  inputLabel?: ReactNode;
}

const Input: React.FC<InputProps> = ({
  containerClassName,
  variant,
  inputLabel,
  error,
  ...props
}) => {
  return (
    <div
      className={`input__container ${containerClassName}`}
      data-testid="input-container"
    >
      {!!inputLabel && (
        <div className="input__label" data-testid="input-label">
          {inputLabel}
        </div>
      )}
      <input
        {...props}
        className={`input input--${variant} ${props.className}`}
        data-testid="input"
      />
      {!!error && <p className="input__error">{error}</p>}
    </div>
  );
};

export default Input;
