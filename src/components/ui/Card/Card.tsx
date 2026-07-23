import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../../utils/cn";

type CardVariant = "default" | "glass" | "outlined";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: CardVariant;
}

const variants = {
  default: "bg-slate-900 border border-slate-800 shadow-xl",

  glass: "bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl",

  outlined: "border border-slate-700 bg-transparent",
};

const Card = ({
  children,
  variant = "glass",
  className,
  ...props
}: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
