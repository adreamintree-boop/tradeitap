import { Globe } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "light";
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="grid h-9 w-9 place-items-center rounded-xl gradient-purple text-primary-foreground shadow-float">
        <Globe className="h-5 w-5" strokeWidth={2.5} />
      </span>
      <span
        className={cn(
          "font-display text-xl font-bold tracking-tight",
          variant === "light" ? "text-navy-foreground" : "text-foreground",
        )}
      >
        Trade<span className="text-primary">It</span>
      </span>
    </div>
  );
}

export function PartnerButton({
  className,
  variant = "primary",
  size = "lg",
  children = "Become a Partner",
}: {
  className?: string;
  variant?: "primary" | "navy" | "light";
  size?: "lg" | "md";
  children?: React.ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
  const sizes = {
    lg: "h-13 px-8 text-base",
    md: "h-11 px-6 text-sm",
  };
  const variants = {
    primary:
      "gradient-purple text-primary-foreground shadow-float hover:-translate-y-0.5 hover:shadow-elevated",
    navy: "bg-navy text-navy-foreground shadow-float hover:-translate-y-0.5 hover:bg-navy/90",
    light:
      "bg-background text-foreground border border-border shadow-sm hover:-translate-y-0.5 hover:bg-muted",
  };
  return (
    <Link
      to="/signup"
      search={{ type: "partner" }}
      className={cn(base, sizes[size], variants[variant], className)}
    >
      {children}
    </Link>
  );
}
