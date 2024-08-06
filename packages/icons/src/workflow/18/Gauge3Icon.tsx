import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const Gauge3Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18.861 4.763a.867.867 0 0 0-1.722 0l-2.31 19.116A3.219 3.219 0 0 0 18 27.649a3.219 3.219 0 0 0 3.171-3.77ZM33.965 18.754A16.163 16.163 0 0 0 21.816 4.292c.006.037.019.071.023.109l.377 3.116A13.022 13.022 0 0 1 31 19.813a12.878 12.878 0 0 1-.691 4.117.492.492 0 0 0 .116.506L31.987 26a.5.5 0 0 0 .818-.154 15.842 15.842 0 0 0 1.16-7.092ZM2 19.813a13.828 13.828 0 0 0 1.394 5.867.5.5 0 0 0 .806.133l1.375-1.376a.491.491 0 0 0 .116-.508 12.465 12.465 0 0 1-.313-7.12 13.334 13.334 0 0 1 8.4-9.227L14.16 4.4c0-.039.019-.074.024-.113A15.993 15.993 0 0 0 2 19.813Z" />
            </svg>
        );
    },
);
