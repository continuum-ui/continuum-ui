import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const RotateCCWIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="26.747" cy="29.988" r="1.1" />
                <circle cx="30.347" cy="26.121" r="1.1" />
                <circle cx="21.992" cy="32.269" r="1.1" />
                <circle cx="16.796" cy="32.756" r="1.1" />
                <circle cx="11.712" cy="31.419" r="1.1" />
                <circle cx="7.367" cy="28.392" r="1.1" />
                <circle cx="4.454" cy="24.202" r="1.1" />
                <path d="M18 1.8A15.948 15.948 0 0 0 6.727 6.461L3.3 4.1a.5.5 0 0 0-.781.463l1.048 10.221 9.9-2.679a.5.5 0 0 0 .153-.894l-3.346-2.3a13.533 13.533 0 0 1 8.7-3.1c7.18 0 13.019 5.457 13.019 12.084v.028a14.832 14.832 0 0 1-.344 3.006 1.005 1.005 0 1 0 1.963.4A16 16 0 0 0 18 1.8Z" />
            </svg>
        );
    },
);
