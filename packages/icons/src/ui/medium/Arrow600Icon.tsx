import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const Arrow600Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="m18.191 9.241-5.986-5.987a1.073 1.073 0 0 0-1.518 1.517l4.155 4.156H2.063a1.073 1.073 0 1 0 0 2.146h12.779l-4.154 4.155a1.073 1.073 0 1 0 1.517 1.518l5.986-5.987a1.073 1.073 0 0 0 0-1.518" />
            </svg>
        );
    },
);
