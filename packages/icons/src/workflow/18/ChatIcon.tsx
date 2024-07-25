import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ChatIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M19 14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H9.586a1 1 0 0 0-.707.293L6 31.171V29a1 1 0 0 0-1-1H3a1 1 0 0 1-1-1V15a1 1 0 0 1 1-1ZM3 12a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h1v4.793a.5.5 0 0 0 .854.353L10 30h9a3 3 0 0 0 3-3V15a3 3 0 0 0-3-3Z" />
                <path d="M24 14.6a4.6 4.6 0 0 0-4.6-4.6H12V5a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-3v4.793a.5.5 0 0 1-.854.353L24 20Z" />
            </svg>
        );
    },
);
