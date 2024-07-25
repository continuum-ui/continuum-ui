import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const Arrow100Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M12.93 6.227 9.023 2.32a1.094 1.094 0 1 0-1.546 1.547l2.039 2.04H1.844a1.094 1.094 0 1 0 0 2.187h7.672l-2.04 2.039a1.094 1.094 0 0 0 1.547 1.547l3.907-3.907a1.093 1.093 0 0 0 0-1.546" />
            </svg>
        );
    },
);
