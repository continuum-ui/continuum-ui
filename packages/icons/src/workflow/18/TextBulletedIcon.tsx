import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const TextBulletedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="6" rx="2.8" ry="2.8" width="6" x="4" y="2" />
                <rect height="6" rx="2.8" ry="2.8" width="6" x="4" y="14" />
                <rect height="6" rx="2.8" ry="2.8" width="6" x="4" y="26" />
                <rect height="4" rx="1" ry="1" width="22" x="12" y="28" />
                <rect height="4" rx="1" ry="1" width="22" x="12" y="16" />
                <rect height="4" rx="1" ry="1" width="22" x="12" y="4" />
            </svg>
        );
    },
);
