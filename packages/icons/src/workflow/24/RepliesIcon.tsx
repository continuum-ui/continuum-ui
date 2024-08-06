import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const RepliesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M27.93 8.078V3.837a.848.848 0 0 0-1.448-.6L16.9 13.169l9.582 9.931a.848.848 0 0 0 1.448-.6v-4.3c9.178-1.545 14.058 3.693 15.888 6.176a.6.6 0 0 0 1.081-.347C44.9 21.464 41.977 8.078 27.93 8.078ZM14 24v-5a1 1 0 0 0-1.707-.707L1 30l11.293 11.705A1 1 0 0 0 14 41v-5.075C24.817 34.1 30.568 40.277 32.726 43.2A.708.708 0 0 0 34 42.794C34 39.776 30.555 24 14 24Z" />
            </svg>
        );
    },
);
