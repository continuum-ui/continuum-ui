import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const ImageMapPolygonIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M47 0H37a1 1 0 0 0-1 1v7.478l-6 2.667V11a1 1 0 0 0-1-1H19a1 1 0 0 0-1 1v1.618l-6-1.333V5a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4.139l4.923 16H9a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3.972l12-2V39a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V29a1 1 0 0 0-1-1h-2.054l2.462-16H47a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM22 14h4v4h-4ZM8 12H4V8h4Zm8 28h-4v-4h4Zm16-11v3.973l-12 2V33a1 1 0 0 0-1-1h-4.754L9.322 16H11a1 1 0 0 0 .926-.634L18 16.716V21a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5.478L37.924 12h1.438L36.9 28H33a1 1 0 0 0-1 1Zm8 7h-4v-4h4Zm4-28h-4V4h4Z" />
            </svg>
        );
    },
);
