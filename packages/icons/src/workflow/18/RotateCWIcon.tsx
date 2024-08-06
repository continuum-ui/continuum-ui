import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const RotateCWIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="9.253" cy="29.988" r="1.1" />
                <circle cx="5.653" cy="26.121" r="1.1" />
                <circle cx="14.008" cy="32.269" r="1.1" />
                <circle cx="19.204" cy="32.756" r="1.1" />
                <circle cx="24.288" cy="31.419" r="1.1" />
                <circle cx="28.633" cy="28.392" r="1.1" />
                <circle cx="31.546" cy="24.202" r="1.1" />
                <path d="M18 1.8a15.948 15.948 0 0 1 11.273 4.66L32.7 4.1a.5.5 0 0 1 .781.463l-1.048 10.221-9.9-2.679a.5.5 0 0 1-.153-.894l3.346-2.3a13.533 13.533 0 0 0-8.7-3.1c-7.18 0-13.019 5.457-13.019 12.084v.028a14.832 14.832 0 0 0 .344 3.006 1.072 1.072 0 0 1-.7 1.254 1.08 1.08 0 0 1-1.262-.856A16 16 0 0 1 18 1.8Z" />
            </svg>
        );
    },
);
