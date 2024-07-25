import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ThreeDMaterialsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M11.493 27.963a.216.216 0 0 0-.283-.268c-.734.287-1.852.613-2.335.131-1.524-1.526 1.487-7.762 6.491-12.766s11.3-7.816 12.758-6.36a1.089 1.089 0 0 1 .253 1.011.219.219 0 0 0 .281.249 9.057 9.057 0 0 1 1.495-.326.421.421 0 0 0 .367-.379 2.248 2.248 0 0 0-.5-1.895L30 7.347v-.006A15.952 15.952 0 1 0 7.156 29.58a.784.784 0 0 0 .125.1l.01.012a2.087 2.087 0 0 0 1.532.529 6.5 6.5 0 0 0 2.014-.4.456.456 0 0 0 .3-.361 11.427 11.427 0 0 1 .356-1.497Z" />
                <path d="M33.5 14.729c-.293-1.771-.939-2.959-2.509-2.959-2.69 0-7.007 2.719-11 6.927-4.736 5-7.466 10.4-6.638 13.144a2.742 2.742 0 0 0 2.458 1.887 14.425 14.425 0 0 0 2.217.172 14.944 14.944 0 0 0 11-4.744A15.958 15.958 0 0 0 33.5 14.729Z" />
            </svg>
        );
    },
);
