import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const OrbitIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M35.977 16.237c0-.081.023-.156.023-.237a9.981 9.981 0 0 0-18.1-5.826A33.81 33.81 0 0 0 14.62 10C7.465 10 2.021 12.483.768 17.014-.6 21.964 3.412 28.028 10.4 32.721L6.683 37.18a.5.5 0 0 0 .385.82H24l-7.658-11.316a.5.5 0 0 0-.831-.1l-2.525 3.029c-5.907-3.861-9.195-8.53-8.363-11.536.686-2.478 4.61-4.08 10-4.08.511 0 1.046.047 1.572.076a9.126 9.126 0 0 0 1.668 7.407A10.127 10.127 0 0 0 26.092 26a9.976 9.976 0 0 0 8.885-5.669c5.948 3.87 9.236 8.571 8.4 11.589C42.691 34.4 38.768 36 33.38 36c-.744 0-1.508-.041-2.284-.108a1 1 0 0 0-1.1.986v2.011a1.012 1.012 0 0 0 .925 1.006c.837.067 1.659.1 2.455.1 7.155 0 12.6-2.483 13.852-7.014 1.478-5.319-3.268-11.935-11.251-16.744Z" />
            </svg>
        );
    },
);
