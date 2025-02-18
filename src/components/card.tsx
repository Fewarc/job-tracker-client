import { ReactNode } from "react";

interface CardProps {
  className?: string;
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
