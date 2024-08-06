import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const TextRomanUppercaseIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="22" x="14" y="4" />
                <rect height="4" rx="1" ry="1" width="22" x="14" y="16" />
                <rect height="4" rx="1" ry="1" width="22" x="14" y="28" />
                <rect height="10" rx=".5" ry=".5" width="2" x="8" />
                <rect height="10" rx=".5" ry=".5" width="2" x="10" y="12" />
                <rect height="10" rx=".5" ry=".5" width="2" x="6" y="12" />
                <rect height="10" rx=".5" ry=".5" width="2" x="10" y="24" />
                <rect height="10" rx=".5" ry=".5" width="2" x="6" y="24" />
                <rect height="10" rx=".5" ry=".5" width="2" x="2" y="24" />
            </svg>
        );
    },
);
