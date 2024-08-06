import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const UndoIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M30.663 12.542A10.391 10.391 0 0 0 23.671 10H11V4.8a.8.8 0 0 0-.8-.8.787.787 0 0 0-.527.2l-7.529 7.449a.5.5 0 0 0 0 .7L9.668 19.8a.787.787 0 0 0 .527.2.8.8 0 0 0 .8-.8V14h12.882a6.139 6.139 0 0 1 6.223 5.8A5.889 5.889 0 0 1 24 26h-7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6.526a10.335 10.335 0 0 0 10.426-9.013 9.947 9.947 0 0 0-3.289-8.445Z" />
            </svg>
        );
    },
);
