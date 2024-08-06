import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const ImportIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24.854 23.646 15.707 14.3A1 1 0 0 0 14 15v5H5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h9v5a1 1 0 0 0 1.707.707l9.147-9.353a.5.5 0 0 0 0-.708Z" />
                <path d="M8 6v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8h28v32H12v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v5a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2Z" />
            </svg>
        );
    },
);
