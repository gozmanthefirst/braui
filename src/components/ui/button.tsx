// External Imports
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

// Local Imports
import { cn } from "../../lib/utils/cn";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-4 disabled:pointer-events-none disabled:opacity-70",
  {
    variants: {
      variant: {
        brand: "bg-brand-4 text-background shadow-sm trigger:bg-brand-4/90",
        white:
          "bg-white text-black shadow-sm trigger:bg-white/90 focus-visible:outline-white",
        black:
          "bg-neutral-950 text-white shadow-sm trigger:bg-neutral-950/90 focus-visible:outline-neutral-950",
        secondary:
          "bg-neutral-800 text-brand-4 shadow-sm trigger:bg-neutral-800/90 focus-visible:outline-neutral-800",
        grayed:
          "bg-neutral-600 text-foreground shadow-sm trigger:bg-neutral-600/90 focus-visible:outline-neutral-600",
        outline:
          "border border-brand-5 bg-inherit text-brand-4 shadow-xs trigger:bg-brand-4/10 trigger:border-brand-4",
        ghost:
          "border-none bg-inherit text-neutral-200 trigger:text-neutral-100 focus-visible:outline-hidden focus-visible:outline-0 focus-visible:outline-offset-0",
      },
      size: {
        default: "h-10 px-8 py-2",
        xs: "h-7 rounded-md px-3 text-xs",
        sm: "h-8 rounded-lg px-4 text-[13px]",
        lg: "h-12 rounded-xl px-12",
        xl: "h-14 rounded-md px-12 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "brand",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
