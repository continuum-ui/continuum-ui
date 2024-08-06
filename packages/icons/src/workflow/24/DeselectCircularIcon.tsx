import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const DeselectCircularIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m6.005 24.433-4 .09a21.828 21.828 0 0 0 1.625 7.785l3.7-1.512a17.844 17.844 0 0 1-1.325-6.363ZM7.765 16.25l-2.958-2.958a21.468 21.468 0 0 0-2.381 6.453l-.052.229 3.947.668a18.017 18.017 0 0 1 1.444-4.392ZM15.331 44.224a22.4 22.4 0 0 0 7.747 1.759l.175-4a18.321 18.321 0 0 1-6.348-1.441ZM9.1 34.086l-3.317 2.241A21.965 21.965 0 0 0 11.348 42l2.3-3.27A18 18 0 0 1 9.1 34.086ZM31.756 40.241a17.847 17.847 0 0 1-4.782 1.517l.659 3.946a21.86 21.86 0 0 0 7.082-2.5ZM42 23.567l4-.09a21.828 21.828 0 0 0-1.622-7.785l-3.7 1.511A17.849 17.849 0 0 1 42 23.567ZM45.626 28.026l-3.947-.668a18 18 0 0 1-1.444 4.391l2.958 2.959a21.473 21.473 0 0 0 2.381-6.454ZM32.669 3.776a22.39 22.39 0 0 0-7.747-1.759l-.175 4A18.353 18.353 0 0 1 31.1 7.453ZM38.9 13.914l3.313-2.241A21.949 21.949 0 0 0 36.652 6l-2.3 3.27a18 18 0 0 1 4.548 4.644ZM16.243 7.759a17.889 17.889 0 0 1 4.783-1.517L20.367 2.3a21.874 21.874 0 0 0-7.083 2.5Z" />
                <rect height="56" rx="1" ry="1" transform="rotate(-45 24 24)" width="4" x="22" y="-4" />
            </svg>
        );
    },
);
