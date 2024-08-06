import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const GraphStreamIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 0 48 48"
                width="48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M32 21.667c-2.792 0-4.8-1.38-6.747-2.713-1.964-1.349-3.818-2.62-6.586-2.62-2.284 0-3.922.865-6 1.961A25.168 25.168 0 0 1 4 21.378v5.232a54.253 54.253 0 0 1 5.724 1.1A36.056 36.056 0 0 0 18.667 29a25.02 25.02 0 0 0 6.733-1.347 24.028 24.028 0 0 1 6.6-1.32 28.081 28.081 0 0 1 6.464 1.136c1.719.431 3.588.875 5.536 1.178v-9.388a37.278 37.278 0 0 0-5.644 1.262A22.156 22.156 0 0 1 32 21.667ZM32 12c-6.6 0-7.142-8-13.333-8C13.368 4 11.07 11.8 4 14.047V18a22.272 22.272 0 0 0 7.114-2.659C13.4 14.141 15.558 13 18.667 13c3.8 0 6.283 1.7 8.471 3.2 1.667 1.143 3.1 2.13 4.862 2.13a19.373 19.373 0 0 0 5.442-1.016A39.341 39.341 0 0 1 44 15.9V7.188C39.222 8.527 37.325 12 32 12Zm0 17.667a22.012 22.012 0 0 0-5.656 1.182 27.4 27.4 0 0 1-7.677 1.484 39.358 39.358 0 0 1-9.711-1.377c-1.631-.386-3.229-.744-4.956-.988v3.906c5.053 1.352 8.733 4.793 14.667 4.793C23.28 38.667 28.086 36 32 36c3.293 0 5.7 3.763 12 4.961v-8.947a61.232 61.232 0 0 1-6.347-1.31A26.052 26.052 0 0 0 32 29.667Z" />
            </svg>
        );
    },
);
