import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AnchorIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M45.274 31.171 39.4 24l-6.117 7.171a.5.5 0 0 0 .377.829h3.727S32.657 38.584 26 38.584V22h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3v-2.7a7 7 0 1 0-6 0V18h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3v16.584C13.032 38.584 8.613 32 8.613 32h3.515a.5.5 0 0 0 .376-.829L6.6 24 .726 31.171A.5.5 0 0 0 1.1 32H4c2.886 6.986 9.86 12 19 12s16.114-5.014 19-12h2.9a.5.5 0 0 0 .374-.829ZM19.5 8.8a3.5 3.5 0 1 1 3.5 3.5 3.5 3.5 0 0 1-3.5-3.5Z" />
            </svg>
        );
    },
);
