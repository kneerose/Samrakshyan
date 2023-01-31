import React from "react";
import cn from "classnames";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex rounded-xl text-center lg:text-lg text-sm px-4 py-3",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
