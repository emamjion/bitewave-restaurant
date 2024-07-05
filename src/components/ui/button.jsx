import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded text-base font-semibold ring-offset-white transition-colors ",
  {
    variants: {
      variant: {
        default: "bg-accent text-white hover:bg-accent-hover duration-300",
        primary: 'bg-[#1c1c22] text-white',
        outline: 'border border-accent bg-transparent text-accent hover:bg-accent  hover:text-white duration-300'
        
      },
      size: {
        default: "h-[44px] px-[25px]",
        md: "h-[48px] px-[25px]",
        lg: "h-[56px] px-[30px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants };

