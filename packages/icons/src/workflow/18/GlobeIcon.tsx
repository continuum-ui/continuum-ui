import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const GlobeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M7.146 13.769C6.1 9.982 8.8 8.352 8.534 5.116A16.072 16.072 0 0 0 2 18c0 9.112 7.943 14.542 13.554 15.731a6.853 6.853 0 0 0 1.046.169c2-5.1-1.773-10.789-4.263-14.494-2.075-3.088-3.959-1.18-5.191-5.637Z" />
                <path d="M32.781 19.031c-1.611-.613-2.992 1.475-3.114-4.164a5.763 5.763 0 0 1 1.666-4 3.083 3.083 0 0 1 .729-.349c-.191-.349-.4-.684-.62-1.018-.037.02-.07.045-.109.062-1.25.584-1.423.756-2 0a1.576 1.576 0 0 1 .346-2.325 15.987 15.987 0 0 0-11.653-5.222c2.028.028 4.447 1.53 3.213 3.929.186-.381-4.027-1.29-4.6-1.29-.772 0 1.575-2.889 1.36-2.639a16.094 16.094 0 0 0-6.615 1.423c1.093.707 2.311.46 3.543.764a3.014 3.014 0 0 1 1.1.452 3.735 3.735 0 0 0-1.1-.452c-1.817-.21.88 4.778.778 4.114.5-2.292 3.612-3.176 4.566-.147a3.742 3.742 0 0 1-.838 2.265c-1.41 1.854-1.7 5.154-2.4 4.31-6.59-2.7-5.865.871-3.7 3.258 3.464 3.82 1.706.391 6.242 2.392 3.648 1.608 8.039 1.989 6.968 3.2-3.242 3.67-2.56 6.1-8.293 10.4.477-.013 2-.165 2.311-.216a16.275 16.275 0 0 0 13.375-14.4 2.4 2.4 0 0 1-1.155-.347Z" />
            </svg>
        );
    },
);
