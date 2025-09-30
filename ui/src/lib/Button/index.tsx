import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { Typography } from "../Typography";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: "primary" | "secondary";
  variant?: "contained" | "text";
}

export const Button: FC<ButtonProps> = ({
  children,
  className = "",
  color = "primary",
  variant = "contained",
  ...props
}) => {
  const baseClasses =
    "px-4 py-2 rounded-lg transition-transform transform font-semibold";

  // Стили для contained
  const containedClasses =
    color === "primary"
      ? "bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-sm"
      : "bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-sm";

  // Стили для text
  const textClasses =
    color === "primary"
      ? "text-blue-600 bg-transparent hover:bg-blue-500/10 shadow-none"
      : "text-red-600 bg-transparent hover:bg-red-500/10 shadow-none";

  const variantClasses =
    variant === "contained" ? containedClasses : textClasses;

  return (
    <button
      {...props}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      <Typography.Body>{children}</Typography.Body>
    </button>
  );
};
