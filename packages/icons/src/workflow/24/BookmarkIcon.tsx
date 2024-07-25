import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BookmarkIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14.884 46.939 19 42l4.116 4.939a.5.5 0 0 0 .884-.32V30H14v16.619a.5.5 0 0 0 .884.32ZM44.429 20h-3.538L28 37.725V42h.981a2 2 0 0 0 1.618-.824l14.477-19.9A.8.8 0 0 0 44.429 20Z" />
                <path d="M44.429 4H21.617A2 2 0 0 0 20 4.824L4 26h.045c-2.282 3.019-2.982 7.3-.389 11.731A8.727 8.727 0 0 0 10 41.922v-4.331A5.959 5.959 0 0 1 12 26h16.981a2 2 0 0 0 1.618-.824l14.477-19.9A.8.8 0 0 0 44.429 4Z" />
            </svg>
        );
    },
);
