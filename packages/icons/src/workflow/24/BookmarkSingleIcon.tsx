import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const BookmarkSingleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m24.075 35.275 11.252 11.253c.373.379.673.234.673-.3V5.2A1.2 1.2 0 0 0 34.8 4H13.214a1.2 1.2 0 0 0-1.2 1.2L12 46.265c0 .548.314.694.7.337Z" />
            </svg>
        );
    },
);
