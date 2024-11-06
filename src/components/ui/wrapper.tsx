// External Imports
import { forwardRef, HTMLAttributes } from "react";

// Local Imports
import { cn } from "../../lib/utils/cn";

export interface WrapperProps extends HTMLAttributes<HTMLDivElement> {}

export const Wrapper = forwardRef<HTMLDivElement, WrapperProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "container grid h-full w-full place-items-center",
          className
        )}
        {...props}
      />
    );
  }
);
Wrapper.displayName = "Wrapper";
