import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const InboxIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="2" rx=".5" ry=".5" width="24" x="6" y="4" />
                <rect height="2" rx=".5" ry=".5" width="24" x="6" y="8" />
                <rect height="2" rx=".5" ry=".5" width="24" x="6" y="12" />
                <rect height="2" rx=".5" ry=".5" width="24" x="6" y="16" />
                <path d="M32 10v10h-5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1H4V10H1a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
