import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DeselectIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="56" rx="1" ry="1" transform="rotate(-45 24 24)" width="4" x="22" y="-4" />
                <path d="M5.516 14H4v8h4v-5.516L5.516 14zM8 40v-2H4v5a1 1 0 0 0 1 1h5v-4ZM4 26h4v8H4zM14 40h8v4h-8zM34 42.484 31.516 40H26v4h8v-1.516zM22 4h-8v1.516L16.484 8H22V4zM26 4h8v4h-8zM43 4h-5v4h2v2h4V5a1 1 0 0 0-1-1ZM40 14h4v8h-4zM44 34v-8h-4v5.516L42.484 34H44z" />
            </svg>
        );
    },
);
