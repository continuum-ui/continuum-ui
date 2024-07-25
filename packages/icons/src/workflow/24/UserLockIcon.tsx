import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const UserLockIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 33a5 5 0 0 1 2.037-4.025 13.991 13.991 0 0 1 5.5-10.111 17.789 17.789 0 0 0 1.909-7.747c0-6.72-3.282-9.89-8.242-9.89s-8.336 3.317-8.336 9.89a16.927 16.927 0 0 0 3.126 9.469 1.949 1.949 0 0 1 .434 1.2v2.683a1.947 1.947 0 0 1-1.67 1.887C2.071 27.494 0 34.7 0 37.6V40h18ZM45 32h-1v-2a10 10 0 0 0-20 0v2h-1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V33a1 1 0 0 0-1-1Zm-17-2a6 6 0 0 1 12 0v2H28Zm8 10.222V43a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2.779a3 3 0 1 1 4 0Z" />
            </svg>
        );
    },
);
