import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const DoubleGripperIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 6"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M19.375 1.75H.625a.625.625 0 0 1 0-1.25h18.75a.625.625 0 0 1 0 1.25M20 4.875a.626.626 0 0 0-.625-.625H.625a.625.625 0 0 0 0 1.25h18.75A.626.626 0 0 0 20 4.875" />
            </svg>
        );
    },
);
