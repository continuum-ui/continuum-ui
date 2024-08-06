import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const InfoOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 7.9A16.1 16.1 0 1 1 7.9 24 16.118 16.118 0 0 1 24 7.9Zm0-3.8A19.9 19.9 0 1 0 43.9 24 19.9 19.9 0 0 0 24 4.1Z" />
                <path d="M21.56 14.747a2.24 2.24 0 0 1 4.48 0 2.084 2.084 0 0 1-2.24 2.24 2.116 2.116 0 0 1-2.24-2.24ZM27.5 32H26V21a1 1 0 0 0-1-1h-4.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H22v10h-1.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5Z" />
            </svg>
        );
    },
);
