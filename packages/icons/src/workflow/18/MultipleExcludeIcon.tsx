import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MultipleExcludeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M29 2H19a1 1 0 0 0-1 1v5h4a2 2 0 0 1 2 2v4h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
                <rect height="12" rx="1" ry="1" width="12" x="2" y="18" />
                <path d="M16 18v3.492a12.351 12.351 0 0 1 6-5.733V11a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v5h4a2 2 0 0 1 2 2ZM27.1 18.2a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm-7 8.9a6.934 6.934 0 0 1 1.475-4.252l9.777 9.777A6.966 6.966 0 0 1 20.1 27.1Zm12.525 4.252-9.777-9.777a6.966 6.966 0 0 1 9.777 9.777Z" />
            </svg>
        );
    },
);
