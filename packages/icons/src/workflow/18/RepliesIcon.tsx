import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RepliesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M21.947 6.059V2.878a.636.636 0 0 0-1.086-.45l-7.187 7.449 7.186 7.449a.636.636 0 0 0 1.086-.45v-3.229a11.687 11.687 0 0 1 11.916 4.632.45.45 0 0 0 .811-.26c.001-1.919-2.191-11.96-12.726-11.96ZM11.975 18v-3.749a.75.75 0 0 0-1.28-.53L2.225 22.5l8.47 8.779a.75.75 0 0 0 1.28-.53v-3.8A13.773 13.773 0 0 1 26.019 32.4a.531.531 0 0 0 .956-.307c0-2.261-2.584-14.093-15-14.093Z" />
            </svg>
        );
    },
);
