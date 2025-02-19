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
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`button ${`button--${variant}`} ${`button--size-${size}`} ${className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
