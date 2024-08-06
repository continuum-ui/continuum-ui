import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const LightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="24" cy="24" r="11.9" />
                <rect height="6" rx="1" ry="1" width="3.6" x="22.2" />
                <rect height="6" rx="1" ry="1" width="3.6" x="22.2" y="42" />
                <rect height="3.6" rx="1" ry="1" width="6" y="22.2" />
                <rect height="3.6" rx="1" ry="1" width="6" x="42" y="22.2" />
                <rect height="3.6" rx="1" ry="1" transform="rotate(-45 39.02 9.02)" width="6" x="36.02" y="7.22" />
                <rect height="3.6" rx="1" ry="1" transform="rotate(-45 9.02 39.02)" width="6" x="6.02" y="37.22" />
                <rect height="6" rx="1" ry="1" transform="rotate(-45 9 9)" width="3.6" x="7.2" y="6" />
                <rect height="6" rx="1" ry="1" transform="rotate(-45 38.98 38.98)" width="3.6" x="37.18" y="35.98" />
            </svg>
        );
    },
);
