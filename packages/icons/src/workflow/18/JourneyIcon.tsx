import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const JourneyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M29 22.2a2.8 2.8 0 1 1-2.8 2.8 2.8 2.8 0 0 1 2.8-2.8Zm0-4.2a7 7 0 0 0-7 7c0 3.866 7 11 7 11s7-7.134 7-11a7 7 0 0 0-7-7Z" />
                <path d="M20.775 28H20a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h4.1a5 5 0 1 0 0-2H20a4 4 0 0 0-4 4v6h-4.1a5 5 0 1 0 0 2H16v8a4 4 0 0 0 4 4h1.825a19.039 19.039 0 0 1-1.05-2ZM29 4a3 3 0 1 1-3 3 3 3 0 0 1 3-3ZM7 20a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" />
            </svg>
        );
    },
);
