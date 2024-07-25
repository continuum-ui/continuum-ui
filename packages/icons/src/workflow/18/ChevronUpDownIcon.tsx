import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ChevronUpDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="36"
                viewBox="0 0 36 36"
                width="36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M28 11.98a2 2 0 0 1-3.411 1.411l-6.577-6.573-6.578 6.572a2 2 0 0 1-2.874-2.773l.049-.049L16.6 2.585a2 2 0 0 1 2.825 0l7.989 7.983A1.989 1.989 0 0 1 28 11.98Z" />
                <path d="M8 24.02a2 2 0 0 1 3.411-1.411l6.578 6.572 6.578-6.572a2 2 0 0 1 2.874 2.773l-.049.049-7.992 7.983a2 2 0 0 1-2.825 0l-7.989-7.983A1.989 1.989 0 0 1 8 24.02Z" />
            </svg>
        );
    },
);
