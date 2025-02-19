interface LogoProps {
  variant?: "default" | "small";
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = "small", className }) => {
  return variant === "small" ? (
    <h1 className={`logo ${className}`}>
      <span>+</span>jt
    </h1>
  ) : (
    <h1 className={`logo ${className}`}>
      <span>+</span>job tracker
    </h1>
  );
};

export default Logo;
