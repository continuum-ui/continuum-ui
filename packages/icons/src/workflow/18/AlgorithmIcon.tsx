import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const AlgorithmIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M31 25.4h-.019l-3.335-5.478A3.588 3.588 0 0 0 25 13.9a3.53 3.53 0 0 0-.936.139l-3.418-5.615a3.6 3.6 0 1 0-5.292 0l-3.418 5.615A3.53 3.53 0 0 0 11 13.9a3.588 3.588 0 0 0-2.646 6.024L5.019 25.4H5A3.6 3.6 0 1 0 8.442 30h6.116a3.578 3.578 0 0 0 6.884 0h6.116A3.593 3.593 0 1 0 31 25.4ZM27.558 28h-6.116a3.584 3.584 0 0 0-1.142-1.75l3.431-5.392A3.571 3.571 0 0 0 25 21.1a3.53 3.53 0 0 0 .936-.139l3.07 5.044A3.593 3.593 0 0 0 27.558 28ZM18 9.6a3.543 3.543 0 0 0 .937-.139l3.417 5.615a3.617 3.617 0 0 0-.618.924h-7.472a3.6 3.6 0 0 0-.618-.924l3.417-5.615A3.543 3.543 0 0 0 18 9.6ZM14.55 18h6.9a3.564 3.564 0 0 0 .678 1.65l-3.687 5.794A3.56 3.56 0 0 0 18 25.4a3.56 3.56 0 0 0-.441.044l-3.687-5.794A3.564 3.564 0 0 0 14.55 18Zm-4.486 2.961A3.53 3.53 0 0 0 11 21.1a3.571 3.571 0 0 0 1.27-.242l3.43 5.392A3.584 3.584 0 0 0 14.558 28H8.442a3.593 3.593 0 0 0-1.448-2Z" />
            </svg>
        );
    },
);
