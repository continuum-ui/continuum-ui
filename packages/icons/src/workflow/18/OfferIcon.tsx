import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const OfferIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m18.26 10.911 1.993 5.228 5.629.264a.233.233 0 0 1 .136.415l-4.4 3.5 1.489 5.382a.235.235 0 0 1-.356.256l-4.711-3.063-4.711 3.068a.235.235 0 0 1-.356-.256l1.486-5.391-4.4-3.5a.233.233 0 0 1 .141-.414l5.629-.264 1.993-5.228a.236.236 0 0 1 .438.003ZM2 28H0v2a2 2 0 0 0 2 2h4v-2H2ZM6 4h4v2H6zM8 30h4v2H8zM0 10h2v4H0zM2 6h2V4H2a2 2 0 0 0-2 2v2h2ZM0 16h2v4H0zM0 22h2v4H0zM34 10h2v4h-2zM34 16h2v4h-2zM34 22h2v4h-2zM14 30h4v2h-4zM12 4h4v2h-4zM34 4h-4v2h4v2h2V6a2 2 0 0 0-2-2ZM18 4h4v2h-4zM34 30h-2v2h2a2 2 0 0 0 2-2v-2h-2ZM26 30h4v2h-4zM20 30h4v2h-4zM24 4h4v2h-4z" />
            </svg>
        );
    },
);
