import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const Checkmark50Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M3.815 8.687a.92.92 0 0 1-.708-.332l-1.891-2.27a.921.921 0 0 1 1.416-1.18L3.794 6.3l3.56-4.531a.921.921 0 1 1 1.45 1.138L4.54 8.335a.92.92 0 0 1-.712.351z" />
            </svg>
        );
    },
);
