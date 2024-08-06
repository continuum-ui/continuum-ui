import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const VisitIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33 4H3a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h2.314a8.995 8.995 0 0 1 1.949-2H4V10h28v18h-3.437a9.453 9.453 0 0 1 2.024 2H33a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z" />
                <path d="M21.213 27.051v-1.674a1.159 1.159 0 0 1 .295-.747 8.842 8.842 0 0 0 2.01-5.517c0-4.175-2.214-6.508-5.56-6.508s-5.623 2.425-5.623 6.508a8.936 8.936 0 0 0 2.107 5.517 1.159 1.159 0 0 1 .295.747v1.667a1.15 1.15 0 0 1-1 1.16c-6.722.585-7.727 5.183-7.727 7 0 .2-.007.8-.007.8H30v-.8c0-1.738-1.187-6.32-7.788-6.99a1.155 1.155 0 0 1-.999-1.163Z" />
            </svg>
        );
    },
);
