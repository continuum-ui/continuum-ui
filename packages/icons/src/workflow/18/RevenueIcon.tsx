import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RevenueIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 23.658V33a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V21.9l-4.27 3.493ZM2 33a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V20.7l-6 5.139ZM10 18.981V33a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V21.658l-4.211-4.211ZM26 20.259V33a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V20.769l-2.8-3.13Z" />
                <path d="m24.6 8.833 2.169 2.427-6.631 5.4-7.7-7.7a.5.5 0 0 0-.679-.026L2 17.289v5.267l9.895-8.481 7.651 7.651a.5.5 0 0 0 .67.034l9.056-7.814 1.856 2.195a.5.5 0 0 0 .872-.333V8h-7.03a.5.5 0 0 0-.37.833Z" />
            </svg>
        );
    },
);
