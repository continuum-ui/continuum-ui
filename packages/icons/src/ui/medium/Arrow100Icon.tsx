import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const Arrow100Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 10"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M9.7 4.387 6.623 1.262a.875.875 0 1 0-1.247 1.226l1.61 1.637H.925a.875.875 0 0 0 0 1.75h6.062l-1.61 1.637a.875.875 0 1 0 1.247 1.226l3.075-3.125a.874.874 0 0 0 0-1.226z" />
            </svg>
        );
    },
);
