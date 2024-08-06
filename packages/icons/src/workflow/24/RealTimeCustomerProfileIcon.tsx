import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const RealTimeCustomerProfileIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M24 2a22 22 0 1 0 22 22A22 22 0 0 0 24 2Zm13.155 34.246a13.317 13.317 0 0 0-6.998-3.116 1.692 1.692 0 0 1-1.464-1.697v-2.45a1.7 1.7 0 0 1 .431-1.092 12.93 12.93 0 0 0 2.951-8.07c0-6.109-3.246-9.523-8.135-9.523s-8.228 3.541-8.228 9.523a13.074 13.074 0 0 0 3.084 8.074 1.695 1.695 0 0 1 .43 1.092v2.437a1.682 1.682 0 0 1-1.475 1.696 13.29 13.29 0 0 0-7 3.021 18 18 0 1 1 26.404.105Z" />
            </svg>
        );
    },
);
