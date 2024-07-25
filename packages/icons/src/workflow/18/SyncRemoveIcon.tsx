import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SyncRemoveIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M22 13V7a1 1 0 0 0-1-1H10V1.207a.5.5 0 0 0-.854-.353L0 10l5.33 5.33a12.3 12.3 0 0 1 3.57-.53c.371 0 .736.023 1.1.056V14h11a1 1 0 0 0 1-1Zm4.854-.146a.5.5 0 0 0-.854.353V18h-8.846a12.253 12.253 0 0 1 3.99 8H26v4.793a.5.5 0 0 0 .854.353L36 22ZM8.9 18.2a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm5.826 12.267a.5.5 0 0 1 0 .707l-1.752 1.752a.5.5 0 0 1-.707 0L8.9 29.559l-3.367 3.367a.5.5 0 0 1-.707 0l-1.752-1.752a.5.5 0 0 1 0-.707L6.441 27.1l-3.367-3.367a.5.5 0 0 1 0-.707l1.752-1.752a.5.5 0 0 1 .707 0L8.9 24.641l3.367-3.367a.5.5 0 0 1 .707 0l1.752 1.752a.5.5 0 0 1 0 .707L11.359 27.1Z" />
            </svg>
        );
    },
);
