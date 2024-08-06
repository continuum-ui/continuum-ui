import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const RotateCCWIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="7.618" cy="31.925" r="2" />
                <circle cx="38.785" cy="34.823" r="2" />
                <circle cx="33.167" cy="39.85" r="2" />
                <circle cx="25.892" cy="42.215" r="2" />
                <circle cx="18.441" cy="41.506" r="2" />
                <circle cx="12.054" cy="37.839" r="2" />
                <path d="M24 4.1a19.8 19.8 0 0 0-14.976 6.86L3.516 8.586a.5.5 0 0 0-.678.6L6.353 21.3l12.589-5.141a.5.5 0 0 0 .061-.9l-6.113-2.631A15.9 15.9 0 0 1 39.945 24a12.246 12.246 0 0 1-.373 3.38 1.979 1.979 0 1 0 3.845.926A18.412 18.412 0 0 0 43.9 24 19.9 19.9 0 0 0 24 4.1Z" />
            </svg>
        );
    },
);
