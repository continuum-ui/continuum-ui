import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const AliasIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M29.241 2H12.8a.8.8 0 0 0-.8.806.785.785 0 0 0 .236.56l3.5 3.5a57.07 57.07 0 0 0-5.442 9.691 29.236 29.236 0 0 0-2.174 8.486c-.082.853-.12 1.7-.12 2.536a29.888 29.888 0 0 0 .576 5.753.827.827 0 0 0 1.618.023l.006-.023a25.346 25.346 0 0 1 2.594-6.919 22.717 22.717 0 0 1 4.3-5.429 48.574 48.574 0 0 1 7.33-5.429l4.209 4.209a.785.785 0 0 0 .56.236.8.8 0 0 0 .807-.8V2.759A.807.807 0 0 0 29.241 2Z" />
            </svg>
        );
    },
);
