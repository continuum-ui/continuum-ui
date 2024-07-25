import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphDonutAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18.388 15.751a9.931 9.931 0 0 1 2.858-1.363 1.012 1.012 0 0 0 .754-.962V5.25a1.006 1.006 0 0 0-1.142-1 19.9 19.9 0 0 0-10.13 4.816 1 1 0 0 0 .06 1.519l6.388 5.142a1.009 1.009 0 0 0 1.212.024ZM6.563 14.215a19.991 19.991 0 0 0 14.3 29.538.988.988 0 0 0 1.052-.6 15.544 15.544 0 0 1-1.468-9.837A9.976 9.976 0 0 1 14 24a9.759 9.759 0 0 1 .746-3.715 1.011 1.011 0 0 0-.282-1.184l-6.4-5.152a1 1 0 0 0-1.501.266ZM36.1 24.1A11.9 11.9 0 1 0 48 36a11.9 11.9 0 0 0-11.9-11.9Zm8 13.4a.5.5 0 0 1-.5.5h-5.5v5.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V38h-5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h5.5v-5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V34h5.5a.5.5 0 0 1 .5.5ZM33.291 20.362a15.662 15.662 0 0 1 10.625 1.8A20.008 20.008 0 0 0 27.14 4.247a1 1 0 0 0-1.14 1v8.177a1.009 1.009 0 0 0 .756.961 10.006 10.006 0 0 1 6.535 5.977Z" />
            </svg>
        );
    },
);
