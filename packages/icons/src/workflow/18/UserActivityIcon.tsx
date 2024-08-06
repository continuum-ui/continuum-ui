import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const UserActivityIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 2h.086a1 1 0 0 1 .707.293l8.914 8.914a1 1 0 0 1 .293.707V12H20Z" />
                <path d="M19 14a1 1 0 0 1-1-1V2H7a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V14Zm6.986 18h-15.96c-.01-.121-.026-.6-.026-.727 0-1.105.7-3.908 5.173-4.265a.723.723 0 0 0 .668-.707v-1.016a.673.673 0 0 0-.2-.455 6.345 6.345 0 0 1-1.841-3.58 4.359 4.359 0 0 1 4.185-4.45 4.347 4.347 0 0 1 4.215 4.45 6.358 6.358 0 0 1-1.853 3.58.678.678 0 0 0-.2.455v1.021a.726.726 0 0 0 .666.706c4.393.409 5.183 3.2 5.183 4.261.004.127-.01.727-.01.727Z" />
            </svg>
        );
    },
);
