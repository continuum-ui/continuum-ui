import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ReplyAllIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M28 8V3a1 1 0 0 0-1.006-1 .979.979 0 0 0-.658.255l-10 10a1 1 0 0 0 0 1.494l10 10a.979.979 0 0 0 .658.255A1 1 0 0 0 28 23v-4.815a19.124 19.124 0 0 1 3.724-.259c5.437.41 9.777 3.917 12.424 7.256a.612.612 0 0 0 1.1-.366C45.252 22.121 42.278 8.051 28 8ZM15.249 24H14v-5a1 1 0 0 0-1.006-1 .979.979 0 0 0-.658.255l-10 11a1 1 0 0 0 0 1.494l10 11a.979.979 0 0 0 .658.255A1 1 0 0 0 14 41v-5c8.337-1.667 16.133 3.007 19.869 7.717a.7.7 0 0 0 1.267-.42C35.136 40.2 31.71 24 15.249 24Z" />
            </svg>
        );
    },
);
