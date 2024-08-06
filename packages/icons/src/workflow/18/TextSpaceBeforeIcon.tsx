import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const TextSpaceBeforeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="22" x="12" y="24" />
                <rect height="4" rx="1" ry="1" width="22" x="12" y="18" />
                <rect height="4" rx="1" ry="1" width="22" x="12" y="30" />
                <path d="M2 2.672a.5.5 0 0 1 .866-.341L8 8l-5.134 5.669A.5.5 0 0 1 2 13.328ZM33 2H13a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-1 10H14V4h18Z" />
            </svg>
        );
    },
);
