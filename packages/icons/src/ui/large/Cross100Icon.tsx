import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const Cross100Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M6.548 5 9.63 1.917A1.094 1.094 0 0 0 8.084.371L5.001 3.454 1.917.37A1.094 1.094 0 0 0 .371 1.917L3.454 5 .37 8.085A1.094 1.094 0 1 0 1.917 9.63l3.084-3.083L8.084 9.63a1.094 1.094 0 1 0 1.547-1.546z" />
            </svg>
        );
    },
);
