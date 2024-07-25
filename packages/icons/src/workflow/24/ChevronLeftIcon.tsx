import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ChevronLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 0 48 48"
                width="48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M16.3 22.585 26.949 11.94a2 2 0 0 1 2.828 0l.282.282a2.006 2.006 0 0 1 0 2.828L21.112 24l8.948 8.949a2.006 2.006 0 0 1 0 2.828l-.282.282a2 2 0 0 1-2.828 0L16.3 25.414a2 2 0 0 1 0-2.829Z" />
            </svg>
        );
    },
);
