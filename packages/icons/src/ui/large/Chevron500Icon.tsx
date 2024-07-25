import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const Chevron500Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M5.667 19.876a1.288 1.288 0 0 1-.91-2.199L12.433 10 4.756 2.323A1.288 1.288 0 0 1 6.578.502l8.588 8.587a1.29 1.29 0 0 1 0 1.822l-8.588 8.588a1.28 1.28 0 0 1-.911.377" />
            </svg>
        );
    },
);
