import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const Cross600Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="m10.897 9 6.537-6.536A1.341 1.341 0 1 0 15.537.567L9 7.104 2.465.567A1.341 1.341 0 0 0 .567 2.464L7.104 9 .567 15.537a1.341 1.341 0 1 0 1.897 1.897L9 10.897l6.536 6.537a1.341 1.341 0 1 0 1.897-1.897z" />
            </svg>
        );
    },
);
