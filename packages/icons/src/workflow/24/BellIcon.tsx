import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const BellIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 48c2.485 0 6-2.687 6-6H18c0 3.313 3.515 6 6 6ZM36 16c0-5.155-2.686-7.435-8-8V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4c-5.314.565-8 2.845-8 8 0 23.123-6 16.167-6 19.23V37a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1v-1.77C42 32 36 39.123 36 16Z" />
            </svg>
        );
    },
);
