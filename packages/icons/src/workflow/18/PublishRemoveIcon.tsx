import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const PublishRemoveIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33.191 1.113 1.8 10.478a.5.5 0 0 0-.08.926l7.92 3.954ZM15.645 22.372 10.08 19.25v7.639a.713.713 0 0 0 1.174.544l3.795-3.2a12.242 12.242 0 0 1 .596-1.861ZM27 14.8a12.288 12.288 0 0 1 2.786.329l5.851-12.765-22.548 14.667 4.435 2.229A12.273 12.273 0 0 1 27 14.8ZM27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm5.826 12.267a.5.5 0 0 1 0 .707l-1.752 1.752a.5.5 0 0 1-.707 0L27 29.459l-3.367 3.367a.5.5 0 0 1-.707 0l-1.752-1.752a.5.5 0 0 1 0-.707L24.541 27l-3.367-3.367a.5.5 0 0 1 0-.707l1.752-1.752a.5.5 0 0 1 .707 0L27 24.541l3.367-3.367a.5.5 0 0 1 .707 0l1.752 1.752a.5.5 0 0 1 0 .707L29.459 27Z" />
            </svg>
        );
    },
);
