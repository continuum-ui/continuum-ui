import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const Chevron300Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M10.639 7a.95.95 0 0 0-.278-.671l-.003-.002-5.33-5.33a.95.95 0 0 0-1.342 1.342L8.346 7l-4.661 4.66a.95.95 0 1 0 1.342 1.343l5.33-5.33.003-.001A.95.95 0 0 0 10.64 7z" />
            </svg>
        );
    },
);
