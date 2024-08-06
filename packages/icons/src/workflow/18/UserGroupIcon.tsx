import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const UserGroupIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M26.922 20.476c-1.441-.125-1.464-1.284-1.464-2.729a13.151 13.151 0 0 0 3.09-7.837c0-4.746-2.7-7.91-6.589-7.91a6.3 6.3 0 0 0-2.679.574c3.206 1.69 5.24 5.28 5.24 9.9a15.6 15.6 0 0 1-2.42 7.949.861.861 0 0 0 .474 1.288A13.488 13.488 0 0 1 31.779 30h3.257a.871.871 0 0 0 .879-.922c-.579-6.289-7.023-8.43-8.993-8.602Z" />
                <path d="M28.973 34a.931.931 0 0 0 .941-.988c-.62-6.734-7.525-9.028-9.636-9.212-1.544-.134-1.569-1.377-1.569-2.925a14.093 14.093 0 0 0 3.311-8.4C22.02 7.391 19.126 4 14.959 4S7.9 7.391 7.9 12.477a14.093 14.093 0 0 0 3.311 8.4c0 1.548-.025 2.791-1.569 2.925-2.113.182-9.018 2.476-9.642 9.21A.931.931 0 0 0 .945 34Z" />
            </svg>
        );
    },
);
