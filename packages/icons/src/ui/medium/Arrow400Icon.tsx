import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const Arrow400Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="m14.572 7.3-4.63-4.63a.989.989 0 0 0-1.399 1.398l2.942 2.943H1.87a.99.99 0 0 0 0 1.978h9.615l-2.942 2.943a.989.989 0 1 0 1.398 1.398l4.631-4.63a.99.99 0 0 0 0-1.4" />
            </svg>
        );
    },
);
