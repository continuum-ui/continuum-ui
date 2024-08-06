import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const ViewListIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="8" rx="1" ry="1" width="8" x="2" y="2" />
                <rect height="4" rx=".5" ry=".5" width="22" x="12" y="4" />
                <rect height="4" rx=".5" ry=".5" width="22" x="12" y="16" />
                <rect height="4" rx=".5" ry=".5" width="22" x="12" y="28" />
                <rect height="8" rx="1" ry="1" width="8" x="2" y="14" />
                <rect height="8" rx="1" ry="1" width="8" x="2" y="26" />
            </svg>
        );
    },
);
