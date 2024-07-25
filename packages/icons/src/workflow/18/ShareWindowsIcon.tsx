import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ShareWindowsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33.174 16.724A13.773 13.773 0 0 0 31.9 12.26a7.712 7.712 0 0 1-2.736 2.45A10.216 10.216 0 0 1 28 23.955a5.236 5.236 0 1 0 2.327 2.7 13.676 13.676 0 0 0 2.847-9.931ZM17.728 28.325a10.278 10.278 0 0 1-7.222-5.1 5.187 5.187 0 1 0-5.633.324 5.147 5.147 0 0 0 2.242.654 13.7 13.7 0 0 0 11.4 7.708 7.808 7.808 0 0 1-.787-3.586ZM28.073 3.357a5.185 5.185 0 0 0-6.567 1.209A13.744 13.744 0 0 0 8.768 9.531a13.943 13.943 0 0 0-1.2 1.741 7.73 7.73 0 0 1 3.538.924c.117-.163.235-.326.362-.483a10.23 10.23 0 0 1 6.92-3.77 10.64 10.64 0 0 1 1.11-.059c.277 0 .552.016.826.038a5.184 5.184 0 1 0 7.746-4.565Z" />
            </svg>
        );
    },
);
