import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const LabelsIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M33.703 15.507 18.493.297A1.014 1.014 0 0 0 17.776 0H5.014A1.014 1.014 0 0 0 4 1.014v12.762a1.015 1.015 0 0 0 .297.717l15.21 15.21a1.014 1.014 0 0 0 1.434 0l12.762-12.762a1.014 1.014 0 0 0 0-1.434ZM11 10a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" />
                <path d="m33.703 21.707-.804-.793L20.94 32.707a1.024 1.024 0 0 1-1.434 0l-15.21-15A.992.992 0 0 1 4 17v3a.994.994 0 0 0 .297.708l15.21 15a1.025 1.025 0 0 0 1.434 0l12.762-12.586a.99.99 0 0 0 0-1.415Z" />
            </svg>
        );
    },
);
