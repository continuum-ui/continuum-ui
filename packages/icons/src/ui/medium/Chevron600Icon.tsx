import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const Chevron600Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M5.04 17.863a1.073 1.073 0 0 1-.759-1.832L11.313 9 4.28 1.969A1.073 1.073 0 0 1 5.8.45l7.79 7.79a1.073 1.073 0 0 1 0 1.518l-7.79 7.79a1.07 1.07 0 0 1-.759.314z" />
            </svg>
        );
    },
);
