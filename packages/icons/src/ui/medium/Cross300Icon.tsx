import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const Cross300Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 12"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="m7.344 6 3.395-3.396a.95.95 0 0 0-1.344-1.342L6 4.657 2.604 1.262a.95.95 0 0 0-1.342 1.342L4.657 6 1.262 9.396a.95.95 0 0 0 1.343 1.343L6 7.344l3.395 3.395a.95.95 0 0 0 1.344-1.344z" />
            </svg>
        );
    },
);
