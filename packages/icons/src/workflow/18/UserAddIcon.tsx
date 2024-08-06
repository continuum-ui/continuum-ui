import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const UserAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16 27a11.013 11.013 0 0 1 5.761-9.67 13.413 13.413 0 0 0 1.727-6.288C23.488 5.617 20.4 2 15.956 2s-7.532 3.617-7.532 9.042c0 5.015 3.532 8.958 3.532 8.958 0 1.652-.026 2.977-1.673 3.12C8.031 23.316.666 25.763 0 32.947A.993.993 0 0 0 1 34h17.522A10.944 10.944 0 0 1 16 27Z" />
                <path d="M27 18a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm4.9 10.5h-3.4v3.4a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-3.4h-3.4a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h3.4v-3.4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3.4h3.4a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5Z" />
            </svg>
        );
    },
);
