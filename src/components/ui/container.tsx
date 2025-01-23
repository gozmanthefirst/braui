// External Imports
import { HTMLAttributes, Ref } from "react";

// Local Imports
import { cn } from "@/lib/utils/cn";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
}

export const Container = ({ className, ref, ...props }: ContainerProps) => {
  return (
    <div
      ref={ref}
      className={cn("mx-auto w-full max-w-2xl px-4", className)}
      {...props}
    />
  );
};
