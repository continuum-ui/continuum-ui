import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ViewColumnIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M4 8v34a2 2 0 0 0 2 2h8V6H6a2 2 0 0 0-2 2ZM18 6h10v38H18zM40 6h-8v38h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z" />
            </svg>
        );
    },
);
