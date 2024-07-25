import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const UnderlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="2" rx=".5" ry=".5" width="22" x="7" y="30" />
                <path d="M22.5 4.012a.5.5 0 0 0-.5.5v13.5s.482 6.2-5 6.2c-5.459 0-5-6.2-5-6.2v-13.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v13.5c0 1.412-.141 10 9 10S26 19 26 17.988V4.512a.5.5 0 0 0-.5-.5Z" />
            </svg>
        );
    },
);
