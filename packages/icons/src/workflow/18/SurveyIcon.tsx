import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const SurveyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M19.294 12.266a4.436 4.436 0 0 1-1.607 3.466c-.979.929-1.909 1.757-1.909 2.511a2.65 2.65 0 0 0 .4 1.381.108.108 0 0 1-.1.176H13.9a.419.419 0 0 1-.326-.1 2.744 2.744 0 0 1-.6-1.732c0-1.181.728-1.934 1.934-3.139.828-.829 1.3-1.356 1.3-2.134 0-.9-.6-1.532-2.134-1.532a6.379 6.379 0 0 0-3.164.828c-.1.05-.2 0-.2-.1V9.454c0-.1 0-.2.1-.251a7.974 7.974 0 0 1 3.817-.879c3.01 0 4.667 1.733 4.667 3.942Z" />
                <path d="M15.734 30H4V4h22v13.521l2-2V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h12.069ZM35.645 20.685l-4.324-4.323a1.083 1.083 0 0 0-.678-.265 1.13 1.13 0 0 0-.7.3L18.711 27.639a.736.736 0 0 0-.188.315l-2.444 7.34c-.085.282.345.638.588.638a.231.231 0 0 0 .046-.005c.207-.048 6.26-2.118 7.344-2.444a.733.733 0 0 0 .31-.187L35.6 22.059a1.03 1.03 0 0 0 .3-.662.916.916 0 0 0-.255-.712ZM18.039 33.973l1.978-5.519 3.54 3.531c-1.621.487-4.118 1.57-5.518 1.988Z" />
                <path d="M13.091 23.567a1.668 1.668 0 0 1 1.758-1.734 1.668 1.668 0 0 1 1.758 1.734 1.623 1.623 0 0 1-1.758 1.757 1.648 1.648 0 0 1-1.758-1.757Z" />
            </svg>
        );
    },
);
