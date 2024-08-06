import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const TextSpaceBeforeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="28" x="16" y="40" />
                <rect height="4" rx="1" ry="1" width="28" x="16" y="32" />
                <rect height="4" rx="1" ry="1" width="28" x="16" y="24" />
                <path d="M43 4H17a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm-3 12H20V8h20ZM4.864 2.315A.5.5 0 0 0 4 2.659v18.682a.5.5 0 0 0 .864.343L14 12Z" />
            </svg>
        );
    },
);
