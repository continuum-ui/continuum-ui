import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const Checkmark500Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M5.597 14.784a1.18 1.18 0 0 1-.905-.424L.417 9.229a1.177 1.177 0 1 1 1.809-1.508l3.343 4.013 8.174-10.402a1.177 1.177 0 0 1 1.852 1.456L6.523 14.334a1.18 1.18 0 0 1-.91.45z" />
            </svg>
        );
    },
);
