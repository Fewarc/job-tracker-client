import React from "react";
import { LoaderCircle } from "lucide-react";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  variant?:
    | "primary"
    | "secondary"
    | "link"
    | "icon"
    | "destructive"
    | "outline";
  size?: "small" | "medium" | "large";
  loading?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  loading = false,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`button ${`button--${variant}`} ${`button--size-${size}`} ${className}`}
      data-testid="button"
    >
      <div
        className={`button__content ${loading && "button__content--loading"}`}
        data-testid="button-content"
      >
        {props.children}
      </div>
      {loading && (
        <LoaderCircle
          className="button__loading__spinner"
          data-testid="button-loader"
        />
      )}
    </button>
  );
};

export default Button;
