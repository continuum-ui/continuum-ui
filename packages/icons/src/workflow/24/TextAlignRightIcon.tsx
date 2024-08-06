import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const TextAlignRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="38" x="6" y="6" />
                <rect height="4" rx="1" ry="1" width="30" x="14" y="16" />
                <rect height="4" rx="1" ry="1" width="38" x="6" y="26" />
                <rect height="4" rx="1" ry="1" width="30" x="14" y="36" />
            </svg>
        );
    },
);
