import { useInputBarContext } from "./input-bar-context";

interface InputBarErrorProps {
  children?: string;
  className?: string;
}

const InputBarError: React.FC<InputBarErrorProps> = ({
  children,
  className,
}) => {
  const {} = useInputBarContext();

  return (
    !!children && <p className={`input__error ${className}`}>{children}</p>
  );
};

export default InputBarError;
