import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  className?: string;
  disabled?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2.5 rounded-full font-medium tracking-wide whitespace-nowrap transition-all duration-300 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer";

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-pine text-porcelain-50 hover:bg-pine-light hover:shadow-lg hover:shadow-pine/20 border border-pine-light/30",
  gold:
    "bg-gradient-to-r from-gold via-gold-light to-gold text-ink font-semibold shadow-md shadow-gold/20 hover:brightness-105 hover:shadow-gold/40 border border-gold-light/50",
  secondary:
    "bg-porcelain-100 text-ink hover:bg-mist border border-mist-dark/60 hover:border-ink/20",
  outline:
    "border border-pine/20 bg-transparent text-pine hover:border-pine hover:bg-pine/5",
  ghost:
    "bg-transparent text-ink/80 hover:text-gold-dark hover:bg-mist/30",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
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