// External Imports
import { forwardRef, HTMLAttributes } from "react";

// Local Imports
import { cn } from "../../lib/utils/cn";

export interface ElementProps extends HTMLAttributes<HTMLDivElement> {}

export const Element = forwardRef<HTMLDivElement, ElementProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("bg-brand-4 size-12 rounded-xl", className)}
        {...props}
      />
    );
  },
);
Element.displayName = "Element";
