import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const ChatAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14.75 28H9.586a1 1 0 0 0-.707.293L6 31.171V29a1 1 0 0 0-1-1H3a1 1 0 0 1-1-1V15a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v1.893a12.26 12.26 0 0 1 2-1.124V15a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h1v4.793a.5.5 0 0 0 .854.354L10 30h5.084a12.221 12.221 0 0 1-.334-2Z" />
                <path d="M24 14.6v.484A12.209 12.209 0 0 1 35.693 18.3 2.972 2.972 0 0 0 36 17V5a3 3 0 0 0-3-3H15a3 3 0 0 0-3 3v5h7.4a4.6 4.6 0 0 1 4.6 4.6ZM27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm5 9.4a.5.5 0 0 1-.5.5H28v3.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V28h-3.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H26v-3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V26h3.5a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
