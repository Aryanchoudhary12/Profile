import React from "react";
import {cn} from "@/lib/utils";
function Button({ variant, size, className, children }) {
  switch (variant) {
    case "primary":
      variant = "bg-button text-background hover:bg-blue-600";
      break;
    case "outline":
      variant =
        "backdrop-blur-md border transition-colors overflow-hidden bg-gradient-to-t border-r-0 duration-200 whitespace-nowrap from-muted/10 to-button/15 text-foreground hover:text-secondary border-button/20 after:inset-0 after:absolute after:rounded-[inherit] after:bg-gradient-to-r after:from-transparent after:from-40% after:via-button/15 after:to-muted/25 after:via-70% after:shadow-[hsl(var(--foreground)/0.15)_0px_1px_0px_inset] z-20 before:absolute before:w-[5px] hover:before:translate-x-full before:transition-all before:duration-200 before:h-[60%] before:bg-button before:right-0 before:rounded-l before:shadow-[-2px_0_10px_var(--button)] z-10";
      break;
  }
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-5 py-2.5 text-sm",
    large: "px-6 py-3 text-lg",
  }

  return (
    <button className={cn(`btn ${variant} ${sizeClasses[size] || sizeClasses.medium} rounded-sm`, className)}>
      {children}
    </button>
  );
}

export default Button;
