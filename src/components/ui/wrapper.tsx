// External Imports
import { HTMLAttributes, Ref } from "react";

// Local Imports
import { ContainerProps } from "@/components/ui/container";
import { cn } from "../../lib/utils/cn";

export interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
}

export const Wrapper = ({ className, ref, ...props }: ContainerProps) => {
  return (
    <div className="mx-auto max-w-5xl w-full px-4">
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-neutral-800/60 bg-background py-10 shadow-sm md:py-16 overflow-hidden",
          className,
        )}
        {...props}
      />
    </div>
  );
};
