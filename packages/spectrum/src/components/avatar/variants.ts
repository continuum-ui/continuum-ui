import { cva } from "class-variance-authority";

export const avatarVariants = cva("spectrum-Avatar", {
    variants: {
        size: {
            xs: "spectrum-Avatar--size50",
            sm: "spectrum-Avatar--size75",
            md: "spectrum-Avatar--size100",
            lg: "spectrum-Avatar--size200",
            xl: "spectrum-Avatar--size300",
            "2xl": "spectrum-Avatar--size400",
            "3xl": "spectrum-Avatar--size500",
            "4xl": "spectrum-Avatar--size600",
            "5xl": "spectrum-Avatar--size700",
        },
        disabled: {
            true: "is-disabled"
        }
    },
    defaultVariants: {
        size: "md",
    },
});

