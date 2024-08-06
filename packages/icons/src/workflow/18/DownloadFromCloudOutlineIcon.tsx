import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const DownloadFromCloudOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M29.286 9.471a8.787 8.787 0 0 0-17.019-3.042 7.722 7.722 0 0 0-7.689 7.4 5.224 5.224 0 0 0-3.545 5.544A5.346 5.346 0 0 0 6.41 24h5.09a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H6.4a3.336 3.336 0 0 1-3.391-3.041 3.214 3.214 0 0 1 3.209-3.388h.359v-1.428a5.719 5.719 0 0 1 7.2-5.519 6.787 6.787 0 1 1 13.268 2.7 5.357 5.357 0 1 1 .6 10.68H24.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2.9a7.517 7.517 0 0 0 7.547-6.484 7.368 7.368 0 0 0-5.661-8.049Z" />
                <path d="M22.5 29H20V15a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v14h-2.5a.5.5 0 0 0-.5.5.489.489 0 0 0 .117.317l4.519 5.023a.5.5 0 0 0 .728 0l4.519-5.023A.489.489 0 0 0 23 29.5a.5.5 0 0 0-.5-.5Z" />
            </svg>
        );
    },
);
