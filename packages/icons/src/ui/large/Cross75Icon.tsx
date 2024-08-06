import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const Cross75Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 10"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="m6.485 5 2.674-2.674A1.05 1.05 0 1 0 7.674.84L5 3.515 2.326.84A1.05 1.05 0 0 0 .84 2.326L3.515 5 .84 7.674A1.05 1.05 0 0 0 2.326 9.16L5 6.485 7.674 9.16A1.05 1.05 0 1 0 9.16 7.674z" />
            </svg>
        );
    },
);
