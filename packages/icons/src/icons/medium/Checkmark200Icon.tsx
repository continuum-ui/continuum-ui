import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const Checkmark200Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 12"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M4.313 10.98a1.042 1.042 0 01-.8-.375L.647 7.165a1.042 1.042 0 011.6-1.333l2.042 2.45 5.443-6.928a1.042 1.042 0 011.64 1.287l-6.24 7.94a1.04 1.04 0 01-.804.399z" />
            </svg>
        );
    },
);
