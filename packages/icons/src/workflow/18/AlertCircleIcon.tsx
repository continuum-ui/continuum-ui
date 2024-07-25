import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AlertCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <g>
                    <path d="M18.1 2.2A15.9 15.9 0 1 0 34 18.1 15.9 15.9 0 0 0 18.1 2.2Zm0 29.812A13.912 13.912 0 1 1 32.012 18.1 13.912 13.912 0 0 1 18.1 32.012Z" />
                    <path d="M15.691 25.772a2.268 2.268 0 0 1 2.232-2.304q.084 0 .168.004a2.232 2.232 0 0 1 2.4 2.3 2.181 2.181 0 0 1-2.4 2.234 2.182 2.182 0 0 1-2.4-2.234Zm4.434-16.977a.416.416 0 0 1 .2.367v2.082c0 2.8-.567 7.96-.667 8.962 0 .1-.033.199-.234.199h-2.666a.221.221 0 0 1-.234-.2c-.066-.933-.6-6.06-.6-8.861V9.26a.355.355 0 0 1 .167-.366 5.766 5.766 0 0 1 2-.4 6.55 6.55 0 0 1 2.034.3Z" />
                </g>
            </svg>
        );
    },
);
