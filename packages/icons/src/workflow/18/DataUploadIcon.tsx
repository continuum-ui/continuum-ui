import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const DataUploadIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <ellipse cx="18" cy="7" rx="16" ry="5" />
                <path d="m17 31-4.209-.011a2.5 2.5 0 0 1-1.852-4.179l2.517-2.786C8.729 23.548 3.321 22.366 2 20.27V29c0 2.656 6.632 4.822 15 4.984ZM32.3 19.235C33.377 18.562 34 17.8 34 17v-6.73c-1.216 1.538-3.958 2.536-7.014 3.151ZM22.456 14.063a50.39 50.39 0 0 1-4.456.212c-4.936 0-14.212-1.168-16-4V17c0 2.479 5.778 4.531 13.352 4.926Z" />
                <path d="M35.146 27.146a.5.5 0 0 1-.353.854H30v8H20v-8h-4.793a.5.5 0 0 1-.353-.854L25 16Z" />
            </svg>
        );
    },
);
