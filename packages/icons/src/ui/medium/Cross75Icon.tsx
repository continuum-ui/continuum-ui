import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const Cross75Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 8 8"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="m5.188 4 2.14-2.14A.84.84 0 1 0 6.141.672L4 2.812 1.86.672A.84.84 0 0 0 .672 1.86L2.812 4 .672 6.14A.84.84 0 1 0 1.86 7.328L4 5.188l2.14 2.14A.84.84 0 1 0 7.328 6.14z" />
            </svg>
        );
    },
);
