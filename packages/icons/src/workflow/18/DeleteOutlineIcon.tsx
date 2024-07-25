import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DeleteOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m27.491 8-2.308 24H8.817L6.509 8ZM22 2H12a2 2 0 0 0-2 2v2H2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2l2.413 25.1a1 1 0 0 0 1 .9h18.179a1 1 0 0 0 1-.9L29.5 8h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H24V4a2 2 0 0 0-2-2ZM12 6V4h10v2Z" />
                <path d="M17 29a1 1 0 0 1-1-1V12a1 1 0 0 1 2 0v16a1 1 0 0 1-1 1ZM20.934 29A1 1 0 0 1 20 27.933l1.071-15.995a1 1 0 1 1 2 .134L22 28.068a1 1 0 0 1-1.066.932ZM13.066 29A1 1 0 0 0 14 27.933l-1.075-15.995a1 1 0 1 0-2 .134l1.071 16a1 1 0 0 0 1.07.928Z" />
            </svg>
        );
    },
);
