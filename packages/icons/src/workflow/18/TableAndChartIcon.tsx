import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const TableAndChartIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33 20H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V21a1 1 0 0 0-1-1ZM12 32H4v-4h8Zm0-6H4v-4h8Zm20 6H14v-4h18Zm0-6H14v-4h18Z" />
                <rect height="16" rx="1" ry="1" width="8" x="26" y="2" />
                <rect height="10" rx="1" ry="1" width="8" x="14" y="8" />
                <rect height="6" rx="1" ry="1" width="8" x="2" y="12" />
            </svg>
        );
    },
);
