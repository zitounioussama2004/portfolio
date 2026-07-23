import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../../utils/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const variantClasses = {
  primary:
    "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20",

  secondary: "bg-slate-800 hover:bg-slate-700 text-white",

  outline: "border border-blue-500 text-blue-400 hover:bg-blue-500/10",

  ghost: "text-slate-300 hover:bg-slate-800",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",

  md: "px-6 py-3 text-base",

  lg: "px-8 py-4 text-lg",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;