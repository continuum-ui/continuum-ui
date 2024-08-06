import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const TagUnderlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx=".5" ry=".5" width="28" x="10" y="40" />
                <path d="M31.334 4a.666.666 0 0 0-.667.667v18s.643 8.266-6.667 8.266c-7.278 0-6.666-8.266-6.666-8.266v-18A.667.667 0 0 0 16.667 4h-4a.667.667 0 0 0-.667.667v18C12 24.549 11.812 36 24 36s12-12.016 12-13.365V4.667A.666.666 0 0 0 35.334 4Z" />
            </svg>
        );
    },
);
