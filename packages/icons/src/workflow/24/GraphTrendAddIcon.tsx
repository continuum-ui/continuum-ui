import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const GraphTrendAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20.1 36a15.856 15.856 0 0 1 6.26-12.623l1.9-5.74 1.663 3.674a15.721 15.721 0 0 1 9.728-.774l4.174-5.963A1 1 0 0 0 44 14V9.657a1 1 0 0 0-1.819-.574l-7.749 11.07L28.6 8.5a1 1 0 0 0-1.835.105l-7.222 22.329-6.714-6.346a1 1 0 0 0-1.347-.061l-7.123 5.936a1 1 0 0 0-.359.768v2.575a1 1 0 0 0 1.641.769l6.176-5.146 8.283 8.283c.031.031.072.036.106.062A15.89 15.89 0 0 1 20.1 36Z" />
                <path d="M24.1 36A11.9 11.9 0 1 0 36 24.1 11.9 11.9 0 0 0 24.1 36Zm13.4-8a.5.5 0 0 1 .5.5V34h5.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H38v5.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V38h-5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H34v-5.5a.5.5 0 0 1 .5-.5Z" />
            </svg>
        );
    },
);
