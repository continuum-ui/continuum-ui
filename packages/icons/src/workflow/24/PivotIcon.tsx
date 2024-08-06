import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const PivotIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M46.793 34H40V16a8 8 0 0 0-8-8H14V1.207a.5.5 0 0 0-.854-.353L.6 13l12.546 12.146a.5.5 0 0 0 .854-.353V18h16v16h-6.793a.5.5 0 0 0-.353.854L35 47.4l12.146-12.546a.5.5 0 0 0-.353-.854Z" />
            </svg>
        );
    },
);
