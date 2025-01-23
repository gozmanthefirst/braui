// External Imports
import { HTMLAttributes, Ref } from "react";

// Local Imports
import { cn } from "@/lib/utils/cn";
import { instrumentSerif } from "@/styles/fonts";

export interface ContainerProps extends HTMLAttributes<HTMLSpanElement> {
  ref?: Ref<HTMLSpanElement>;
}

export const BrandedText = ({
  className,
  children,
  ref,
  ...props
}: ContainerProps) => {
  return (
    <span
      ref={ref}
      className={cn(
        "text-brand-4 italic",
        instrumentSerif.className,
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
