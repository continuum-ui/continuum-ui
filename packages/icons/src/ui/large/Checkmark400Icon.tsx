import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const Checkmark400Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M6.33 16.642a1.42 1.42 0 0 1-1.086-.509l-4.683-5.62a1.413 1.413 0 0 1 2.171-1.81l3.566 4.28 8.936-11.374a1.413 1.413 0 0 1 2.223 1.746L7.441 16.102a1.42 1.42 0 0 1-1.09.54z" />
            </svg>
        );
    },
);
