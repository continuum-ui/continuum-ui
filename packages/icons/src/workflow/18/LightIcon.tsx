import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const LightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="18" cy="18" r="7.9" />
                <rect height="6" rx=".5" ry=".5" width="3.6" x="16.2" />
                <rect height="6" rx=".5" ry=".5" width="3.6" x="16.2" y="30" />
                <rect height="3.6" rx=".5" ry=".5" width="6" y="16.2" />
                <rect height="3.6" rx=".5" ry=".5" width="6" x="30" y="16.2" />
                <rect height="3.6" rx=".5" ry=".5" transform="rotate(-45 29.02 7.02)" width="6" x="26.02" y="5.22" />
                <rect height="3.6" rx=".5" ry=".5" transform="rotate(-45 7.02 29.02)" width="6" x="4.02" y="27.22" />
                <rect height="6" rx=".5" ry=".5" transform="rotate(-45 7 7)" width="3.6" x="5.2" y="4" />
                <rect height="6" rx=".5" ry=".5" transform="rotate(-45 28.98 28.98)" width="3.6" x="27.18" y="25.98" />
            </svg>
        );
    },
);
