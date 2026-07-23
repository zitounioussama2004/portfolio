import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../../utils/cn";

type BadgeVariant =
  | "primary"
  | "success"
  | "warning";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
}

const variants = {
  primary:
    "bg-blue-600/20 text-blue-400 border border-blue-500/30",

  success:
    "bg-green-600/20 text-green-400 border border-green-500/30",

  warning:
    "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
};

const Badge = ({
  children,
  variant = "primary",
  className,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;