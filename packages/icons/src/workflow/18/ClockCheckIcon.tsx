import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const ClockCheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14 16.086V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v10.586a1 1 0 0 1-.293.707L12.1 23.9a1 1 0 0 1-1.414 0L9.35 22.565a1 1 0 0 1 0-1.414l4.358-4.358a1 1 0 0 0 .292-.707Z" />
                <path d="M15.763 31.988A14 14 0 1 1 29.669 15a12.185 12.185 0 0 1 2.143.68A15.992 15.992 0 1 0 16 34c.29 0 .573-.028.86-.044a12.309 12.309 0 0 1-1.097-1.968Z" />
                <path d="M27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm-2.338 14.312-4.128-4.127a.5.5 0 0 1 0-.707l1.036-1.036a.5.5 0 0 1 .707 0l2.731 2.731 6.106-6.106a.5.5 0 0 1 .707 0l1.043 1.043a.5.5 0 0 1 0 .707l-7.5 7.5a.5.5 0 0 1-.702-.005Z" />
            </svg>
        );
    },
);
