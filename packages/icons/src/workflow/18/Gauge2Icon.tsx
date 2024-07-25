import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const Gauge2Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m6.7 13.613-1.535-3.326A15.912 15.912 0 0 0 2 19.813a13.828 13.828 0 0 0 1.394 5.867.5.5 0 0 0 .806.133l1.375-1.376a.491.491 0 0 0 .116-.508 12.467 12.467 0 0 1-.313-7.12A13.137 13.137 0 0 1 6.7 13.613Zm27.263 5.141a16.133 16.133 0 0 0-15.4-14.932 15.939 15.939 0 0 0-7.222 1.459l1.986 2.49a12.562 12.562 0 0 1 5.22-.947A13.016 13.016 0 0 1 31 19.813a12.878 12.878 0 0 1-.691 4.117.492.492 0 0 0 .116.506L31.987 26a.5.5 0 0 0 .818-.154 15.842 15.842 0 0 0 1.16-7.092ZM9.01 7.089a.867.867 0 0 0-1.483.874l7.711 17.643a3.219 3.219 0 0 0 4.646 1.639 3.219 3.219 0 0 0 .819-4.858Z" />
            </svg>
        );
    },
);
