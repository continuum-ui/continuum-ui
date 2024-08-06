import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const CalendarUnlockedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M35 24H21.917v-3.429c0-2.84 1.459-5.143 4.083-5.143a3.825 3.825 0 0 1 3.676 2.744.5.5 0 0 0 .664.307l2.474-1.06a.513.513 0 0 0 .269-.676A7.879 7.879 0 0 0 26 12c-4.372 0-7.917 3.837-7.917 8.571V24H17a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V25a1 1 0 0 0-1-1Zm-7.417 7.333v1.81a.826.826 0 0 1-.791.857h-1.584a.826.826 0 0 1-.791-.857v-1.81a2.652 2.652 0 0 1-.792-1.9 2.382 2.382 0 1 1 4.75 0 2.652 2.652 0 0 1-.792 1.9Z" />
                <path d="M13.467 25a2.963 2.963 0 0 1 .179-1H4V6h4v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6h10v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6h4v3.74a9.822 9.822 0 0 1 2 1.292V5a1 1 0 0 0-1-1h-5V1a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3H12V1a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h10.467Z" />
            </svg>
        );
    },
);
