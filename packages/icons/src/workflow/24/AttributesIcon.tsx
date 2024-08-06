import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const AttributesIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 0 48 48"
                width="48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M42.25 41.455V45a1 1 0 0 1-1 1h-2.5a1 1 0 0 1-1-1v-1H15a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h22.645a11.94 11.94 0 0 0-1.253-4H17.868a.773.773 0 0 1-.547-1.321l1.068-1.068A5.5 5.5 0 0 1 22.278 32h10.914a15.114 15.114 0 0 0-2.522-1.766l-2.519-1.385 4.668-2.567.019.011a17.544 17.544 0 0 1 9.412 15.162ZM15.162 21.707l.019.011 4.668-2.567-2.519-1.385A15.114 15.114 0 0 1 14.808 16h10.914a5.5 5.5 0 0 0 3.889-1.611l1.068-1.068A.773.773 0 0 0 30.132 12H11.608a11.94 11.94 0 0 1-1.253-4H33a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H10.25V3a1 1 0 0 0-1-1h-2.5a1 1 0 0 0-1 1v3.545a17.544 17.544 0 0 0 9.412 15.162ZM41.25 2h-2.5a1 1 0 0 0-1 1v3.545a12.893 12.893 0 0 1-7.08 11.221l-15.508 8.527A17.544 17.544 0 0 0 5.75 41.455V45a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1v-3.545a12.893 12.893 0 0 1 7.08-11.221l15.508-8.527A17.544 17.544 0 0 0 42.25 6.545V3a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
