import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const TableColumnAddLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M9 18.1a8.9 8.9 0 1 0 8.9 8.9A8.9 8.9 0 0 0 9 18.1Zm5 9.4a.5.5 0 0 1-.5.5H10v3.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V28H4.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H8v-3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V26h3.5a.5.5 0 0 1 .5.5Z" />
                <path d="M33 2H3a1 1 0 0 0-1 1v13.893a12.252 12.252 0 0 1 12-1.124V14h8v8h-1.769a12.154 12.154 0 0 1 .685 2H22v8h-1.769a12.236 12.236 0 0 1-1.124 2H33a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM22 12h-8V4h8Zm10 20h-8v-8h8Zm0-10h-8v-8h8Zm0-10h-8V4h8Z" />
            </svg>
        );
    },
);
