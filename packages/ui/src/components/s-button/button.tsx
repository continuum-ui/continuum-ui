import * as React from "react";
import { cn } from "@continuum-ui/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import "./button.css";
import "./button-theme.css";

/*
    @reference https://github.com/adobe/spectrum-css/blob/main/components/button/index.css
*/
const buttonVariants = cva("spectrum-Button", {
    variants: {
        variant: {
            accent: "spectrum-Button--accent",
            negative: "spectrum-Button--negative",
            primary: "spectrum-Button--primary",
            secondary: "spectrum-Button--secondary",
            white: "spectrum-Button--staticWhite",
            black: "spectrum-Button--staticBlack",
            link: "text-primary underline-offset-4 hover:underline",
            icon: "spectrum-Button--iconOnly",
        },
        fill: {
            fill: "spectrum-Button--fill",
            outline: "spectrum-Button--outline",
        },
        size: {
            sm: "spectrum-Button--sizeS",
            md: "spectrum-Button--sizeM",
            lg: "spectrum-Button--sizeL",
            xl: "spectrum-Button--sizeXL",
        },
    },
    defaultVariants: {
        variant: "accent",
        fill: "fill",
        size: "md",
    },
});

export interface SButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const SButton = React.forwardRef<HTMLButtonElement, SButtonProps>(
    ({ className, variant, fill, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp className={cn(buttonVariants({ variant, fill, size, className }))} ref={ref} {...props}>
                {typeof props.children === "string" ? <span>{props.children}</span> : props.children}
            </Comp>
        );
    },
);
SButton.displayName = "SButton";

export { SButton, buttonVariants };
