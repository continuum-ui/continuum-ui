import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const CoverImageIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="23.8" cy="12.6" r="2.5" />
                <path d="M34.875 4H1.125A1.068 1.068 0 0 0 0 5v22a1.068 1.068 0 0 0 1.125 1h2.4a13.248 13.248 0 0 1 3.24-1.088 11.565 11.565 0 0 1-2.131-6.469c0-.046.01-.086.01-.131C3.152 22.2 2 24 2 24V6h32v16a15.164 15.164 0 0 0-6.182-2c-2.463 0-4.647 2.785-7.019 3.7a11.691 11.691 0 0 1-1.55 3.242A13.647 13.647 0 0 1 22.383 28h12.492A1.068 1.068 0 0 0 36 27V5a1.068 1.068 0 0 0-1.125-1Z" />
                <path d="M24 34.038a3.12 3.12 0 0 0-1.048-2.353 10.109 10.109 0 0 0-5.738-2.234 1.144 1.144 0 0 1-.99-1.148v-1.658a1.114 1.114 0 0 1 .276-.721 8.747 8.747 0 0 0 2.007-5.481C18.507 16.31 16.315 14 13 14s-5.567 2.4-5.567 6.443a8.853 8.853 0 0 0 2.1 5.485 1.106 1.106 0 0 1 .273.717V28.3a1.138 1.138 0 0 1-.993 1.148 9.693 9.693 0 0 0-5.809 2.232A3.125 3.125 0 0 0 2 34v2h22Z" />
            </svg>
        );
    },
);
