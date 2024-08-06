import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const SelectionCheckedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M2 20h2v6H2zM2 10h2v6H2zM32 10h2v6h-2zM4 32v-2H2v3.111a.889.889 0 0 0 .889.889H6v-2ZM33.111 2H30v2h2v2h2V2.888A.888.888 0 0 0 33.111 2ZM20 2h6v2h-6zM10 2h6v2h-6zM10 32h6v2h-6zM6 2H3a1 1 0 0 0-1 1v3h2V4h2ZM27 18a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm5.957 6.26-6.476 7.929a.5.5 0 0 1-.738.041l-4.759-4.667a.5.5 0 0 1-.008-.708l1.61-1.641a.5.5 0 0 1 .706-.007l2.573 2.519 4.535-5.553a.5.5 0 0 1 .7-.07l1.78 1.453a.5.5 0 0 1 .077.704Z" />
            </svg>
        );
    },
);
