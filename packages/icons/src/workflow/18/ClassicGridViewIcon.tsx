import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const ClassicGridViewIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="14" rx="1" ry="1" width="14" x="2" y="2" />
                <rect height="14" rx="1" ry="1" width="14" x="20" y="2" />
                <rect height="14" rx="1" ry="1" width="14" x="2" y="20" />
                <rect height="14" rx="1" ry="1" width="14" x="20" y="20" />
            </svg>
        );
    },
);
