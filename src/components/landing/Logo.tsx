import { Globe } from "lucide-react";
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
          "font-display text-xl font-700 tracking-tight",
          variant === "light" ? "text-navy-foreground" : "text-foreground",
        )}
      >
        Trade<span className="text-primary">It</span>
      </span>
    </div>
  );
}
