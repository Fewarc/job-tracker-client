import { ComponentProps, ReactNode } from "react";

interface InputProps extends ComponentProps<"input"> {
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
    </div>
  );
};

export default Input;
