import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const GraphProfitCurveIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="4" x="20" y="14" />
                <rect height="4" rx="1" ry="1" width="4" x="12" y="14" />
                <rect height="4" rx="1" ry="1" width="4" x="4" y="14" />
                <rect height="4" rx="1" ry="1" width="4" x="28" y="22" />
                <rect height="4" rx="1" ry="1" width="4" x="28" y="38" />
                <rect height="4" rx="1" ry="1" width="4" x="28" y="30" />
                <path d="M5.034 4.009A1.023 1.023 0 0 0 4 5.021v2a1 1 0 0 0 .991.988C15.342 8.19 22.745 11.223 28 15.6V17a1 1 0 0 0 1 1h1.543c6.512 6.909 8.858 16.075 9.349 23.077a.985.985 0 0 0 .989.923h2a1 1 0 0 0 1.007-1.053C42.938 26.813 35.1 4.508 5.034 4.009Z" />
            </svg>
        );
    },
);
