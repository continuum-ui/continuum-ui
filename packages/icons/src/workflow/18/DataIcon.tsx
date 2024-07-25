import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DataIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <ellipse cx="18" cy="7" rx="16" ry="5" />
                <path d="M18 24.275c-4.936 0-14.212-1.169-16-4V29c0 2.761 7.163 5 16 5s16-2.239 16-5v-8.73c-2.447 3.095-11.064 4.005-16 4.005Z" />
                <path d="M18 14.275c-4.936 0-14.212-1.169-16-4.005V17c0 2.761 7.163 5 16 5s16-2.239 16-5v-6.73c-2.447 3.095-11.064 4.005-16 4.005Z" />
            </svg>
        );
    },
);
