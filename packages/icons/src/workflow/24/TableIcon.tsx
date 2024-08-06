import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const TableIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42 4H6a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM16 40H8v-4h8Zm0-8H8v-4h8Zm0-8H8v-4h8Zm24 16H20v-4h20Zm0-8H20v-4h20Zm0-8H20v-4h20Zm0-8H8V8h32Z" />
            </svg>
        );
    },
);
