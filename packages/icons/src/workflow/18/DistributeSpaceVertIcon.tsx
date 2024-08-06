import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const DistributeSpaceVertIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="10" rx="1" ry="1" width="24" x="10" y="22" />
                <rect height="12" rx="1" ry="1" width="16" x="12" y="4" />
                <path d="M7.5 16a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H4v-3.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V14H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H2v6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H2v3.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V24h3.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H4v-6Z" />
            </svg>
        );
    },
);
