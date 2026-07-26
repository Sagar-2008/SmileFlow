import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  className?: string;
  disabled?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2.5 font-medium tracking-wide whitespace-nowrap transition-all duration-200 active:scale-[0.98] cursor-pointer rounded-theme";

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-primary text-white shadow-md hover:brightness-105 border border-primary/20",
  secondary:
    "bg-secondary text-white shadow-md hover:brightness-105 border border-secondary/20",
  accent:
    "bg-accent text-white shadow-md hover:brightness-105 border border-accent/20",
  outline:
    "border border-primary/30 bg-transparent text-primary hover:bg-primary/5",
  ghost:
    "bg-transparent text-text-main hover:bg-primary/5",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  children,
  href,
  external,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  icon,
  className,
  disabled = false,
}: ButtonProps) {
  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
      >
        <span>{children}</span>
        {icon}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      <span>{children}</span>
      {icon}
    </button>
  );
}