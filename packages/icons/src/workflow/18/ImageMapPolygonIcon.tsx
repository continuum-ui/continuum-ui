import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ImageMapPolygonIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M35.5 2h-7a.5.5 0 0 0-.5.5v4.412l-6.011 3.561A.5.5 0 0 0 21.5 10h-7a.5.5 0 0 0-.5.5v.952L8 9.23V4.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3.877l3.691 12H6.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-2.57l10-1.667V29.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-1.449L31.9 10h3.6a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5ZM16 12h4v4h-4ZM6 10H2V6h4Zm6 20H8v-4h4Zm12-7.5v2.736L14 26.9v-2.4a.5.5 0 0 0-.5-.5h-3.338L6.469 12H7.5a.5.5 0 0 0 .5-.5v-.137l6 2.222V17.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-4.708l6-3.556V9.5a.5.5 0 0 0 .5.5h1.372l-1.846 12H24.5a.5.5 0 0 0-.5.5Zm6 5.5h-4v-4h4Zm4-20h-4V4h4Z" />
            </svg>
        );
    },
);
