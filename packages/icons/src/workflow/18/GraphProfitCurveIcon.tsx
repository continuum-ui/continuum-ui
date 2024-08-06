import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const GraphProfitCurveIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="36"
                viewBox="0 0 36 36"
                width="36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M2.513 2.006A.51.51 0 0 0 2 2.514v1a.5.5 0 0 0 .492.493A28.07 28.07 0 0 1 22.036 12H20v2h3.89a30.937 30.937 0 0 1 7.1 19.512.494.494 0 0 0 .493.49h1a.508.508 0 0 0 .507-.512C32.745 16.791 20.308 2.28 2.513 2.006ZM22 28h2v4h-2z" />
                <path d="M22 22h2v4h-2zM22 16h2v4h-2zM14 12h4v2h-4zM8 12h4v2H8zM2 12h4v2H2z" />
            </svg>
        );
    },
);
