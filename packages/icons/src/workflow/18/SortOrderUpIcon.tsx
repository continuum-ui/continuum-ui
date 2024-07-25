import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SortOrderUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <g>
                    <rect x="2" y="8" width="12" height="4" rx="1" />
                    <rect x="2" y="16" width="16" height="4" rx="1" />
                    <rect x="2" y="24" width="20" height="4" rx="1" />
                    <path d="M31.999 12h-2.006v15a.988.988 0 0 1-.987 1h-.992a1 1 0 0 1-1-.999L27.007 12h-2.006a.5.5 0 0 1-.501-.504.489.489 0 0 1 .147-.35l3.537-4.033a.5.5 0 0 1 .632 0l3.537 4.033a.489.489 0 0 1 .147.35.5.5 0 0 1-.501.504Z" />
                </g>
            </svg>
        );
    },
);
