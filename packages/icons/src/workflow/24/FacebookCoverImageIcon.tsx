import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const FacebookCoverImageIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M19.42 34.931v-1.267a.881.881 0 0 1 .221-.565 6.734 6.734 0 0 0 1.505-4.175c0-3.159-1.658-4.924-4.163-4.924s-4.21 1.835-4.21 4.924A6.8 6.8 0 0 0 14.35 33.1a.882.882 0 0 1 .221.566v1.261a.867.867 0 0 1-.751.878C8.787 36.246 8 39.725 8 41.1c0 .152.018.752.029.9h17.955s.016-.75.016-.9c0-1.315-.889-4.782-5.831-5.289a.871.871 0 0 1-.749-.88Z" />
                <path d="M42 6H6a2 2 0 0 0-2 2v28a1.967 1.967 0 0 0 .76 1.532 9.256 9.256 0 0 1 4.8-4.739C8.6 31.622 8 28.605 8 27.035V12h32v17.737a7.686 7.686 0 0 1-4.138-2.775C34.144 24.7 31.768 22 30.215 22c-1.622 0-3.488 2.436-5.329 4.62a11.046 11.046 0 0 1 .261 2.3 10.642 10.642 0 0 1-.752 3.889 9.305 9.305 0 0 1 5 5.187H42a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z" />
            </svg>
        );
    },
);
