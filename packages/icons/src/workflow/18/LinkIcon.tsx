import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const LinkIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M31.7 4.3a7.176 7.176 0 0 0-10.148 0c-.385.386-4.264 4.222-5.351 5.309a8.307 8.307 0 0 1 3.743.607c.519-.52 3.568-3.526 3.783-3.741a4.1 4.1 0 0 1 5.8 5.8l-7.119 7.115a4.617 4.617 0 0 1-3.372 1.3 3.953 3.953 0 0 1-2.7-1.109 4.154 4.154 0 0 1-1.241-1.626 2.067 2.067 0 0 0-.428.318l-1.635 1.712a7.144 7.144 0 0 0 1.226 1.673c2.8 2.8 7.875 2.364 10.677-.438l6.765-6.768a7.174 7.174 0 0 0 0-10.152Z" />
                <path d="M15.926 25.824c-.52.52-3.5 3.547-3.713 3.762a4.1 4.1 0 1 1-5.8-5.8L13.6 16.6a4.58 4.58 0 0 1 3.366-1.292 4.2 4.2 0 0 1 3.784 2.782 2.067 2.067 0 0 0 .428-.318l1.734-1.721a7.165 7.165 0 0 0-1.226-1.673 7.311 7.311 0 0 0-10.26.048l-7.187 7.186a7.176 7.176 0 0 0 10.148 10.149c.386-.386 4.194-4.243 5.281-5.33a8.3 8.3 0 0 1-3.742-.607Z" />
            </svg>
        );
    },
);
