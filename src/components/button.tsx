import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <button {...props} className={className}>
      {props.children}
    </button>
  );
};

export default Button;
