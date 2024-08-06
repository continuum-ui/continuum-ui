import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const ShopIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M34.94 16H1.06a.8.8 0 0 1-.769-1.02L3.793 2.725A1 1 0 0 1 4.754 2h26.492a1 1 0 0 1 .961.725L35.71 14.98a.8.8 0 0 1-.77 1.02ZM30 18v6H14v-6h-2v14H6V18H4v14a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V18ZM4 14h2L8 4H6Zm8.5 0h2l1-10h-2Zm8-10 1 10h2l-1-10ZM30 4h-2l2 10h2Z" />
            </svg>
        );
    },
);
