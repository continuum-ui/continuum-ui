import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const JourneyDataIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M29 28c-3.866 0-7-1.253-7-2.8v-4c0 1.546 3.134 3.066 7 3.066s7-1.52 7-3.066v4c0 1.547-3.134 2.8-7 2.8Zm7 5.179v-5.158c0 1.546-3.134 2.8-7 2.8s-7-1.253-7-2.8v5.159c0 1.546 3.134 2.8 7 2.8s7-1.254 7-2.801Zm0-15.068c0-1.546-3.195-2.626-7.061-2.626S22 16.565 22 18.111s3.134 2.8 7 2.8 7-1.253 7-2.8Z" />
                <path d="M20 28a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h4.1a5 5 0 1 0 0-2H20a4 4 0 0 0-4 4v6h-4.1a5 5 0 1 0 0 2H16v8a4 4 0 0 0 4 4Zm9-24a3 3 0 1 1-3 3 3 3 0 0 1 3-3ZM7 20a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" />
            </svg>
        );
    },
);
