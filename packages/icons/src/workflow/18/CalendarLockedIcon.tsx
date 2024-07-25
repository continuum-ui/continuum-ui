import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CalendarLockedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M35.161 24.048h-1.244v-1.477C33.917 17.837 30.372 14 26 14s-7.917 3.837-7.917 8.571v1.477h-1.291a.826.826 0 0 0-.792.857v10.238a.826.826 0 0 0 .792.857h18.369a.826.826 0 0 0 .791-.857V24.905a.825.825 0 0 0-.791-.857Zm-13.244-1.477c0-2.84 1.46-5.143 4.083-5.143s4.083 2.3 4.083 5.143v1.477h-8.166Zm5.666 8.762v1.81a.826.826 0 0 1-.791.857h-1.584a.826.826 0 0 1-.791-.857v-1.81a2.652 2.652 0 0 1-.792-1.9 2.382 2.382 0 1 1 4.75 0 2.652 2.652 0 0 1-.792 1.9Z" />
                <path d="M13.467 25a2.963 2.963 0 0 1 .179-1H4V6h4v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6h10v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6h4v5.74a9.822 9.822 0 0 1 2 1.292V5a1 1 0 0 0-1-1h-5V1a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3H12V1a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h10.467Z" />
            </svg>
        );
    },
);
