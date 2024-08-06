import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const TextItalicIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M7.919 4a1.561 1.561 0 0 0-1.351 1l-2.109 6a.685.685 0 0 0 .649 1h2a1.557 1.557 0 0 0 1.351-1l1.055-3h8l-7.028 20h-3a1.557 1.557 0 0 0-1.351 1l-.7 2a.685.685 0 0 0 .649 1h10a1.557 1.557 0 0 0 1.351-1l.7-2a.684.684 0 0 0-.649-1h-3l7.028-20h8l-1.055 3a.685.685 0 0 0 .649 1h2a1.557 1.557 0 0 0 1.351-1l2.109-6a.686.686 0 0 0-.649-1Z" />
            </svg>
        );
    },
);
