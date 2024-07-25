import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ColorPaletteIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M23.614 6.145c-4.37-.695-9.006 0-9.648 2.092a2.293 2.293 0 0 0 1.294 2.908c1.152.647 2.602 2.673 1.139 4.54a2.827 2.827 0 0 1-3.125 1.127c-3.748-.947-7.893-2.882-11.285.345-3.092 2.941-1.831 7.309 1.165 9.685a23.403 23.403 0 0 0 14.513 5.274C27.253 32.116 35.8 26.465 35.8 19c0-7.558-7.168-12.057-12.186-12.855ZM8.694 27.453a3.799 3.799 0 1 1 3.798-3.799 3.799 3.799 0 0 1-3.798 3.8ZM27.98 11.42a2.5 2.5 0 1 1-2.5 2.5 2.5 2.5 0 0 1 2.5-2.5ZM17.278 29.56a3.56 3.56 0 1 1 3.56-3.56 3.56 3.56 0 0 1-3.56 3.56Zm7.79-1.496a3.005 3.005 0 1 1 3.004-3.005 3.005 3.005 0 0 1-3.004 3.005ZM30 22.56a2.675 2.675 0 1 1 2.674-2.675A2.674 2.674 0 0 1 30 22.56Z" />
            </svg>
        );
    },
);
