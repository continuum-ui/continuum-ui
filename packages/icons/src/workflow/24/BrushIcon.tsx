import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BrushIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16.647 26.889a7.859 7.859 0 0 0-6.01 2.189 14.077 14.077 0 0 0-2.967 5.878c-.875 2.782-1.7 5.41-5.261 7.107a1 1 0 0 0 .263 1.89c.8.136 1.721.251 2.72.326 3.6.268 10.379.154 15.314-3.6a7.6 7.6 0 0 0 3.139-5.563 7.739 7.739 0 0 0-7.198-8.227ZM26.53 30.1C36.51 18.977 47.871 5.715 45.094 2.938S29.335 13.15 19.48 23.8a11.4 11.4 0 0 1 7.05 6.3Z" />
            </svg>
        );
    },
);
