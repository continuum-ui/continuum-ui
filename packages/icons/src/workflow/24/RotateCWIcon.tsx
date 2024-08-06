import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const RotateCWIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="40.382" cy="31.925" r="2" />
                <circle cx="9.215" cy="34.823" r="2" />
                <circle cx="14.833" cy="39.85" r="2" />
                <circle cx="22.108" cy="42.215" r="2" />
                <circle cx="29.559" cy="41.506" r="2" />
                <circle cx="35.946" cy="37.839" r="2" />
                <path d="M24 4.1a19.8 19.8 0 0 1 14.976 6.86l5.508-2.375a.5.5 0 0 1 .678.6L41.647 21.3l-12.589-5.141a.5.5 0 0 1-.061-.9l6.113-2.635A15.9 15.9 0 0 0 8.055 24a12.246 12.246 0 0 0 .373 3.38 1.979 1.979 0 1 1-3.845.926A18.412 18.412 0 0 1 4.1 24 19.9 19.9 0 0 1 24 4.1Z" />
            </svg>
        );
    },
);
