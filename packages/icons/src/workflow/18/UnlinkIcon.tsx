import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const UnlinkIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m11.136 9.523-1.496 1.44-5.328-5.24 1.496-1.439 5.328 5.239zM31.801 30.277l-1.496 1.439-5.299-5.334 1.495-1.439 5.3 5.334zM11.057 1.8h2.314v4.629h-2.314zM1.8 11.057h4.629v2.314H1.8zM29.571 22.629H34.2v2.314h-4.629zM22.629 29.571h2.314V34.2h-2.314zM18.053 23.708l-5.84 5.878a4.1 4.1 0 1 1-5.8-5.8l5.858-5.859-2.171-2.173-5.861 5.858A7.176 7.176 0 0 0 14.388 31.76l5.841-5.874ZM17.912 12.256l5.81-5.777a4.1 4.1 0 0 1 5.8 5.8l-5.793 5.793 2.171 2.174 5.8-5.793A7.176 7.176 0 1 0 21.547 4.3l-5.807 5.78Z" />
            </svg>
        );
    },
);
