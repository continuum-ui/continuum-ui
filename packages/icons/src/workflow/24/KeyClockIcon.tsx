import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const KeyClockIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M36.1 24.084a11.9 11.9 0 1 0 11.9 11.9 11.9 11.9 0 0 0-11.9-11.9ZM36 44.736a8.752 8.752 0 1 1 8.752-8.752A8.752 8.752 0 0 1 36 44.736Z" />
                <path d="M37.526 35.979v-5.22a1.652 1.652 0 0 0-1.652-1.652 1.652 1.652 0 0 0-1.652 1.652V37.8l4.134 2.613a1.652 1.652 0 0 0 2.28-.513 1.652 1.652 0 0 0-.513-2.28ZM22.653 26.493l8.916-8.972 2.241 2.241a15.641 15.641 0 0 1 6.48.424l2.139-2.138-5.693-5.693 1.641-1.642 5.693 5.694 3.293-3.293a1 1 0 0 0 0-1.415l-8.617-8.617a2 2 0 0 0-2.829 0L17.606 21.394a12 12 0 1 0 2.677 19.274c-1.313-4.433-.858-10.946 2.37-14.175ZM10 38a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z" />
            </svg>
        );
    },
);
