import { cva } from "class-variance-authority";

/**
 * @reference https://opensource.adobe.com/spectrum-css/badge.html
 */
export const badgeVariants = cva(
    "spectrum-Badge",
    {
        variants: {
            variant: {
                neutral: "spectrum-Badge--neutral",
                accent: "spectrum-Badge--accent",
                informative: "spectrum-Badge--informative",
                positive: "spectrum-Badge--positive",
                negative: "spectrum-Badge--negative",
                // non-semantic
                gray: "spectrum-Badge--gray",
                red: "spectrum-Badge--red",
                orange: "spectrum-Badge--orange",
                yellow: "spectrum-Badge--yellow",
                chartreuse: "spectrum-Badge--chartreuse",
                celery: "spectrum-Badge--celery",
                green: "spectrum-Badge--green",
                seafoam: "spectrum-Badge--seafoam",
                cyan: "spectrum-Badge--cyan",
                blue: "spectrum-Badge--blue",
                indigo: "spectrum-Badge--indigo",
                purple: "spectrum-Badge--purple",
                fuchsia: "spectrum-Badge--fuchsia",
                magenta: "spectrum-Badge--magenta",
            },
            size: {
                sm: "spectrum-Badge--sizeS",
                md: "spectrum-Badge--sizeM",
                lg: "spectrum-Badge--sizeL",
                xl: "spectrum-Badge--sizeXL"
            },
        },
        defaultVariants: {
            variant: "neutral",
            size: "md",
        },
    },
);

