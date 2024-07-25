import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const HistoryIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M19 6h-2a1 1 0 0 0-1 1v10.586a1 1 0 0 0 .293.707L21.9 23.9a1 1 0 0 0 1.414 0l1.336-1.336a1 1 0 0 0 0-1.414L20 16.5V7a1 1 0 0 0-1-1Z" />
                <path d="M18 2A15.946 15.946 0 0 0 6.856 6.519 13.124 13.124 0 0 0 2.847 14H.5a.5.5 0 0 0-.5.5.49.49 0 0 0 .147.35l3.537 4.033a.5.5 0 0 0 .632 0l3.537-4.033A.49.49 0 0 0 8 14.5a.5.5 0 0 0-.5-.5H4.969a11.708 11.708 0 0 1 3.489-6.245 14 14 0 1 1-.009 20.481.5.5 0 0 0-.691.006l-.707.707a.506.506 0 0 0 0 .723A16 16 0 1 0 18 2Z" />
            </svg>
        );
    },
);
