import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BracketsSquareIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M23 2v3h3v26h-3v3h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM6 3v30a1 1 0 0 0 1 1h6v-3h-3V5h3V2H7a1 1 0 0 0-1 1Z" />
            </svg>
        );
    },
);
