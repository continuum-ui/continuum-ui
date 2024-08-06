import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const TargetedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 4a19.978 19.978 0 0 0-5.209.709l1.625 1.641a5.176 5.176 0 0 1 1.507 3.656v.165a14.117 14.117 0 1 1-11.752 11.752h-.166a5.165 5.165 0 0 1-3.656-1.508l-1.64-1.624A19.989 19.989 0 1 0 24 4Z" />
                <path d="M25.685 17.213a5.993 5.993 0 0 1-8.472 8.472 7 7 0 1 0 8.472-8.472Z" />
                <path d="M8.37 1.05 6.178 6.178 1.05 8.37a.6.6 0 0 0-.186.98l8.3 8.224a1.2 1.2 0 0 0 .847.349l5.09.007 4.8 4.8a2 2 0 0 0 2.828-2.83l-4.8-4.8-.007-5.09a1.2 1.2 0 0 0-.349-.847L9.35.864a.6.6 0 0 0-.98.186Z" />
            </svg>
        );
    },
);
