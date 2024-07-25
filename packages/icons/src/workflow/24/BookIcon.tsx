import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BookIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M27.8 38H12.237a6.16 6.16 0 0 1-6.121-4.8A6.01 6.01 0 0 1 12 26h16.981a2 2 0 0 0 1.618-.824l14.477-19.9A.8.8 0 0 0 44.429 4H21.617A2 2 0 0 0 20 4.824L4 26h.045c-2.282 3.019-2.982 7.3-.39 11.731A8.811 8.811 0 0 0 12 42h16.981a2 2 0 0 0 1.618-.824l14.477-19.9A.8.8 0 0 0 44.429 20h-3.538Z" />
            </svg>
        );
    },
);
