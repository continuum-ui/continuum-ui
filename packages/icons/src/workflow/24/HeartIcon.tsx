import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const HeartIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33.091 7.455c-3.8 0-7.137 2.512-9.091 5.454-1.954-2.942-5.294-5.454-9.091-5.454A10.909 10.909 0 0 0 4 18.364C4 28.25 24 42 24 42s20-14 20-23.636A10.909 10.909 0 0 0 33.091 7.455Z" />
            </svg>
        );
    },
);
