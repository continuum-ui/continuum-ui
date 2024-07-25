import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TrophyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24.213 18.021a15.517 15.517 0 0 0 11.35-12.876A1 1 0 0 0 34.571 4h-6.706c.089-1.3.135-2.634.135-4H8c0 1.366.046 2.7.135 4H1.429a.993.993 0 0 0-.991 1.145 15.514 15.514 0 0 0 11.349 12.876A9.169 9.169 0 0 0 16 22v8c-3.144.82-5.866 2.849-6.682 6h17.364c-.816-3.151-3.538-5.18-6.682-6v-8a9.169 9.169 0 0 0 4.213-3.979ZM33.4 6c-.839 2.9-2.582 7.347-7.945 9.526A35.182 35.182 0 0 0 27.688 6ZM2.6 6h5.712a35.175 35.175 0 0 0 2.234 9.525C5.182 13.346 3.439 8.9 2.6 6Z" />
            </svg>
        );
    },
);
