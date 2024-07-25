import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AlertCheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14.7 27a12.39 12.39 0 0 1 .219-2.278h-1.136a.405.405 0 0 1-.4-.405v-2.433a.406.406 0 0 1 .4-.406h2.237a12.322 12.322 0 0 1 6.909-6.078L15.708 2.482a.811.811 0 0 0-1.416 0L.725 26.76a.811.811 0 0 0 .708 1.207h13.316A12.37 12.37 0 0 1 14.7 27ZM13.378 9.718a.406.406 0 0 1 .4-.406h2.434a.406.406 0 0 1 .405.406v9.733a.405.405 0 0 1-.405.405h-2.429a.405.405 0 0 1-.4-.405Z" />
                <path d="M27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm-2.338 14.312-4.128-4.127a.5.5 0 0 1 0-.707l1.037-1.037a.5.5 0 0 1 .707 0l2.731 2.731 6.106-6.106a.5.5 0 0 1 .707 0l1.043 1.043a.5.5 0 0 1 0 .707l-7.5 7.5a.5.5 0 0 1-.703-.004Z" />
            </svg>
        );
    },
);
