import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  icon?: ReactNode;
  className?: string;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2";

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-gold text-ink hover:bg-gold-dark hover:text-porcelain",
  secondary:
    "border border-ink/20 bg-transparent text-ink hover:border-ink hover:bg-ink/5",
  ghost: "bg-transparent text-ink/80 hover:text-gold-dark",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
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
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  );
}