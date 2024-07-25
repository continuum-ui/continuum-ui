import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AttributesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M6.25 5.634V3a1 1 0 0 1 1-1h1.5a1 1 0 0 1 1 1v1H24v2H9.756a11.028 11.028 0 0 0 .869 4H22a2 2 0 0 1-2 2h-8.214a7.636 7.636 0 0 0 2.628 2.219l1.358.682-3.827 1.921-.011.006A13.187 13.187 0 0 1 6.25 5.634Zm17.817 13.5-.012.006-3.826 1.92 1.357.681A7.675 7.675 0 0 1 24.247 24H16a2 2 0 0 0-2 2h11.394a11.048 11.048 0 0 1 .851 4H12v2h14.25v1a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-2.678a13.189 13.189 0 0 0-5.683-11.193ZM28.75 2h-1.5a1 1 0 0 0-1 1v2.634c0 3.793-1.83 7.163-4.664 8.586l-8.742 4.389c-4.006 2.012-6.594 6.61-6.594 11.713V33a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-2.678c0-3.792 1.83-7.162 4.664-8.586l8.742-4.388c4.006-2.012 6.594-6.61 6.594-11.714V3a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
