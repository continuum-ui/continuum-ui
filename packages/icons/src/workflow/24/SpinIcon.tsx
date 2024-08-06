import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const SpinIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M34 27c-11.708.347-14.708.5-16.145.376-2.665-.147-5.375-.958-6.68-2.77a5.848 5.848 0 0 1-1.089-3.411 5.963 5.963 0 0 1 .97-3.165 10.353 10.353 0 0 1 5.656-3.937A16.828 16.828 0 0 1 20 13.384V24h8V5a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5.131a20.419 20.419 0 0 0-4.239.644 15.691 15.691 0 0 0-4.072 1.635A12.2 12.2 0 0 0 7.84 15.8a9.8 9.8 0 0 0-1.926 5.588 10.041 10.041 0 0 0 1.569 5.728 10.637 10.637 0 0 0 4.657 3.873 17.96 17.96 0 0 0 5.221 1.393c1.836.262 5.294.284 16.639.62v5l10-8L34 22Z" />
                <path d="M20 43a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h-8Z" />
                <circle cx="32" cy="12" r="2" />
                <circle cx="38.18" cy="12.935" r="2" />
                <circle cx="44" cy="16" r="2" />
            </svg>
        );
    },
);
